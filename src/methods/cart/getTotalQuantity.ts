import { CartProductObj } from "../../types/CartProductObj";

const getTotalQuantity = (cart: CartProductObj[]) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.quantity, 0);

  return totalPrice;
};

export default getTotalQuantity;
