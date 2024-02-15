import { Select } from 'antd';

interface SelectInputProps {
  id: string;
  label: string;
  value: any;
  options: SelectOptions[];
  onChange?: (value: any) => void;
}

interface SelectOptions {
  label: string;
  value: any;
  disabled?: boolean;
}

export default function SelectInput({ id, label, value, options, onChange }: SelectInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <Select size="large" style={{ width: '100%' }} value={value} onChange={onChange} options={options} />
    </div>
  );
}
