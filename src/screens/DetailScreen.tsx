import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import type { DetailProps } from "../navigation/NavigationTypes";

const DetailScreen = ({ route, navigation }: DetailProps) => {
  const { productId } = route.params;
  return (
    <View style={styles.container}>
      <Text>SETTINGS</Text>
      <Text>{`productId: ${productId}`}</Text>
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

export default DetailScreen;
