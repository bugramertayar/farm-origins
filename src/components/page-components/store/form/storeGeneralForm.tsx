import { TextInput } from '@/components/inputs';

interface StoreGeneralFormProps {
  formGroup: any;
  onFormChange: (id: string, value: string) => void;
}

export default function StoreGeneralForm({ formGroup, onFormChange }: StoreGeneralFormProps) {
  return (
    <div className="grid gap-6 my-4 md:grid-cols-2">
      <TextInput
        label="Store Name"
        id="name"
        placeholder="Store Name"
        value={formGroup.name}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />

      <TextInput
        label="Store Description"
        id="description"
        placeholder="Store Description"
        value={formGroup.description}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />

      <TextInput
        label="Image"
        id="image"
        placeholder="Image"
        value={formGroup.image}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />

      <TextInput
        label="Email address"
        id="email"
        placeholder="john.doe@company.com"
        value={formGroup.email}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />

      <TextInput
        label="Phone Number"
        id="phoneNumber"
        placeholder="Phone Number"
        value={formGroup.phoneNumber}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />

      <TextInput
        label="Store Vkn"
        id="vkn"
        placeholder="Store Vkn"
        value={formGroup.vkn}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />
    </div>
  );
}
