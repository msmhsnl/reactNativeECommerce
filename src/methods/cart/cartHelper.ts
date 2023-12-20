import storageService from "../../services/storageService";
import type { Product } from "../../types/product";
import type { CartProductObj } from "../../types/CartProductObj";

import store from "../../redux/store";
import { setCart } from "../../redux/cart/actions";

export const initReduxCart = async () => {
  const cart = await storageService.getStorageValue("cart");
  store.dispatch(setCart(cart!! ? cart : []));
};

const setStorageAndReduxCart = (cart: CartProductObj[]) => {
  storageService.setStorageValue("cart", cart);
  store.dispatch(setCart(cart));
};

const getReduxCart = () => {
  const cartData: CartProductObj[] = store.getState()?.cart["cart"];
  const cart = cartData?.length ? [...cartData] : [];

  return cart;
};

export const addToCart = (product: Product) => {
  const cart = getReduxCart();
  const itemIndex = cart.findIndex(
    (cartProductObj: CartProductObj) => cartProductObj.product.id === product.id
  );

  if (itemIndex >= 0) {
    const currentQuantity = cart[itemIndex].quantity;
    updateCartQuantity(product.id, currentQuantity + 1);
  } else {
    cart.push({
      product: product,
      quantity: 1,
    });
  }

  setStorageAndReduxCart(cart);
  return cart;
};

export const removeFromCart = async (id: string) => {
  const cart = getReduxCart();
  const cartContains = cart.some(
    (cartProductObj: CartProductObj) => cartProductObj.product.id === id
  );

  if (cartContains) {
    const newCart = cart.filter(
      (cartProductObj: CartProductObj) => cartProductObj.product.id != id
    );
    setStorageAndReduxCart(newCart);
  }
};

export const updateCartQuantity = async (id: string, quantity: number) => {
  const cart = getReduxCart();
  const cartContains = cart.some(
    (cartProductObj: CartProductObj) => cartProductObj.product.id === id
  );

  if (cartContains) {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      const itemIndex = cart.findIndex(
        (cartProductObj: CartProductObj) => cartProductObj.product.id === id
      );

      if (itemIndex >= 0) {
        cart[itemIndex].quantity = quantity;

        setStorageAndReduxCart(cart);
      }
    }
  }
};

export const getTotalPrice = (cart: CartProductObj[]) => {
  const totalPrice = cart.reduce(
    (acc, item) => acc + parseInt(item.product.price) * item.quantity,
    0
  );

  return totalPrice;
};
