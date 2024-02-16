import { PlatformButton } from '@/components/common';
import { ProductType } from '@/types/product/productType';
import { Dispatch, SetStateAction, useState } from 'react';
import ProductCard from '../productCard';
import { ProductFormSidebar } from '../../product';

interface StoreProductFormProps {
  productList: ProductType[];
  setProductList: Dispatch<SetStateAction<ProductType[]>>;
}

export default function StoreProductForm({ productList, setProductList }: StoreProductFormProps) {
  const [isProductSidebarOpen, setIsProductSidebarOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState<ProductType | null>(null);

  const handleEditProductClick = (product: ProductType) => {
    setProductToEdit(product);
    setIsProductSidebarOpen(true);
  };

  const handleDeleteProductClick = (productId: string | undefined) => {
    if (!productId) {
      return;
    }

    const existingProductIndex = productList.findIndex((product) => product.id === productId);

    if (existingProductIndex === -1) {
      return;
    }

    const updatedProductList = [...productList];
    updatedProductList.splice(existingProductIndex, 1);
    setProductList(updatedProductList);
  };

  const generateUniqueId = (): string => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const saveProduct = (product: ProductType) => {
    if (product.id && product.id !== '') {
      const existingProductIndex = productList.findIndex((x) => x.id === product.id);
      const updatedProductList = [...productList];
      updatedProductList[existingProductIndex] = product;
      setProductList(updatedProductList);
    } else {
      const newProductId = generateUniqueId();
      const newProduct = { ...product, id: newProductId };
      setProductList((prevProductList) => [...prevProductList, newProduct]);
    }

    setIsProductSidebarOpen(false);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center border-b border-solid border-gray-400 border-opacity-50 pb-3">
        <h1 className="text-xl font-bold leading-5 text-gray-700">Products ({productList?.length})</h1>
        <div className="w-1/6 order-last">
          <PlatformButton text="Create New Product" onClick={() => setIsProductSidebarOpen(true)} />
        </div>
      </div>

      {productList?.length < 1 ? (
        <div className="flex justify-center items-center mt-10">
          <div className="flex justify-center items-center bg-gray-300 p-10 border rounded-lg shadow w-1/2">
            <span>
              You dont have any products yet.{' '}
              <span className="text-blue-500 cursor-pointer" onClick={() => setIsProductSidebarOpen(true)}>
                Click here to create product.
              </span>
            </span>
          </div>
        </div>
      ) : null}

      <ProductFormSidebar
        title="Create New Product"
        product={productToEdit}
        isSidebarOpen={isProductSidebarOpen}
        onSidebarClosed={(event) => {
          setIsProductSidebarOpen(false);
          setProductToEdit(null);
        }}
        onSidebarSaved={(product) => saveProduct(product)}
      />

      <div>
        {productList.map((product: ProductType) => (
          <div key={product.id} className="mb-5">
            <ProductCard product={product} onEditClicked={() => handleEditProductClick(product)} onDeleteClicked={() => handleDeleteProductClick(product.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}
