import { useEffect, useState, useRef, Ref } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Modal,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import type { HomeProps } from "../navigation/NavigationTypes";
import { setProducts, addProducts } from "../redux/products/actions";
import { AppState } from "../redux/store";
import { bindActionCreators, Dispatch } from "redux";

import ProductCardList from "../components/ProductCardList/ProductCardList";
import SearchInput from "../components/SearchInput/SearchInput";
import { BlurView } from "expo-blur";

import getProductsByFilter from "../methods/getProductsByFilter";
import { initReduxCart } from "../methods/cart/cartHelper";
import RadioOption from "../components/RadioOption/RadioOption";

import addToCart from "../methods/cart/addToCart";

const orderOptions = [
  {
    title: "Price high to low",
    value: "desc",
  },
  {
    title: "Price low to high",
    value: "asc",
  },
];

const HomeScreen = (props: HomeProps & AppProps) => {
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({
    name: "", //search
    orderby: "price", //price
    order: "asc", //asc-desc
  });
  const [modalVisible, setModalVisible] = useState(false);

  const homeRef: Ref<any> = useRef();

  const clearSearchInput = () => {
    homeRef.current?.clearInput();
  };

  const navigateToDetail = (productId: string) => {
    props.navigation.navigate("Detail", { productId: productId });
  };

  useEffect(() => {
    initReduxCart();
    getNextPageProducts();
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

  const applyFilter = () => {
    setPage(1);
    getProductsByFilter(props.setProducts, 1, filters);
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-50">
      <StatusBar />
      <View className="flex-row ">
        <SearchInput ref={homeRef} search={search} placeholder="Search..." />
        <TouchableOpacity
          className="mr-4 my-2 p-2 bg-orange-200 rounded-xl flex justify-center items-center"
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="funnel" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <ProductCardList
        data={props.products}
        getNextPageProducts={getNextPageProducts}
        navigateToDetail={navigateToDetail}
        addToCart={addToCart}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <BlurView
            intensity={20}
            className="absolute top-0 bottom-0 left-0 right-0"
          ></BlurView>
        </TouchableWithoutFeedback>
        <View className="m-auto bg-white rounded-xl p-2 w-60">
          <View className="mb-4">
            {orderOptions.map((item, index) => (
              <View key={index} className="my-2">
                <RadioOption
                  onPress={() => {
                    setFilters((prevFilters) => ({
                      ...prevFilters,
                      order: item.value,
                    }));
                  }}
                  active={filters.order === item.value}
                  title={item.title}
                />
              </View>
            ))}
          </View>
          <TouchableOpacity
            className="w-full h-10 bg-orange-300 rounded-lg justify-center"
            onPress={() => {
              applyFilter();
              setModalVisible(false);
            }}
          >
            <Text className="text-center text-base font-semibold text-gray-500">
              Apply Filters
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: AppState) => ({
  ...state.products,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ setProducts, addProducts }, dispatch);

type AppProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
