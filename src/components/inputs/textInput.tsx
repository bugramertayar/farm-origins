interface TextInputProps {
  id: string;
  label: string;
  type: string;
  value?: string;
  placeholder: string;
  pattern?: string;
  onChange?: (text: string) => void;
}

export default function TextInput({ id, label, type, value, placeholder, pattern, onChange }: TextInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(event) => (onChange ? onChange(event.target.value) : null)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        pattern={pattern}
      />
    </div>
  );
}
