import { TouchableOpacity } from "react-native";
import { GlobalStyles } from "../../GlobalStyles";
import { Image, View, StyleSheet, Text } from "react-native";
import { Bars4Icon } from "react-native-heroicons/solid";

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <View
                        style={[
                            Styles.HamBurger,
                            GlobalStyles.bg_orange,
                            GlobalStyles.alignItemsCenter,
                        ]}
                    >
                        <Bars4Icon color={"black"} />
                    </View>
                </TouchableOpacity>

            </Text>
        </View>
    )
}

export default Home

const Styles = StyleSheet.create({
    HamBurger: {
        padding: 10,
        width: 39,
        borderRadius: 50,
        position: "relative",
        top: 45,
        left: 20,
    },
});
