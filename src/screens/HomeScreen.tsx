import { useEffect, useState, useRef, Ref } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { connect } from "react-redux";

import type { HomeProps } from "../navigation/NavigationTypes";
import { setProducts, addProducts } from "../redux/products/actions";
import { AppState } from "../redux/store";
import { bindActionCreators, Dispatch } from "redux";

import ProductCardList from "../components/ProductCardList/ProductCardList";
import SearchInput from "../components/SearchInput/SearchInput";

import getProductsByFilter from "../methods/getProductsByFilter";
import { initReduxCart } from "../methods/cart/cartHelper";

const HomeScreen = (props: HomeProps & AppProps) => {
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({
    name: "", //search
    orderby: null, //price
    order: null, //asc-desc
  });

  const homeRef: Ref<any> = useRef();

  const clearSearchInput = () => {
    homeRef.current?.clearInput();
  };

  const navigateToDetail = (productId: string) => {
    props.navigation.navigate("Detail", { productId: productId });
  };

  useEffect(() => {
    initReduxCart();
  }, []);

  const getNextPageProducts = () => {
    const newPage = page + 1;
    setPage(newPage);
    getProductsByFilter(props.addProducts, newPage, filters);
  };

  const search = (searchTerm: string) => {
    setPage(1);
    const newFilter = {
      ...filters,
      name: searchTerm,
    };
    setFilters(newFilter);
    getProductsByFilter(props.setProducts, 1, newFilter);
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-50">
      <StatusBar />
      <SearchInput ref={homeRef} search={search} placeholder="Search..." />
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
