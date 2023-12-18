import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import CartScreen from "./src/screens/CartScreen";

import type { RootTabParamList } from "./src/navigation/NavigationTypes";

import { Provider } from "react-redux";
import store from "./src/redux/store";

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen
            name="Detail"
            component={DetailScreen}
            options={{ tabBarItemStyle: { display: "none" } }}
          />
          <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
