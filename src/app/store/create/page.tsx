'use client';
import { Stepper } from '@/components/common';
import { useState } from 'react';
import { STORE_CREATE_STEPPER_OPTIONS } from '../common';
import { useRouter } from 'next/navigation';
import { StoreAddressForm, StoreGeneralForm, StoreProductForm } from '@/components/page-components/store';

export default function AddNewStore() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const backClicked = () => {
    if (currentStep === 0) {
      router.push('/store');
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextClicked = () => {
    if (currentStep === STORE_CREATE_STEPPER_OPTIONS.length - 1) {
      // TODO submit form and route
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <>
      <div className="p-8 border-b-2 border-solid border-gray-200">
        <Stepper currentStep={currentStep} options={STORE_CREATE_STEPPER_OPTIONS}></Stepper>
      </div>

      <div className="p-8 flex flex-col justify-between flex-grow">
        {currentStep === 0 ? <StoreGeneralForm /> : null}

        {currentStep === 1 ? <StoreAddressForm /> : null}

        {currentStep === 2 ? <StoreProductForm /> : null}

        <div className="grid grid-cols-6 gap-4">
          <button onClick={backClicked} className="text-center focus:outline-none col-start-1 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5">
            {currentStep === 0 ? 'Cancel' : 'Back'}
          </button>
          <button onClick={nextClicked} type="submit" className="text-center focus:outline-none col-start-6 text-white text-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5">
            {currentStep === STORE_CREATE_STEPPER_OPTIONS.length - 1 ? 'Save' : 'Next'}
          </button>
        </div>
      </div>
    </>
  );
}
