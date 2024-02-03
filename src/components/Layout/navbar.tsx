'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function Navbar() {
  const { logout } = useAuth();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const logoutClicked = async () => {
    logout();
  };

  return (
    <>
      <nav className="bg-[#008000] fixed w-full z-20 top-0 start-0 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between mx-auto py-5 px-10">
          <Link href="/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-bold whitespace-nowrap text-white">Farm Origins</span>
          </Link>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <div className="relative inline-block group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer">
                    <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>

                  <div className={`z-10 ${isDropdownVisible ? '' : 'hidden'} absolute right-0`}>
                    <div className="w-full h-3 bg-[#008000]"></div>
                    <ul className="cursor-pointer text-sm text-gray-700 dark:text-gray-200 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 " aria-labelledby="dropdownHoverButton">
                      <li>
                        <div className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg">My Profile</div>
                      </li>
                      <li>
                        <div className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Orders</div>
                      </li>
                      <li>
                        <div className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</div>
                      </li>
                      <li>
                        <div className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={logoutClicked}>
                          Sign out
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
