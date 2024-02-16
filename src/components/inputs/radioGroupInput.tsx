import { Radio, RadioChangeEvent } from 'antd';

interface RadioGroupInputProps {
  options: RadioGroupOptions[];
  value: number;
  id: string;
  onChange?: (e: any) => void;
}

interface RadioGroupOptions {
  label: string;
  value: number;
}

export default function RadioGroupInput({ options, value, id, onChange }: RadioGroupInputProps) {
  return (
    <>
      <Radio.Group buttonStyle="solid" value={value} onChange={onChange} size="large">
        {options.map((option) => (
          <Radio.Button id={id} style={{ width: `${100 / options.length}%`, textAlign: 'center' }} key={option.value} value={option.value}>
            {option.label}
          </Radio.Button>
        ))}
      </Radio.Group>
    </>
  );
}
