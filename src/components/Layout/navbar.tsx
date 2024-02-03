'use client';
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const { logout } = useAuth();

  const logoutClicked = async () => {
    logout();
  };

  return (
    <>
      <nav className="bg-[#0e1111] fixed w-full z-20 top-0 start-0 pt-2 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 px-20">
          <Link href="/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-bold whitespace-nowrap text-[#D95C48]">Farm Origins</span>
          </Link>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <div className="cursor-pointer block py-2 px-3 text-[#AEAEAE] rounded hover:bg-[#D95C48] md:hover:bg-transparent md:hover:text-[#D95C48] md:p-0 font-semibold" onClick={logoutClicked}>
                  Logout
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
