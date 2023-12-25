import { CartProductObj } from "../../types/CartProductObj";

const getTotalPrice = (cart: CartProductObj[]) => {
  const totalPrice = cart.reduce(
    (acc, item) => acc + parseInt(item.product.price) * item.quantity,
    0
  );

  return totalPrice;
};

export default getTotalPrice;
