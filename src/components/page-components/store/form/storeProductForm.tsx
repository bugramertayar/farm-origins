import { PlatformButton, Sidebar, SidebarFooter } from '@/components/common';
import { ProductType } from '@/types/store/productType';
import { useState } from 'react';
import { StoreCard } from '..';
import { TextInput, SelectInput, NumberInput } from '@/components/inputs';

export default function StoreProductForm() {
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [isProductSidebarOpen, setIsProductSidebarOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [unitTypeId, setUnitTypeId] = useState(0);

  const onProductSidebarClosed = (value: boolean) => {
    if (value) {
      setIsProductSidebarOpen(false);
    }
  };

  const handleEditProductClick = (id: string | undefined) => {};

  const handleDeleteProductClick = (id: string | undefined) => {};

  const saveProduct = () => {};

  const categoryOptions = [
    { value: 0, label: 'Jack' },
    { value: 1, label: 'Lucy' },
    { value: 2, label: 'yiminghe' },
    { value: 3, label: 'Disabled' }
  ];

  const unitTypeOptions = [
    { value: 0, label: 'Buğra' },
    { value: 1, label: 'Lucy' },
    { value: 2, label: 'yiminghe' },
    { value: 3, label: 'Disabled' }
  ];

  const productSidebarContent = (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        <TextInput label="Name" id="name" placeholder="Name" value={name} onChange={setName} />
        <TextInput label="Description" id="description" placeholder="Description" value={description} onChange={setDescription} />
        <TextInput label="Image" id="image" placeholder="Image" value={image} onChange={setImage} />
        <SelectInput label="Category" id="categoryId" options={categoryOptions} value={categoryId} onChange={setCategoryId} />
        <NumberInput label="Price" id="price" placeholder="Price" value={price} onChange={setPrice} />
        <NumberInput label="Amount" id="amount" placeholder="Amount" value={amount} onChange={setAmount} />
        <SelectInput label="Unit Type" id="unitTypeId" options={unitTypeOptions} value={unitTypeId} onChange={setUnitTypeId} />
      </div>
    </>
  );

  const productSidebarFooter = (
    <SidebarFooter>
      <PlatformButton type="secondary" text="Cancel" onClick={() => setIsProductSidebarOpen(false)} />
      <PlatformButton text="Save" onClick={saveProduct} />
    </SidebarFooter>
  );

  return (
    <div className="flex flex-col gap-3 my-2">
      <div className="flex justify-end">
        <div className="w-1/6 order-last">
          <PlatformButton text="Create New Product" onClick={() => setIsProductSidebarOpen(true)} />
        </div>
      </div>

      <Sidebar title="Create New Product" content={productSidebarContent} footer={productSidebarFooter} isSidebarOpen={isProductSidebarOpen} onSidebarClosed={(event) => onProductSidebarClosed(event)} />

      <div>
        {productList.map((product: ProductType) => (
          <StoreCard key={product.id} title={product.name} description={product.description} onEditClicked={() => handleEditProductClick(product.id)} onDeleteClicked={() => handleDeleteProductClick(product.id)} />
        ))}
      </div>
    </div>
  );
}
