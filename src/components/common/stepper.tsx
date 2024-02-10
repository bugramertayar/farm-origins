import { StepProps, Steps } from 'antd';
import Image from 'next/image';

interface StepperProps {
  currentStep: number;
  options: any[];
}

export default function Stepper({ currentStep, options }: StepperProps) {
  const stepperOptions: StepProps[] | undefined = options.map((option) => ({
    title: option.title,
    icon: <Image src={option.iconSource} alt={option.title + ' Tab'} width={30} height={30} />,
    description: option.description
  }));

  return <Steps current={currentStep} items={stepperOptions} />;
}
