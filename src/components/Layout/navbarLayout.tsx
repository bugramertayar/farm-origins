import React, { PropsWithChildren } from 'react';
import { Navbar } from '.';

export default function NavbarLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="pt-[76px] h-full flex flex-col">{children}</div>
    </>
  );
}
