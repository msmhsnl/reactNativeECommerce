import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

type CartCounterProps = {
  count: number;
};

const CartCounter = (props: CartCounterProps) => {
  return (
    <View className="flex-row m-2 justify-center items-center">
      <TouchableOpacity
        className="w-8 h-8 pr-1 rounded-full bg-orange-200 justify-center items-center"
        onPress={() => console.log("-")}
      >
        <Ionicons name="caret-back" size={24} color="gray" />
      </TouchableOpacity>
      <View className="mx-3">
        <Text className="text-center text-base font-semibold text-gray-500">
          {props.count}
        </Text>
      </View>
      <TouchableOpacity
        className="w-8 h-8 pl-1 rounded-full bg-orange-200 justify-center items-center"
        onPress={() => console.log("+")}
      >
        <Ionicons name="caret-forward" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CartCounter;
