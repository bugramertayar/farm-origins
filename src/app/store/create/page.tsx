'use client';
import { VerticalStepper } from '@/components/common';
import { DatePickerInput } from '@/components/inputs';
import React, { useState } from 'react';

export default function AddNewStore() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [startDate, setStartDate] = useState(new Date());

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
          <div className="grid gap-6 my-6 md:grid-cols-2 m-5">
            <DatePickerInput label="Start Date" id="dateDate" placeholder="Select Start Date" value={startDate} onChange={setStartDate} />
          </div>
        </div>
      </div>
    </>
  );
}
