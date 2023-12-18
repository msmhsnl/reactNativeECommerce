import { View, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import ProductCard from "../ProductCard/ProductCard";

import type { Product } from "../../types/product";

type ProductCardListProps = {
  data: Product[];
};

const ProductCardList = (props: ProductCardListProps) => {
  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: 20 }}
      className="p-2 bg-blue-50"
      data={props.data}
      renderItem={({ index, item }) => <ProductCard item={item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
      ItemSeparatorComponent={() => <View />}
    />
  );
};

export default ProductCardList;
