import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import type { CartProps } from "../navigation/NavigationTypes";

const CartScreen = ({ route, navigation }: CartProps) => {
  const navigateToDetail = () => {
    navigation.navigate("Detail", { productId: "TestProductId" });
  };
  return (
    <View style={styles.container}>
      <Text>CART</Text>
      <StatusBar style="auto" />
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

export default CartScreen;
