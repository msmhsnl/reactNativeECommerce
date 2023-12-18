import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import type { Product } from "../../types/product";

type ProductCardProps = {
  item: Product;
};

const ProductCard = (props: ProductCardProps) => {
  return (
    <View className="p-2 w-1/2 h-64 shadow-gray-950">
      <TouchableOpacity
        className="bg-white w-full h-full shadow-dark-950 shadow-md rounded-xl overflow-hidden"
        onPress={() => console.log("PRESSED_1", props.item)}
      >
        <Image source={{ uri: props.item.image }} className="w-full h-1/2" />
        <View className="flex-1 p-2 justify-between">
          <View>
            <Text className="text-sm font-bold text-gray-600">
              {props.item.price}₺
            </Text>
            <Text className="text-base font-semibold text-gray-600">
              {props.item.name}
            </Text>
          </View>
          <TouchableOpacity
            className="bg-white w-full h-10 bg-blue-200 rounded-lg justify-center"
            onPress={() => console.log("PRESSED_2", props.item)}
          >
            <Text className="text-center text-base font-semibold text-gray-600">
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#ffffff",
//     width: 150,
//     height: 200,
//     borderRadius: 10,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     padding: 5,
//     elevation: 5,
//   },
// });
