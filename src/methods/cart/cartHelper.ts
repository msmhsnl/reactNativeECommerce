import storageService from "../../services/storageService";
import type { CartProductObj } from "../../types/CartProductObj";

import store from "../../redux/store";
import { setCart } from "../../redux/cart/actions";

export const initReduxCart = async () => {
  const cart = await storageService.getStorageValue("cart");
  store.dispatch(setCart(cart!! ? cart : []));
};

export const setStorageAndReduxCart = (cart: CartProductObj[]) => {
  storageService.setStorageValue("cart", cart);
  store.dispatch(setCart(cart));
};

export const getReduxCart = () => {
  const cartData: CartProductObj[] = store.getState()?.cart["cart"];
  const cart = cartData?.length ? [...cartData] : [];

  return cart;
};
