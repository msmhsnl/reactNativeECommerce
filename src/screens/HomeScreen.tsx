import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import type { HomeProps } from "../navigation/NavigationTypes";

const HomeScreen = ({ route, navigation }: HomeProps) => {
  const testText = process.env.EXPO_PUBLIC_TEST;

  const navigateToDetail = () => {
    navigation.navigate("Detail", { productId: "TestProductId" });
  };
  return (
    <View style={styles.container}>
      <Text>HOME {testText}</Text>
      <Button title="Detail" onPress={navigateToDetail} />
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

export default HomeScreen;
