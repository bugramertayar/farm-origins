export default function SidebarFooter({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="absolute left-0 right-0 bottom-0 w-full z-20 bg-white shadow-md px-5 py-6 border-t border-gray-400 border-opacity-50 grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </>
  );
}
