export type ProductType = {
  id?: string;
  name: string;
  description: string;
  image: string;
  categoryId: number;
  price: number;
  amount: number;
  unitTypeId: number;
  unitTypeName?: string;
  categoryName?: string;
};
