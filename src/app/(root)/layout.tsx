import { NavbarLayout } from '@/components/layout';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NavbarLayout>{children}</NavbarLayout>;
}
