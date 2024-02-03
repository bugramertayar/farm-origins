import Link from 'next/link';

export default function Store() {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <Link href="/store/add" className="bg-gray-200 rounded-md text-center p-10">
          <p className="text-xl font-bold">You don't have any store. Click here to create your Store</p>
        </Link>
      </div>
    </>
  );
}
