import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className='border-t p-5'>
      <div className='container flex justify-between items-center py-5 max-w-[1024px] mx-auto'>
        <h3>
          Racine14 <span className='text-blue-500'>Creator</span>
        </h3>
        <ul className='flex justify-between items-center gap-2'>
          <li>
            <Link href={"/dashboard"}>Learn more</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
