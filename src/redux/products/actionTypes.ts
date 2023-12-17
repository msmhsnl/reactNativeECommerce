import { IProduct } from "./models";
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";

interface ISetProductsAction {
  type: typeof SET_PRODUCTS;
  payload: IProduct[];
}
interface IAddProductsAction {
  type: typeof ADD_PRODUCTS;
  payload: IProduct[];
}

export type ProductsActionTypes = ISetProductsAction | IAddProductsAction;
