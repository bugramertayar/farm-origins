import { TextInput } from '@/components/inputs';
import { useState } from 'react';

export default function StoreGeneralForm() {
  const [generalFormValues, setGeneralFormValues] = useState({
    name: '',
    description: '',
    image: '',
    email: '',
    phoneNumber: '',
    vkn: ''
  });

  const onFormChange = (id: string, value: any) => {
    setGeneralFormValues({ ...generalFormValues, [id]: value });
  };

  return (
    <div className="grid gap-6 my-4 md:grid-cols-2">
      <TextInput
        label="Store Name"
        id="name"
        placeholder="Store Name"
        value={generalFormValues.name}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />

      <TextInput
        label="Store Description"
        id="description"
        placeholder="Store Description"
        value={generalFormValues.description}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />

      <TextInput
        label="Image"
        id="image"
        placeholder="Image"
        value={generalFormValues.image}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />

      <TextInput
        label="Email address"
        id="email"
        placeholder="john.doe@company.com"
        value={generalFormValues.email}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />

      <TextInput
        label="Phone Number"
        id="phoneNumber"
        placeholder="Phone Number"
        value={generalFormValues.phoneNumber}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />

      <TextInput
        label="Store Vkn"
        id="vkn"
        placeholder="Store Vkn"
        value={generalFormValues.vkn}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />
    </div>
  );
}
