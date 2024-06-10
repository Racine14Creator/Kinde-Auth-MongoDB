"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }) {
  const { user } = useKindeBrowserClient();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAndCreateUser = async () => {
      if (!user) {
        redirect("/");
        return;
      }

      try {
        const userEmail = user.email;

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/user/${userEmail}`,
          {
            method: "POST",
          }
        );

        if (response.status === 404) {
          // User does not exist, create a new one
          await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user.email,
              first_name: user.family_name,
              given_name: user.given_name,
              picture: user.picture,
              userId: user.userId,
            }),
          });
        }
      } catch (error) {
        console.error("Error checking or creating user:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAndCreateUser();
  }, [user]);

  if (loading) {
    return (
      <div className='absolute w-full h-screen bg-black text-white font-bold flex justify-center items-center'>
        Loading...
      </div>
    );
  }

  return (
    <div className='container max-w-[1024px] mx-auto  border-r border-l'>
      {children}
    </div>
  );
}
