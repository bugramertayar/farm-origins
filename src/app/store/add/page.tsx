'use client';
import VerticalStepper from '@/components/common/verticalStepper';
import React, { useState } from 'react';

export default function AddNewStore() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const stepperOptions = ['General', 'Address', 'Confirmation'];

  const stepperItemClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="flex h-full w-full">
        <div className="w-1/5 bg-gray-200 flex justify-center shadow-lg">
          <VerticalStepper options={stepperOptions} onItemClick={stepperItemClick} currentIndex={currentIndex} />
        </div>

        <div className="w-4/5">
          <p>Form Comes Here</p>
        </div>
      </div>
    </>
  );
}
