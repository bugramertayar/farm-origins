import { DatePicker, DatePickerProps } from 'antd';

interface DatePickerInputProps {
  id: string;
  label: string;
  placeholder?: string;
  value: Date;
  onChange: (value: any) => void;
}
export default function DatePickerInput({ id, label, value, onChange, placeholder }: DatePickerInputProps) {
  let formattetValue;
  const handleChange: DatePickerProps['onChange'] = (date, dateString) => {
    formattetValue = date ? new Date(date.toString()) : null;
    if (onChange) {
      onChange(date ? new Date(date.toString()) : null);
    }
  };

  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <DatePicker showTime style={{ width: '100%' }} size="large" onChange={handleChange} value={formattetValue} placeholder={placeholder} />
    </div>
  );
}
