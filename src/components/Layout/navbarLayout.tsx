'use client';

import React, { PropsWithChildren } from 'react';
import { publicRoutes } from '@/contexts/publicRoutes';
import { usePathname } from 'next/navigation';
import { Navbar } from '.';

export default function NavbarLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <>
      {!publicRoutes.includes(pathname) ? <Navbar /> : null}
      <div className={!publicRoutes.includes(pathname) ? `pt-[76px] h-full` : `h-full`}>{children}</div>
    </>
  );
}
