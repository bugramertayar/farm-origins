import { ProductType } from '../product/productType';

export type StoreCreateFormType = {
  name: string;
  description: string;
  image: string;
  address: string;
  email: string;
  phoneNumber: string;
  vkn: string;
  productList: ProductType[];
};
