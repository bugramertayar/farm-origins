import { PlatformButton } from '@/components/common';

interface StoreListHeaderProps {
  title: string;
  onButtonClicked?: () => void;
}

export default function StoreListHeader({ title, onButtonClicked }: StoreListHeaderProps) {
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-300 px-10 py-6">
        <span className="text-xl font-bold text-gray-700">{title}</span>
        {onButtonClicked ? (
          <div className="w-1/6">
            <PlatformButton text="Create New Store" onClick={onButtonClicked} />
          </div>
        ) : null}
      </div>
    </>
  );
}
