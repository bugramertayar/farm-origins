import { TextInput } from '@/components/inputs';
import { useState } from 'react';

export default function StoreGeneralForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [vkn, setVkn] = useState('');

  return (
    <div className="grid gap-6 my-4 md:grid-cols-2">
      <TextInput label="Store Name" id="name" placeholder="Store Name" value={name} onChange={setName} />

      <TextInput label="Store Description" id="description" placeholder="Store Description" value={description} onChange={setDescription} />

      <TextInput label="Image" id="image" placeholder="Image" value={image} onChange={setImage} />

      <TextInput label="Email address" id="email" placeholder="john.doe@company.com" value={email} onChange={setEmail} />

      <TextInput label="Phone Number" id="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={setPhoneNumber} />

      <TextInput label="Store Vkn" id="vkn" placeholder="Store Vkn" value={vkn} onChange={setVkn} />
    </div>
  );
}
