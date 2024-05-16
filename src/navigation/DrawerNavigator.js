import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
} from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";
import Home from '../screens/Home'
import { GlobalStyles } from "../../GlobalStyles";
import { CameraIcon, ClockIcon, Cog8ToothIcon, ExclamationTriangleIcon, InformationCircleIcon, ShareIcon, StarIcon, WalletIcon , UserIcon} from 'react-native-heroicons/solid'

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View
                style={[
                    GlobalStyles.marginVertical_5,
                    GlobalStyles.flex_row,
                    {marginLeft:30}
                ]}
            >
                <CameraIcon color={"black"} style={[GlobalStyles.marginRight_3]} size={50} />
                <View>
                    <Text
                        style={[
                            GlobalStyles.fw_bold,
                            GlobalStyles.fs_3,
                            GlobalStyles.marginVertical_1,
                        ]}
                    >
                        Steven Smith
                    </Text>
                    <View style={[GlobalStyles.text_gray, { flexDirection: "row", alignItems: "center" }]}>
                        <StarIcon color={"gray"} style={{ marginRight: 5 }} />
                        <Text>
                            5.0
                        </Text>
                    </View>
                </View>
            </View>
            <DrawerItem
                label="Payment Methods"
                icon={({ focused, color, size }) => (
                    <WalletIcon color={"#00BFF3"} style={[GlobalStyles.marginLeft_5]} />
                )}
                onPress={() => props.navigation.navigate("Payment")}
            />
            <DrawerItem
                label="Settings"
                icon={({ focused, color, size }) => (
                    <Cog8ToothIcon color={"#00BFF3"} style={[GlobalStyles.marginLeft_5]} />
                )}
                onPress={() => props.navigation.navigate("Settings")}
            />
            <DrawerItem
                label="History"
                icon={({ focused, color, size }) => (
                    <ClockIcon color={"#00BFF3"} style={[GlobalStyles.marginLeft_5]} />
                )}
                onPress={() => props.navigation.navigate("History")}
            />
            <DrawerItem
                label="About us"
                icon={({ focused, color, size }) => (
                    <InformationCircleIcon color={"#00BFF3"} style={[GlobalStyles.marginLeft_5]} />
                )}
                onPress={() => props.navigation.navigate("AboutUs")}
            />
            <DrawerItem
                label="Share"
                icon={({ focused, color, size }) => (
                    <ShareIcon style={[GlobalStyles.marginLeft_5]} color={"#00BFF3"} />
                )}
                onPress={() => props.navigation.navigate("Share")}
            />
            <DrawerItem
                label="Login"
                icon={({ focused, color, size }) => (
                    <ExclamationTriangleIcon style={[GlobalStyles.marginLeft_5]} color={"#00BFF3"} />
                )}
                onPress={() => props.navigation.navigate("Login")}
            />
             <DrawerItem
                label="Profile"
                icon={({ focused, color, size }) => (
                    <UserIcon style={[GlobalStyles.marginLeft_5]} color={"#00BFF3"} />
                )}
                onPress={() => props.navigation.navigate("Profile")}
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
