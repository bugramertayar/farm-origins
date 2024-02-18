import { StoreCreateFormType } from '@/types/store/storeCreateFormType';
import Image from 'next/image';

interface StoreConfirmationFormProps {
  store: StoreCreateFormType;
}

export default function StoreConfirmationForm({ store }: StoreConfirmationFormProps) {
  return (
    <>
      {' '}
      <div className="grid grid-cols-2 gap-x-8">
        <div className="rounded-lg border-2 border-gray-300 bg-white">
          <div className="p-4 px-8 rounded-md rounded-bl-none rounded-br-none bg-gray-200">
            <span className="text-lg font-bold">Store Details</span>
          </div>

          <div className="flex justify-between items-center px-8 py-4">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-bold text-gray-700">{store.name}</span>
              <div className="flex gap-2">
                <span className="font-extrabold">Description:</span>
                <span>{store.description}</span>
              </div>

              <div className="flex gap-2">
                <span className="font-extrabold">Email:</span>
                <span>{store.email}</span>
              </div>

              <div className="flex gap-2">
                <span className="font-extrabold">Phone Number:</span>
                <span>{store.phoneNumber}</span>
              </div>

              <div className="flex gap-2">
                <span className="font-extrabold">Store Vkn:</span>
                <span>{store.vkn}</span>
              </div>
            </div>

            <Image src="/assets/store/store-front.svg" width={40} height={40} alt="Store Default Image" />
          </div>
        </div>

        <div className="rounded-lg border-2 border-gray-300 bg-white h-fit">
          <div className="p-4 px-8 rounded-md rounded-bl-none rounded-br-none bg-gray-200">
            <span className="text-lg font-bold">Address Details</span>
          </div>

          <div className="flex justify-between items-center px-8 py-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <span className="font-extrabold">Address:</span>
                <span>{store.address}</span>
              </div>
            </div>

            <Image src="/assets/store/location.svg" width={40} height={40} alt="Store Default Image" />
          </div>
        </div>
      </div>
      <div className="rounded-lg border-2 border-gray-300 bg-white h-auto mt-4">
        <div className="p-4 px-8 rounded-md rounded-bl-none rounded-br-none bg-gray-200">
          <span className="text-lg font-bold">Products</span>
        </div>

        <div className="w-full px-8 py-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {store.productList.map((product) => (
                <tr className="bg-white border-b">
                  <td className="px-6 py-3">{product.name}</td>
                  <td className="px-6 py-3">{product.description}</td>
                  <td className="px-6 py-3">{product.categoryName}</td>
                  <td className="px-6 py-3">{product.amount + ' ' + product.unitTypeName}</td>
                  <td className="px-6 py-3">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
