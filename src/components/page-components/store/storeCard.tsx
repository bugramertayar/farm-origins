import Image from 'next/image';

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
          {onEditClicked ? <Image src="/assets/common/edit.svg" alt="Edit" width={20} height={20} className="cursor-pointer" onClick={onEditClicked} /> : null}
          {onDeleteClicked ? <Image src="/assets/common/delete.svg" alt="Delete" width={20} height={20} className="cursor-pointer" onClick={onDeleteClicked} /> : null}
        </div>
      ) : null}
    </div>
  );
}
