interface VerticalStepperProps {
  options: string[];
  currentIndex: number;
  onItemClick: (index: number) => void;
}

export default function VerticalStepper({ options, currentIndex, onItemClick }: VerticalStepperProps) {
  const arrangeStepperIcon = (stepIndex: number) => {
    if (currentIndex === stepIndex) {
      return (
        <svg className="rtl:rotate-180 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      );
    } else if (currentIndex > stepIndex) {
      return (
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
        </svg>
      );
    }
  };

  const arrangeStepperClass = (stepIndex: number) => {
    if (currentIndex === stepIndex) {
      return 'w-full p-4 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg cursor-pointer';
    } else if (currentIndex > stepIndex) {
      return 'w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 cursor-pointer';
    } else {
      return 'w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer';
    }
  };

  return (
    <ol className="space-y-4 w-72 mt-5">
      {options.map((item: string, index: number) => (
        <li key={index} onClick={() => onItemClick(index)}>
          <div className={arrangeStepperClass(index)}>
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{index + 1 + '. ' + item}</h3>
              {arrangeStepperIcon(index)}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
