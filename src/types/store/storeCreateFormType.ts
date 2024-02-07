export type StoreCreateFormType = {
  name: string;
  description: string;
  image: string;
  address: string;
  email: string;
  phoneNumber: string;
  vkn: string;
  productList: [{ name: 'product1'; description: 'description'; image: 'image'; categoryId: 1; price: 12; amount: 123; unitTypeId: 2 }];
};
