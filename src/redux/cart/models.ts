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

export interface ICartObj {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  cart: ICartObj[];
}
