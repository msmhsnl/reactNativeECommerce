import { CartProductObj } from "../../types/CartProductObj";
import { getReduxCart, setStorageAndReduxCart } from "./cartHelper";
import removeFromCart from "./removeFromCart";

const updateCartQuantity = async (id: string, quantity: number) => {
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

export default updateCartQuantity;
