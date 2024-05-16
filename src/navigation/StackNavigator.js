import { createStackNavigator } from "@react-navigation/stack";
import MyDrawer from "./DrawerNavigator.js";
import PaymentMethods from "../screens/PaymentMethods.js";
import Settings from "../screens/Settings.js";
import History from "../screens/History.js";
import AboutUs from "../screens/AboutUs.js";
import Share from "../screens/Share.js";
import Login from "../screens/Login.js";
import ProfileSettings from "../screens/ProfileSettings.js";

const MainStack = () => {
  const MainStack = createStackNavigator();
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Main"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

const RootStack = () => {
  const RootStack = createStackNavigator();
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Root"
        component={MainStack}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Payment"
        component={PaymentMethods}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="History"
        component={History}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Share"
        component={Share}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
        <RootStack.Screen
        name="Profile"
        component={ProfileSettings}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};
export default RootStack;
