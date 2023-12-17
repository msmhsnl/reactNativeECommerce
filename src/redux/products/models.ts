export interface IProduct {
  createdAt: string;
  name: string;
  image: string;
  price: string;
  description: string;
  model: string;
  brand: string;
  id: string;
}
export interface IProductsState {
  products: IProduct[];
}
