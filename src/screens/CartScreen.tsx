import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";

import type { CartProps } from "../navigation/NavigationTypes";

import { connect } from "react-redux";
import { AppState } from "../redux/store";

import CartCounter from "../components/CartCounter/CartCounter";
import { updateCartQuantity } from "../methods/cart/cartHelper";

const CartScreen = (props: CartProps & AppProps) => {
  const navigateToDetail = (productId: string) => {
    props.navigation.navigate("Detail", { productId: productId });
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-50">
      <StatusBar />
      <ScrollView>
        {props.cart?.map((item, index) => (
          <View className="p-2 w-full h-20 shadow-gray-950" key={index}>
            <TouchableOpacity
              className="bg-white w-full h-full shadow-dark-950 shadow-md rounded-xl overflow-hidden flex-row"
              onPress={() => navigateToDetail(item.product.id)}
            >
              <Image
                source={{ uri: item.product.image }}
                className="w-1/4 h-full"
              />
              <View className="flex-1 p-2 justify-between">
                <View>
                  <Text className="text-base font-semibold text-gray-600">
                    {`${item.product?.price} ₺`}
                  </Text>
                  <Text className="text-sm font-semibold text-gray-600">
                    {item.product.name}
                  </Text>
                </View>
              </View>
              <CartCounter
                count={item.quantity}
                increment={() =>
                  updateCartQuantity(item.product.id, item.quantity + 1)
                }
                decrement={() =>
                  updateCartQuantity(item.product.id, item.quantity - 1)
                }
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
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

const mapStateToProps = (state: AppState) => ({
  ...state.cart,
});

type AppProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(CartScreen);
