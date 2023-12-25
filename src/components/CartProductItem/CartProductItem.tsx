import { Text, TouchableOpacity, View, Image } from "react-native";

import { updateCartQuantity } from "../../methods/cart/cartHelper";
import type { CartProductObj } from "../../types/CartProductObj";

import CartCounter from "../CartCounter/CartCounter";

type CartProductItemProps = {
  data: CartProductObj;
  navigateToDetail: (productId: string) => void;
};

const CartProductItem = (props: CartProductItemProps) => {
  return (
    <View className="p-2 w-full h-20 shadow-gray-950">
      <TouchableOpacity
        testID="cart-item"
        className="bg-white w-full h-full shadow-dark-950 shadow-md rounded-xl overflow-hidden flex-row"
        onPress={() => props.navigateToDetail(props.data.product.id)}
      >
        <Image
          testID="cart-item-image"
          source={{ uri: props.data.product.image }}
          className="w-1/4 h-full"
        />
        <View className="flex-1 p-2 justify-between">
          <View>
            <Text className="text-base font-semibold text-gray-600">
              {`${props.data.product?.price} ₺`}
            </Text>
            <Text
              className="text-sm font-semibold text-gray-600"
              numberOfLines={1}
            >
              {props.data.product.name}
            </Text>
          </View>
        </View>
        <CartCounter
          count={props.data.quantity}
          increment={() =>
            updateCartQuantity(props.data.product.id, props.data.quantity + 1)
          }
          decrement={() =>
            updateCartQuantity(props.data.product.id, props.data.quantity - 1)
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default CartProductItem;
