import { IProduct } from "./models";
import { ProductsActionTypes, SET_PRODUCTS, ADD_PRODUCTS } from "./actionTypes";
export function setProducts(products: IProduct[]): ProductsActionTypes {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
}
export function addProducts(products: IProduct[]): ProductsActionTypes {
  return {
    type: ADD_PRODUCTS,
    payload: products,
  };
}
