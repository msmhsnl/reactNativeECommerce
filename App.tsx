import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import CartScreen from "./src/screens/CartScreen";

import type { RootTabParamList } from "./src/navigation/NavigationTypes";

import { Provider } from "react-redux";
import store from "./src/redux/store";

import CartCountBubble from "./src/components/CartCountBubble/CartCountBubble";

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <Ionicons
                    name="home-sharp"
                    size={24}
                    color={focused ? "orange" : "gray"}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <View className="relative">
                    <CartCountBubble />
                    <Ionicons
                      name="cart"
                      size={24}
                      color={focused ? "orange" : "gray"}
                    />
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Detail"
            component={DetailScreen}
            options={{
              tabBarItemStyle: { display: "none" },
              tabBarShowLabel: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
