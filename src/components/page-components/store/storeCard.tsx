import Image from 'next/image';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';

interface StoreCardProps {
  title: string;
  description: string;
  image?: string;
  onEditClicked?: () => void;
  onDeleteClicked?: () => void;
}

export default function StoreCard({ title, description, image, onEditClicked, onDeleteClicked }: StoreCardProps) {
  return (
    <div className="flex bg-white border border-gray-200 rounded-lg shadow h-min relative">
      <div className="flex items-center justify-center p-4 bg-[#ebeef1] w-60">
        <Image src="/assets/store/default-image.png" width={50} height={50} alt="Store Default Image" style={{ width: 'auto', height: 'auto' }} />
      </div>
      <div className="p-8 w-3/4">
        <div className="flex flex-col gap-3">
          <span className="text-xl font-bold leading-5 text-gray-700">{title}</span>
          <span className="text-base font-semibold leading-6 text-gray-500">{description}</span>
        </div>
      </div>
      {!image ? (
        <div className="absolute top-8 right-8 flex gap-4">
          {onEditClicked ? <FormOutlined className="cursor-pointer" onClick={onEditClicked} /> : null}
          {onDeleteClicked ? <DeleteOutlined className="cursor-pointer text-red-500" onClick={onDeleteClicked} /> : null}
        </div>
      ) : null}
    </div>
  );
}
