'use client';
import { PlatformButton, Stepper } from '@/components/common';
import { useEffect, useState } from 'react';
import { STORE_CREATE_STEPPER_OPTIONS } from '../common';
import { useRouter } from 'next/navigation';
import { StoreAddressForm, StoreGeneralForm, StoreProductForm } from '@/components/page-components/store';
import { ProductType } from '@/types/product/productType';

export default function AddNewStore() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isStepValid, setIsStepValid] = useState(false);

  const [generalFormValues, setGeneralFormValues] = useState({
    name: '',
    description: '',
    image: '',
    email: '',
    phoneNumber: '',
    vkn: ''
  });

  const [addressFormValues, setAddressFormValues] = useState({
    address: ''
  });

  const [productList, setProductList] = useState<ProductType[]>([]);

  useEffect(() => {
    arrangeButtonValidations();
  }, [productList, generalFormValues, addressFormValues, currentStep]);

  const arrangeButtonValidations = () => {
    let isValid = false;
    switch (currentStep) {
      case 0:
        isValid = generalFormValues.name !== '' && generalFormValues.description !== '' && generalFormValues.email !== '' && generalFormValues.phoneNumber !== '' && generalFormValues.vkn !== '';
        setIsStepValid(isValid);
        break;
      case 1:
        isValid = addressFormValues.address !== '';
        setIsStepValid(isValid);
        break;

      default:
        isValid = true;
        setIsStepValid(isValid);
        break;
    }
  };

  const onFormChange = (id: string, value: any, formIndex: number) => {
    switch (formIndex) {
      case 1:
        setGeneralFormValues({ ...generalFormValues, [id]: value });
        break;
      case 2:
        setAddressFormValues({ ...addressFormValues, [id]: value });
        break;
      default:
        break;
    }
  };

  const backClicked = () => {
    if (currentStep === 0) {
      router.push('/store');
    } else {
      setCurrentStep(currentStep - 1);
      arrangeButtonValidations();
    }
  };

  const nextClicked = () => {
    if (currentStep === STORE_CREATE_STEPPER_OPTIONS.length - 1) {
      const storeObject = { ...{ productList: productList }, ...addressFormValues, ...generalFormValues };
      // TODO submit form and route
    } else {
      setCurrentStep(currentStep + 1);
      arrangeButtonValidations();
    }
  };

  return (
    <>
      <div className="p-6 border-b-2 border-solid border-gray-200">
        <Stepper currentStep={currentStep} options={STORE_CREATE_STEPPER_OPTIONS}></Stepper>
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow">
        {currentStep === 0 ? <StoreGeneralForm formGroup={generalFormValues} onFormChange={(id, value) => onFormChange(id, value, 1)} /> : null}

        {currentStep === 1 ? <StoreAddressForm formGroup={addressFormValues} onFormChange={(id, value) => onFormChange(id, value, 2)} /> : null}

        {currentStep === 2 ? <StoreProductForm productList={productList} setProductList={setProductList} /> : null}

        <div className="flex justify-between">
          <div className="w-1/6">
            <PlatformButton type="secondary" text={currentStep === 0 ? 'Cancel' : 'Back'} onClick={backClicked} />
          </div>
          <div className="w-1/6">
            <PlatformButton text={currentStep === STORE_CREATE_STEPPER_OPTIONS.length - 1 ? 'Save' : 'Next'} disabled={!isStepValid} onClick={nextClicked} />
          </div>
        </div>
      </div>
    </>
  );
}
