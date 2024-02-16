import { ProductType } from '@/types/product/productType';
import Image from 'next/image';

interface ProductCardProps {
  product: ProductType;
  onEditClicked?: () => void;
  onDeleteClicked?: () => void;
}

export default function ProductCard({ product, onEditClicked, onDeleteClicked }: ProductCardProps) {
  return (
    <div className="flex bg-white border border-gray-200 rounded-lg shadow h-min relative">
      <div className="flex items-center justify-center p-4 bg-[#ebeef1] w-60">
        <Image src="/assets/store/default-image.png" width={50} height={50} alt="Store Default Image" style={{ width: 'auto', height: 'auto' }} />
      </div>
      <div className="p-8 w-3/4">
        <div className="flex flex-col gap-3">
          <span className="text-xl font-bold leading-5 text-gray-700">{product.name}</span>
          <span className="text-base font-bold text-gray-400">{product.categoryName}</span>
          <span className="text-base font-semibold leading-6 text-gray-500">{product.description}</span>
          <div>
            <span className="text-sm font-bold text-gray-400 mr-1">Amount:</span>
            <span className="text-sm font-bold text-gray-800">{product.amount + ' ' + product.unitTypeName}</span>
          </div>
          <div>
            <span className="text-sm font-bold text-gray-400 mr-1">Price:</span>
            <span className="text-sm font-bold text-gray-800">{product.price}</span>
          </div>
        </div>
      </div>
      <div className="absolute top-8 right-8 flex gap-4">
        {onEditClicked ? <Image src="/assets/common/edit.svg" alt="Edit" width={20} height={20} className="cursor-pointer" onClick={onEditClicked} /> : null}
        {onDeleteClicked ? <Image src="/assets/common/delete.svg" alt="Delete" width={20} height={20} className="cursor-pointer" onClick={onDeleteClicked} /> : null}
      </div>
    </div>
  );
}
