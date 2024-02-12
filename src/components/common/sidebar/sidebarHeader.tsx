import Image from 'next/image';

interface SidebarHeaderProps {
  title: string;
  onSidebarHeaderCloseClick: () => void;
}

export default function SidebarHeader({ title, onSidebarHeaderCloseClick }: SidebarHeaderProps) {
  return (
    <>
      <div className="flex justify-between items-center">
        <span>{title}</span>
        <Image src="/assets/common/close.svg" alt="Sidebar Close" width={20} height={20} onClick={() => onSidebarHeaderCloseClick()} className="cursor-pointer" />
      </div>
    </>
  );
}
