import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";

import type { HomeProps } from "../navigation/NavigationTypes";
import { setProducts, addProducts } from "../redux/products/actions";
import { AppState } from "../redux/store";
import { bindActionCreators, Dispatch } from "redux";

const HomeScreen = (props: HomeProps & AppProps) => {
  const testText = process.env.EXPO_PUBLIC_TEST;

  const navigateToDetail = () => {
    props.navigation.navigate("Detail", { productId: "TestProductId" });
  };

  return (
    <View style={styles.container}>
      <Text>HOME {testText}</Text>
      <Text>PRODUCT {props.products[0].name}</Text>
      <Button title="Detail" onPress={navigateToDetail} />
      <Button
        title="SET PROD"
        onPress={() => {
          props.setProducts([
            {
              createdAt: "2023-07-17T02:49:46.692Z",
              name: "Aston Martin Durango",
              image: "https://loremflickr.com/640/480/food",
              price: "374.00",
              description:
                "Odio et voluptates velit omnis incidunt dolor. Illo sint quisquam tenetur dolore nemo molestiae. Dolorum odio dicta placeat. Commodi rerum molestias quibusdam labore. Odio libero doloribus. Architecto repellendus aperiam nulla at at voluptatibus ipsum.\nFugit expedita a quo totam quaerat amet eveniet laboriosam. Ad assumenda atque porro neque iusto. Inventore repudiandae esse non sit veritatis ab reprehenderit quas. Sit qui natus exercitationem quis commodi vero.\nIure reiciendis quas corrupti incidunt repellat voluptatem esse eveniet. Aliquid illo cum doloremque similique. Blanditiis corporis repellendus cumque totam quod iusto dolorum. Incidunt a eos eum voluptas tempora voluptas reiciendis autem.",
              model: "Roadster",
              brand: "Smart",
              id: "2",
            },
          ]);
        }}
      />
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

const mapStateToProps = (state: AppState) => ({
  ...state.products,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ setProducts, addProducts }, dispatch);

type AppProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
