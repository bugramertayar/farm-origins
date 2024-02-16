import { Input } from 'antd';

interface TextInputProps {
  id: string;
  label: string;
  value?: string;
  placeholder: string;
  onChange?: (e: any) => void;
}

export default function TextInput({ id, label, value, placeholder, onChange }: TextInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <Input size="large" id={id} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
