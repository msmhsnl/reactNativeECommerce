import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { connect } from "react-redux";

import type { HomeProps } from "../navigation/NavigationTypes";
import { setProducts, addProducts } from "../redux/products/actions";
import { AppState } from "../redux/store";
import { bindActionCreators, Dispatch } from "redux";

import ProductCardList from "../components/ProductCardList/ProductCardList";

import getProductsByFilter from "../methods/getProductsByFilter";

import { initReduxCart } from "../methods/cart/cartHelper";

const HomeScreen = (props: HomeProps & AppProps) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    initReduxCart();
  }, []);

  const navigateToDetail = (productId: string) => {
    props.navigation.navigate("Detail", { productId: productId });
  };

  useEffect(() => {
    getProductsByFilter(props.setProducts, page, null);
  }, []);

  const getNextPageProducts = () => {
    const newPage = page + 1;
    setPage(newPage);
    getProductsByFilter(props.addProducts, newPage, null);
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-50">
      <StatusBar />
      <ProductCardList
        data={props.products}
        getNextPageProducts={getNextPageProducts}
        navigateToDetail={navigateToDetail}
      />
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
  ...state.products,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ setProducts, addProducts }, dispatch);

type AppProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
