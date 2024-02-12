'use client';
import { Sidebar, Stepper } from '@/components/common';
import { useState } from 'react';
import { STORE_CREATE_STEPPER_OPTIONS } from '../common';
import { TextInput } from '@/components/inputs';
import { useRouter } from 'next/navigation';
import { StoreCard } from '@/components/page-components/store';
import { ProductType } from '@/types/store/productType';

export default function AddNewStore() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [vkn, setVkn] = useState('');
  const [address, setAddress] = useState('');
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [isProductSidebarOpen, setIsProductSidebarOpen] = useState(false);

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productCategoryId, setProductCategoryId] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [productAmount, setProductAmount] = useState(0);
  const [productUnitTypeId, setProductUnitTypeId] = useState('');

  const backClicked = () => {
    if (currentStep === 0) {
      router.push('/store');
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextClicked = () => {
    if (currentStep === STORE_CREATE_STEPPER_OPTIONS.length - 1) {
      // TODO submit form and route
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const onProductSidebarClosed = (value: boolean) => {
    if (value) {
      setIsProductSidebarOpen(false);
    }
  };

  const handleEditProductClick = (id: string | undefined) => {};

  const handleDeleteProductClick = (id: string | undefined) => {};

  const productSidebarContent = (
    <>
      <div className="grid gap-6 my-4 md:grid-cols-2">
        <TextInput label="Product Name" id="productName" placeholder="Product Name" value={productName} onChange={setProductName} />

        <TextInput label="Product Description" id="productDescription" placeholder="Product Description" value={productDescription} onChange={setProductDescription} />

        <TextInput label="Product Image" id="productImage" placeholder="Product Image" value={productImage} onChange={setProductImage} />
      </div>
    </>
  );

  return (
    <>
      <div className="p-8 border-b-2 border-solid border-gray-200">
        <Stepper currentStep={currentStep} options={STORE_CREATE_STEPPER_OPTIONS}></Stepper>
      </div>

      <div className="p-8 flex flex-col justify-between flex-grow">
        {currentStep === 0 ? (
          <div className="grid gap-6 my-4 md:grid-cols-2">
            <TextInput label="Store Name" id="name" placeholder="Store Name" value={name} onChange={setName} />

            <TextInput label="Store Description" id="description" placeholder="Store Description" value={description} onChange={setDescription} />

            <TextInput label="Image" id="image" placeholder="Image" value={image} onChange={setImage} />

            <TextInput label="Email address" id="email" placeholder="john.doe@company.com" value={email} onChange={setEmail} />

            <TextInput label="Phone Number" id="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={setPhoneNumber} />

            <TextInput label="Store Vkn" id="vkn" placeholder="Store Vkn" value={vkn} onChange={setVkn} />
          </div>
        ) : null}

        {currentStep === 1 ? (
          <div className="grid gap-6 my-4">
            <TextInput label="Store Address" id="address" placeholder="Store Address" value={address} onChange={setAddress} />
          </div>
        ) : null}

        {currentStep === 2 ? (
          <div className="flex flex-col gap-3 my-2">
            <div className="flex justify-end">
              <button onClick={() => setIsProductSidebarOpen(true)} className="text-center focus:outline-none text-white text-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5">
                Create New Product
              </button>
            </div>

            <Sidebar title="Create New Product" content={productSidebarContent} isSidebarOpen={isProductSidebarOpen} onSidebarClosed={(event) => onProductSidebarClosed(event)} />

            <div>
              {productList.map((product: ProductType) => (
                <StoreCard key={product.id} title={product.name} description={product.description} onEditClicked={() => handleEditProductClick(product.id)} onDeleteClicked={() => handleDeleteProductClick(product.id)} />
              ))}
            </div>
          </div>
        ) : null}

        <div className="grid grid-cols-6 gap-4">
          <button onClick={backClicked} className="text-center focus:outline-none col-start-1 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5">
            {currentStep === 0 ? 'Cancel' : 'Back'}
          </button>
          <button onClick={nextClicked} type="submit" className="text-center focus:outline-none col-start-6 text-white text-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5">
            {currentStep === STORE_CREATE_STEPPER_OPTIONS.length - 1 ? 'Save' : 'Next'}
          </button>
        </div>
      </div>
    </>
  );
}
