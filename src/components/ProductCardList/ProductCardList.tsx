import { View, FlatList } from "react-native";
import React from "react";

import ProductCard from "../ProductCard/ProductCard";

import type { Product } from "../../types/Product";

type ProductCardListProps = {
  data: Product[];
  getNextPageProducts: () => void;
  navigateToDetail: (productId: string) => void;
  addToCart: (product: Product) => void;
};

const ProductCardList = (props: ProductCardListProps) => {
  return (
    <FlatList
      testID="product-card-list"
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 p-2 bg-blue-50"
      data={props.data}
      renderItem={({ index, item }) => (
        <ProductCard
          item={item}
          navigateToDetail={props.navigateToDetail}
          addToCart={props.addToCart}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      ItemSeparatorComponent={() => <View />}
      onEndReached={props.getNextPageProducts}
    />
  );
};

export default ProductCardList;
