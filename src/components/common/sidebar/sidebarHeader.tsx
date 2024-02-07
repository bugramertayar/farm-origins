interface SidebarHeaderProps {
  title: string;
  onSidebarHeaderCloseClick: () => void;
}

export default function SidebarHeader({ title, onSidebarHeaderCloseClick }: SidebarHeaderProps) {
  return (
    <>
      <div className="flex justify-between py-2">
        <span>{title}</span>
        <button onClick={() => onSidebarHeaderCloseClick()} type="button" className="px-8 py-3 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Close
        </button>
      </div>
    </>
  );
}
