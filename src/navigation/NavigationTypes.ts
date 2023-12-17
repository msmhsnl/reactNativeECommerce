import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type RootTabParamList = {
  Home: undefined;
  Detail: { productId: string };
  Cart: undefined;
};

type DetailProps = BottomTabScreenProps<RootTabParamList, "Detail">;
type HomeProps = BottomTabScreenProps<RootTabParamList, "Home">;
type CartProps = BottomTabScreenProps<RootTabParamList, "Cart">;

export { RootTabParamList, HomeProps, DetailProps, CartProps };
