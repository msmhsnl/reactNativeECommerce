import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { connect } from "react-redux";
import { AppState } from "../redux/store";

import type { CartProps } from "../navigation/NavigationTypes";

import CartProductItem from "../components/CartProductItem/CartProductItem";
import { getTotalPrice } from "../methods/cart/cartHelper";

const CartScreen = (props: CartProps & AppProps) => {
  const navigateToDetail = (productId: string) => {
    props.navigation.navigate("Detail", { productId: productId });
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-50">
      <StatusBar />
      <ScrollView>
        {props.cart?.map((item, index) => (
          <CartProductItem
            data={item}
            navigateToDetail={navigateToDetail}
            key={index}
          />
        ))}
      </ScrollView>
      <View className="p-2 flex-row justify-between items-center border-t border-t-gray-200">
        <Text className="text-base font-semibold text-gray-600">{`TOTAL PRICE: ${getTotalPrice(
          props.cart
        )} ₺`}</Text>
        <TouchableOpacity
          className="px-5 h-10 bg-orange-300 rounded-lg justify-center"
          onPress={() => console.log("PAYMENT")}
        >
          <Text className="text-center text-base font-semibold text-gray-500">
            PAYMENT
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: AppState) => ({
  ...state.cart,
});

type AppProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(CartScreen);
