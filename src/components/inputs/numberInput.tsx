import { InputNumber } from 'antd';

interface NumberInputProps {
  id: string;
  label: string;
  placeholder: string;
  value: number | null;
  min?: number;
  max?: number;
  onChange?: (value: any) => void;
}

export default function NumberInput({ id, label, placeholder, value, min, max, onChange }: NumberInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <InputNumber style={{ width: '100%' }} size="large" placeholder={placeholder} min={min} max={max} value={value} onChange={onChange} />
    </div>
  );
}
