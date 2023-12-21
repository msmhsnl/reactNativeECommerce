import { Text, View } from "react-native";

import { connect } from "react-redux";
import { AppState } from "../../redux/store";

import { getTotalQuantity } from "../../methods/cart/cartHelper";

const CartCountBubble = (props: AppProps) => {
  return (
    <View
      className="20flex-row justify-center items-center bg-orange-300 rounded-full absolute left-4 bottom-4"
      style={{ minWidth: 20, minHeight: 20 }}
    >
      <Text className="m-0.5 text-xs font-semibold text-gray-500">
        {getTotalQuantity(props.cart)}
      </Text>
    </View>
  );
};

const mapStateToProps = (state: AppState) => ({
  ...state.cart,
});

type AppProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(CartCountBubble);