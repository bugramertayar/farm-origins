'use client';

import React, { PropsWithChildren } from 'react';
import Navbar from './navbar';
import { publicRoutes } from '@/contexts/publicRoutes';
import { usePathname } from 'next/navigation';

export default function NavbarLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <>
      {!publicRoutes.includes(pathname) ? <Navbar /> : null}
      <div className={!publicRoutes.includes(pathname) ? `pt-20 h-full` : `h-full`}>{children}</div>
    </>
  );
}
