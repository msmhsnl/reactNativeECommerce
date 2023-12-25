import { CartProductObj } from "../../types/CartProductObj";
import { Product } from "../../types/Product";
import { getReduxCart, setStorageAndReduxCart } from "./cartHelper";
import updateCartQuantity from "./updateCartQuantity";

const addToCart = (product: Product) => {
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

export default addToCart;
