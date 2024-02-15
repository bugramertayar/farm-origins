interface PlatformButtonProps {
  text: string;
  type?: string;
  onClick: () => void;
}

export default function PlatformButton({ text, type = 'primary', onClick }: PlatformButtonProps) {
  const arrangeButtonClass = () => {
    let buttonClass = '';
    switch (type) {
      case 'primary':
        buttonClass = 'w-full text-center font-medium bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 px-5 py-2.5';
        break;
      case 'secondary':
        buttonClass = 'w-full text-center font-medium bg-gray-200 text-gray-800 text-sm rounded-lg border border-solid border-gray-400 border-opacity-50 hover:bg-gray-300 py-2.5 px-5';
        break;
      default:
        break;
    }

    return buttonClass;
  };

  return (
    <button onClick={onClick} className={arrangeButtonClass()}>
      {text}
    </button>
  );
}
