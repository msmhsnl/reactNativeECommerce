import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";

import type { DetailProps } from "../navigation/NavigationTypes";

import getProductById from "../methods/getProductById";

const DetailScreen = ({ route, navigation }: DetailProps) => {
  const [product, setProduct] = useState(null);
  const { productId } = route.params;
  const isFocused = useIsFocused();

  useEffect(() => {
    setProduct(null);
  }, [isFocused]);
  useEffect(() => {
    getProductById(setProduct, productId);
  }, [productId]);

  return product!! ? (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar />

      <Image source={{ uri: product?.image }} className="w-full h-1/3" />
      <View className="flex-1 p-2 justify-between">
        <ScrollView className="flex-1">
          <Text className="text-xl font-semibold text-gray-600">
            {`${product?.price} ₺`}
          </Text>
          <Text className="text-lg font-bold text-gray-600">
            {product?.name}
          </Text>
          <Text className="text-sm font-semibold text-gray-600">
            {product?.description}
          </Text>
        </ScrollView>

        <TouchableOpacity
          className="bg-white w-full h-10 bg-orange-300 rounded-lg justify-center"
          onPress={() => console.log("PRESSED_2", product)}
        >
          <Text className="text-center text-base font-semibold text-gray-500">
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailScreen;
