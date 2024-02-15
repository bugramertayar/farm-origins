'use client';
import { PlatformButton, Stepper } from '@/components/common';
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
      <div className="p-6 border-b-2 border-solid border-gray-200">
        <Stepper currentStep={currentStep} options={STORE_CREATE_STEPPER_OPTIONS}></Stepper>
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow">
        {currentStep === 0 ? <StoreGeneralForm /> : null}

        {currentStep === 1 ? <StoreAddressForm /> : null}

        {currentStep === 2 ? <StoreProductForm /> : null}

        <div className="flex justify-between">
          <div className="w-1/6">
            <PlatformButton type="secondary" text={currentStep === 0 ? 'Cancel' : 'Back'} onClick={backClicked} />
          </div>
          <div className="w-1/6">
            <PlatformButton text={currentStep === STORE_CREATE_STEPPER_OPTIONS.length - 1 ? 'Save' : 'Next'} onClick={nextClicked} />
          </div>
        </div>
      </div>
    </>
  );
}
