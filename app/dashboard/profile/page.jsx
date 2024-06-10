"use client";

import Image from "next/image";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function page() {
  const { user } = useKindeBrowserClient();
  // console.log(user);
  return (
    <div className='h-screen border-x p-5 -m-3'>
      <div className='flex justify-between items-center'>
        <h3>
          Profile /{" "}
          <span className='text-blue hover:pointer'>{user?.given_name}</span>
        </h3>
        <Image
          className='w-50 h-50 rounded-full'
          src={user?.picture}
          alt={user?.family_name}
          width={70}
          height={70}
        />
      </div>
    </div>
  );
}
