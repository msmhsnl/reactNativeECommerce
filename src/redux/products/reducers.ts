import { IProductsState } from "./models";
import { ProductsActionTypes, SET_PRODUCTS, ADD_PRODUCTS } from "./actionTypes";
const initialState: IProductsState = {
  products: [],
};
export function productsReducer(
  state = initialState,
  action: ProductsActionTypes
): IProductsState {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        products: action.payload,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, ...action.payload],
      };
    default:
      return state;
  }
}
