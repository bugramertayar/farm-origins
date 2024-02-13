import { TextInput } from '@/components/inputs';
import { useState } from 'react';

export default function StoreAddressForm() {
  const [address, setAddress] = useState('');

  return (
    <div className="grid gap-6 my-4">
      <TextInput label="Store Address" id="address" placeholder="Store Address" value={address} onChange={setAddress} />
    </div>
  );
}
