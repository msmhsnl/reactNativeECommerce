import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView } from "react-native";

import { connect } from "react-redux";
import { AppState } from "../redux/store";

import type { CartProps } from "../navigation/NavigationTypes";

import CartProductItem from "../components/CartProductItem/CartProductItem";

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
    </SafeAreaView>
  );
};

const mapStateToProps = (state: AppState) => ({
  ...state.cart,
});

type AppProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(CartScreen);
