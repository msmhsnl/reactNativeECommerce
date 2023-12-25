import { CartProductObj } from "../../types/CartProductObj";
import { getReduxCart, setStorageAndReduxCart } from "./cartHelper";

const removeFromCart = async (id: string) => {
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

export default removeFromCart;
