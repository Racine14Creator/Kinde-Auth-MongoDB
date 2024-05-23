"use client";

import { ModeToggle } from "@/components/ToggleThemeButton";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

const navLinks = [
  { name: "Dashboard", href: "/" },
  { name: "Profile", href: "/dashoard/profile" },
  { name: "Tracker", href: "/dashboard/tracker" },
];
export default function Navbar() {
  const { isAuthenticated } = useKindeBrowserClient();
  return (
    <div className='bg-background  border-b'>
      <div className='container max-w-[1024px] mx-auto text-black flex justify-between items-center h-[10vh]'>
        <Link
          href={"/"}
          className='text-3xl font-bold text-black dark:text-white'
        >
          Racine14 <span className='text-blue-500'>Creator</span>
        </Link>
        <div className='lg:flex hidden'>
          {isAuthenticated ? (
            <>
              {navLinks.map((item, index) => {
                return (
                  <Link
                    className='rounded px-4 py-2 bg-slate-100 mx-1'
                    href={item.href}
                    key={index}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <LogoutLink className='rounded px-4 py-2 bg-red-600 text-white mx-1'>
                Sign Out
              </LogoutLink>
            </>
          ) : (
            <>
              <LoginLink className='rounded px-4 py-2 bg-slate-100 mx-1'>
                Sign In
              </LoginLink>
              <RegisterLink className='rounded px-4 py-2 bg-red-500 mx-1'>
                Sign Up
              </RegisterLink>
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
