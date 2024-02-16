interface PlatformButtonProps {
  text: string;
  type?: string;
  disabled?: boolean;
  onClick: () => void;
}

export default function PlatformButton({ text, type = 'primary', disabled, onClick }: PlatformButtonProps) {
  const arrangeButtonClass = () => {
    let buttonClass = '';
    switch (type) {
      case 'primary':
        buttonClass = 'w-full text-center font-medium text-white text-sm rounded-lg px-5 py-2.5';
        if (disabled) {
          buttonClass += ' bg-blue-400 cursor-not-allowed';
        } else {
          buttonClass += ' bg-blue-600 hover:bg-blue-700';
        }
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
    <button type="button" onClick={onClick} className={arrangeButtonClass()} disabled={disabled}>
      {text}
    </button>
  );
}
