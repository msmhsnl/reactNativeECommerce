import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

import type { Product } from "../../types/product";
import { addToCart } from "../../methods/cart/cartHelper";

type ProductCardProps = {
  item: Product;
  navigateToDetail: (productId: string) => void;
};

const ProductCard = (props: ProductCardProps) => {
  return (
    <View className="p-2 w-1/2 h-64 shadow-gray-950">
      <TouchableOpacity
        className="bg-white w-full h-full shadow-dark-950 shadow-md rounded-xl overflow-hidden"
        onPress={() => props.navigateToDetail(props.item.id)}
      >
        <Image source={{ uri: props.item.image }} className="w-full h-1/2" />
        <View className="flex-1 p-2 justify-between">
          <View>
            <Text className="text-base font-semibold text-gray-600">
              {`${props.item?.price} ₺`}
            </Text>
            <Text className="text-sm font-semibold text-gray-600">
              {props.item.name}
            </Text>
          </View>
          <TouchableOpacity
            className="w-full h-10 bg-orange-300 rounded-lg justify-center"
            onPress={() => addToCart(props.item)}
          >
            <Text className="text-center text-base font-semibold text-gray-500">
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
