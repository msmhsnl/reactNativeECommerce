import { ICartState } from "./models";
import { CartActionTypes, SET_CART } from "./actionTypes";

const initialState: ICartState = {
  cart: [],
};

export function cartReducer(
  state = initialState,
  action: CartActionTypes
): ICartState {
  switch (action.type) {
    case SET_CART:
      return {
        cart: action.payload,
      };
    default:
      return state;
  }
}
