import { TextInput } from '@/components/inputs';
import { useState } from 'react';

export default function StoreAddressForm() {
  const [addressFormValues, setAddressFormValues] = useState({
    address: ''
  });

  const onFormChange = (id: string, value: any) => {
    setAddressFormValues({ ...addressFormValues, [id]: value });
  };

  return (
    <div className="grid gap-6 my-4">
      <TextInput
        label="Store Address"
        id="address"
        placeholder="Store Address"
        value={addressFormValues.address}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />
    </div>
  );
}
