import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/homepage/homepage";
import { KeyboardAvoidingView } from "react-native";
import { View } from "react-native";

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
