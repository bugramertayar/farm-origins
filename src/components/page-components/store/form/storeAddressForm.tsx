import { TextInput } from '@/components/inputs';
interface StoreAddressFormProps {
  formGroup: any;
  onFormChange: (id: string, value: string) => void;
}

export default function StoreAddressForm({ formGroup, onFormChange }: StoreAddressFormProps) {
  return (
    <div className="grid gap-6 my-4">
      <TextInput
        label="Store Address"
        id="address"
        placeholder="Store Address"
        value={formGroup.address}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />
    </div>
  );
}
