import { PlatformButton, Sidebar, SidebarFooter } from '@/components/common';
import { TextInput, SelectInput, NumberInput } from '@/components/inputs';
import { ProductService } from '@/services/product.service';
import { SelectOptionNumberType } from '@/types/common/selectOptionNumberType';
import { ProductType } from '@/types/product/productType';
import { useState, useEffect } from 'react';

interface ProductFormProps {
  title: string;
  isSidebarOpen: boolean;
  product?: ProductType | null;
  onSidebarClosed: (e: any) => void;
  onSidebarSaved: (product: ProductType) => void;
}

export default function ProductFormSidebar({ title, isSidebarOpen, product, onSidebarClosed, onSidebarSaved }: ProductFormProps) {
  const productService = new ProductService();

  const [isProductFormValid, setIsProductFormValid] = useState(false);
  const [unitTypeOptions, setUnitTypeOptions] = useState<SelectOptionNumberType[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<SelectOptionNumberType[]>([]);

  const [productFormValues, setProductFormValues] = useState({
    name: '',
    description: '',
    image: '',
    categoryId: 0,
    price: 0,
    amount: 0,
    unitTypeId: 0
  });

  useEffect(() => {
    async function fetchData() {
      try {
        if (isSidebarOpen) {
          const [unitTypes, categories] = await Promise.all([productService.getUnitTypes(), productService.getCategories()]);

          if (unitTypes && categories) {
            setUnitTypeOptions(unitTypes);
            setCategoryOptions(categories);
          }
        }
      } catch (error) {}
    }

    fetchData();
    resetFormValues();
    if (product) {
      setProductFormValues(product);
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    checkFormValidity();
  }, [productFormValues]);

  const resetFormValues = () => {
    setProductFormValues({
      name: '',
      description: '',
      image: '',
      categoryId: 0,
      price: 0,
      amount: 0,
      unitTypeId: 0
    });
  };

  const onFormChange = (id: string, value: any) => {
    setProductFormValues({ ...productFormValues, [id]: value });
  };

  const checkFormValidity = () => {
    const isValid = productFormValues.name !== '' && productFormValues.description !== '' && productFormValues.categoryId !== null && productFormValues.amount !== 0 && productFormValues.unitTypeId !== null && productFormValues.price !== 0;
    setIsProductFormValid(isValid);
  };

  const handleSidebarSaved = () => {
    onSidebarSaved({ ...productFormValues, ...{ unitTypeName: unitTypeOptions.find((x) => x.value === productFormValues.unitTypeId)?.label, categoryName: categoryOptions.find((x) => x.value === productFormValues.categoryId)?.label } });
  };

  const productSidebarContent = (
    <div className="grid gap-6 md:grid-cols-2">
      <TextInput
        label="Name"
        id="name"
        placeholder="Name"
        value={productFormValues.name}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />
      <TextInput
        label="Description"
        id="description"
        placeholder="Description"
        value={productFormValues.description}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />
      <TextInput
        label="Image"
        id="image"
        placeholder="Image"
        value={productFormValues.image}
        onChange={(event) => {
          onFormChange(event.target.id, event.target.value);
        }}
      />
      <SelectInput
        label="Category"
        id="categoryId"
        options={categoryOptions}
        value={productFormValues.categoryId}
        onChange={(event) => {
          onFormChange('categoryId', event);
        }}
      />
      <NumberInput
        label="Amount"
        min={0}
        id="amount"
        placeholder="Amount"
        value={productFormValues.amount}
        onChange={(event) => {
          onFormChange('amount', event);
        }}
      />
      <SelectInput
        label="Unit Type"
        id="unitTypeId"
        options={unitTypeOptions}
        value={productFormValues.unitTypeId}
        onChange={(event) => {
          onFormChange('unitTypeId', event);
        }}
      />
      <NumberInput
        label="Price"
        min={0}
        id="price"
        placeholder="Price"
        value={productFormValues.price}
        onChange={(event) => {
          onFormChange('price', event);
        }}
      />
    </div>
  );

  const productSidebarFooter = (
    <SidebarFooter>
      <PlatformButton type="secondary" text="Cancel" onClick={() => onSidebarClosed(true)} />
      <PlatformButton text="Save" disabled={!isProductFormValid} onClick={handleSidebarSaved} />
    </SidebarFooter>
  );

  return (
    <>
      <Sidebar title={title} content={productSidebarContent} footer={productSidebarFooter} isSidebarOpen={isSidebarOpen} onSidebarClosed={() => onSidebarClosed(true)} />
    </>
  );
}
