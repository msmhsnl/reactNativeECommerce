import { Text, TouchableOpacity, View, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";

type CartCounterProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const CartCounter = (props: CartCounterProps) => {
  return (
    <View className="flex-row m-2 justify-center items-center">
      <TouchableOpacity
        testID="decrement"
        className="w-8 h-8 pr-1 rounded-full bg-orange-200 justify-center items-center"
        onPress={props.decrement}
      >
        <Ionicons name="caret-back" size={24} color="gray" />
      </TouchableOpacity>
      <View className="mx-3">
        <Text className="text-center text-base font-semibold text-gray-500">
          {props.count}
        </Text>
      </View>
      <TouchableOpacity
        testID="increment"
        className="w-8 h-8 pl-1 rounded-full bg-orange-200 justify-center items-center"
        onPress={props.increment}
      >
        <Ionicons name="caret-forward" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default CartCounter;
