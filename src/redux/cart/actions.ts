import { ICartObj } from "./models";
import { CartActionTypes, SET_CART } from "./actionTypes";

export function setCart(cart: ICartObj[]): CartActionTypes {
  return {
    type: SET_CART,
    payload: cart,
  };
}
