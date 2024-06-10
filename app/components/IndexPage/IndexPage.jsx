"use client";

import Hero from "./(components)/Hero";
import { redirect } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function IndexPage() {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  const isLoggenIn = isAuthenticated;
  if (isLoading) {
    return "Loading...";
  }

  // Check if the user is Authenticated
  if (isLoggenIn) {
    redirect("/dasboard");
  }

  return (
    <div className='py-5'>
      <Hero />
    </div>
  );
}
