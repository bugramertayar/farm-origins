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
          <button onClick={onButtonClicked} type="button" className="px-8 py-3 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Create New Store
          </button>
        ) : null}
      </div>
    </>
  );
}
