import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";
import Home from '../screens/Home'

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={[
          GlobalStyles.marginVertical_5,
          GlobalStyles.flex_row,
          GlobalStyles.marginHorizontal_7,
          GlobalStyles.justifyContentBetween,
        ]}
      >
        <View>
          <Image source={Track} style={[GlobalStyles.h_5, GlobalStyles.w_5]} />
          <Text
            style={[
              GlobalStyles.fw_bold,
              GlobalStyles.fs_3,
              GlobalStyles.marginVertical_1,
            ]}
          >
            0
          </Text>
          <Text style={[GlobalStyles.text_gray]}>Miles</Text>
        </View>
        <View>
          <Image
            source={Scooter}
            style={[GlobalStyles.h_5, GlobalStyles.w_5]}
          />
          <Text
            style={[
              GlobalStyles.fw_bold,
              GlobalStyles.fs_3,
              GlobalStyles.marginVertical_1,
            ]}
          >
            0
          </Text>
          <Text style={[GlobalStyles.text_gray]}>Rides</Text>
        </View>
      </View>
      <DrawerItem
        label="Home"
        icon={({ focused, color, size }) => (
          <Image source={Wallet} style={[GlobalStyles.marginLeft_5]} />
        )}
        onPress={() => props.navigation.navigate("Home", { screen: "Map" })}
      />
      <DrawerItem
        label="Payment"
        icon={({ focused, color, size }) => (
          <Image source={Wallet} style={[GlobalStyles.marginLeft_5]} />
        )}
        onPress={() => props.navigation.navigate("Payment")}
      />
      <DrawerItem
        label="History"
        icon={({ focused, color, size }) => (
          <Image source={HistoryPng} style={[GlobalStyles.marginLeft_5]} />
        )}
        onPress={() => props.navigation.navigate("History")}
      />
      <DrawerItem
        label="Safety"
        icon={({ focused, color, size }) => (
          <Image source={Security} style={[GlobalStyles.marginLeft_5]} />
        )}
        onPress={() => props.navigation.navigate("Safety")}
      />
      <DrawerItem
        label="Help"
        icon={({ focused, color, size }) => (
          <Image source={Information} style={[GlobalStyles.marginLeft_5]} />
        )}
        onPress={() => props.navigation.navigate("Help")}
      />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
