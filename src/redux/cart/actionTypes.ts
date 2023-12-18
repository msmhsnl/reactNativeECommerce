import { ICartObj } from "./models";
export const SET_CART = "SET_CART";

interface ISetCartAction {
  type: typeof SET_CART;
  payload: ICartObj[];
}

export type CartActionTypes = ISetCartAction;
