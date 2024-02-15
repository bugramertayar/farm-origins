import { PlatformButton, Sidebar, SidebarFooter } from '@/components/common';
import { ProductType } from '@/types/store/productType';
import { useState } from 'react';
import { TextInput, SelectInput, NumberInput } from '@/components/inputs';
import { ProductService } from '@/services/product.service';
import { SelectOptionNumberType } from '@/types/common/selectOptionNumberType';
import ProductCard from '../productCard';

export default function StoreProductForm() {
  const productService = new ProductService();

  const [productList, setProductList] = useState<ProductType[]>([]);
  const [isProductSidebarOpen, setIsProductSidebarOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [unitTypeId, setUnitTypeId] = useState(0);
  const [unitTypeOptions, setUnitTypeOptions] = useState<SelectOptionNumberType[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<SelectOptionNumberType[]>([]);

  const onProductSidebarClosed = (value: boolean) => {
    if (value) {
      setIsProductSidebarOpen(false);
    }
  };

  const openProductSidebar = async () => {
    try {
      const [unitTypes, categories] = await Promise.all([productService.getUnitTypes(), productService.getCategories()]);

      if (unitTypes && categories) {
        setUnitTypeOptions(unitTypes);
        setCategoryOptions(categories);
        setIsProductSidebarOpen(true);
      }
    } catch (error) {
      // TODO toast error
    }
  };

  const handleEditProductClick = (productName: string | undefined) => {};

  const handleDeleteProductClick = (productName: string | undefined) => {};

  const saveProduct = () => {
    const newProduct: ProductType = {
      name: name,
      description: description,
      image: image,
      amount: amount,
      categoryId: categoryId,
      price: price,
      unitTypeId: unitTypeId,
      unitTypeName: unitTypeOptions.find((x) => x.value === unitTypeId)?.label,
      categoryName: categoryOptions.find((x) => x.value === categoryId)?.label
    };
    setProductList((prevProductList) => [...prevProductList, newProduct]);
    setIsProductSidebarOpen(false);
  };

  const productSidebarContent = (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        <TextInput label="Name" id="name" placeholder="Name" value={name} onChange={setName} />
        <TextInput label="Description" id="description" placeholder="Description" value={description} onChange={setDescription} />
        <TextInput label="Image" id="image" placeholder="Image" value={image} onChange={setImage} />
        <SelectInput label="Category" id="categoryId" options={categoryOptions} value={categoryId} onChange={setCategoryId} />
        <NumberInput label="Amount" min={0} id="amount" placeholder="Amount" value={amount} onChange={setAmount} />
        <SelectInput label="Unit Type" id="unitTypeId" options={unitTypeOptions} value={unitTypeId} onChange={setUnitTypeId} />
        <NumberInput label="Price" min={0} id="price" placeholder="Price" value={price} onChange={setPrice} />
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
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center border-b border-solid border-gray-400 border-opacity-50 pb-3">
        <h1 className="text-xl font-bold leading-5 text-gray-700">Products ({productList?.length})</h1>
        <div className="w-1/6 order-last">
          <PlatformButton text="Create New Product" onClick={() => openProductSidebar()} />
        </div>
      </div>

      {productList?.length < 1 ? (
        <div className="flex justify-center items-center mt-10">
          <div className="flex justify-center items-center bg-gray-300 p-10 border rounded-lg shadow w-1/2">
            <span>
              You dont have any products yet.{' '}
              <span className="text-blue-500 cursor-pointer" onClick={() => openProductSidebar()}>
                Click here to create product.
              </span>
            </span>
          </div>
        </div>
      ) : null}

      <Sidebar title="Create New Product" content={productSidebarContent} footer={productSidebarFooter} isSidebarOpen={isProductSidebarOpen} onSidebarClosed={(event) => onProductSidebarClosed(event)} />

      <div>
        {productList.map((product: ProductType) => (
          <div key={product.id} className="mb-5">
            <ProductCard product={product} onEditClicked={() => handleEditProductClick(product.name)} onDeleteClicked={() => handleDeleteProductClick(product.name)} />
          </div>
        ))}
      </div>
    </div>
  );
}
