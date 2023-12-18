import storageService from "../../services/storageService";
import type { Product } from "../../types/product";
import type { CartProductObj } from "../../types/CartProductObj";

import store from "../../redux/store";
import { setCart } from "../../redux/cart/actions";

export const initReduxCart = async () => {
  const cart = await storageService.getStorageValue("cart");
  store.dispatch(setCart(cart!! ? cart : []));
};

export const addToCart = (product: Product) => {
  const cartData: CartProductObj[] = store.getState()?.cart["cart"];
  const cart = cartData?.length ? [...cartData] : [];
  const cartContains = cart.some(
    (cartProductObj: CartProductObj) => cartProductObj.product.id === product.id
  );

  if (cartContains) {
    //TODO:
  } else {
    cart.push({
      product: product,
      quantity: 1,
    });
  }

  store.dispatch(setCart(cart));
  storageService.setStorageValue("cart", cart);
};

export const removeFromCart = async (id: string) => {
  const cart = await storageService.getStorageValue("cart");
  const cartContains = cart.some(
    (cartProductObj: CartProductObj) => cartProductObj.product.id === id
  );

  if (cartContains) {
    const newCart = cart.filter(
      (cartProductObj: CartProductObj) => cartProductObj.product.id != id
    );
    storageService.setStorageValue("cart", newCart);
  }
};

export const updateCartQuantity = async (id: string, quantity: number) => {
  const cart = await storageService.getStorageValue("cart");
  const cartContains = cart.some(
    (cartProductObj: CartProductObj) => cartProductObj.product.id === id
  );

  if (cartContains) {
    const newCart = cart.filter(
      (cartProductObj: CartProductObj) => cartProductObj.product.id != id
    );
    storageService.setStorageValue("cart", newCart);
  }
};
