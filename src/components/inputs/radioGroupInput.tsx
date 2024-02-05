import { Radio, RadioChangeEvent } from 'antd';

interface RadioGroupInputProps {
  options: RadioGroupOptions[];
  value: number;
  onChange?: (e: RadioChangeEvent) => void;
}

interface RadioGroupOptions {
  label: string;
  value: number;
}

export default function RadioGroupInput({ options, value, onChange }: RadioGroupInputProps) {
  return (
    <>
      <Radio.Group buttonStyle="solid" value={value} onChange={onChange} size="large">
        {options.map((option) => (
          <Radio.Button style={{ width: `${100 / options.length}%` }} key={option.value} value={option.value}>
            {option.label}
          </Radio.Button>
        ))}
      </Radio.Group>
    </>
  );
}