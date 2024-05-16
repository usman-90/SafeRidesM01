import { View, Text, Switch, TouchableOpacity, ScrollView } from "react-native";

const Settings = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={{
                    backgroundColor: "white", width: 40, height: 40, justifyContent: "center", alignItems: "center", marginHorizontal: 20, marginVertical: 10, borderRadius: 10,
                }}>
                    <Text style={{ fontSize: 30, fontWeight: "300" }}>
                        &lt;
                    </Text>
                </View>
            </TouchableOpacity>


            <Text style={{ fontSize: 30, marginHorizontal: 20, marginBottom: 10 }}>Settings</Text>

            <View style={{ flexDirection: "row", borderRadius: 10, justifyContent: "space-between", alignItems: "center", marginHorizontal: 20, paddingHorizontal: 15, backgroundColor: "white", marginVertical: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    Display Traffic
                </Text>
                <Switch
                    trackColor={{ false: "lightgray", true: '#00BFF3' }}
                    thumbColor={true ? 'white' : '#f4f3f4'}
                    value={false} onChange={() => { }} />
            </View>

            <View style={{ flexDirection: "row", borderRadius: 10, justifyContent: "space-between", alignItems: "center", marginHorizontal: 20, paddingHorizontal: 15, backgroundColor: "white", marginVertical: 5, paddingVertical: 10 }}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: "500", paddingVertical: 3 }}>
                        App Language
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: "300", color: "black" }}>
                        English
                    </Text>
                </View>
                <Text style={{ fontSize: 30, fontWeight: "300" }}>
                    &gt;
                </Text>
            </View>

            <View style={{ flexDirection: "row", borderRadius: 10, justifyContent: "space-between", alignItems: "center", marginHorizontal: 20, paddingHorizontal: 15, backgroundColor: "white", marginVertical: 5, paddingVertical: 10 }}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: "500", paddingVertical: 3 }}>
                        Don't call me
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: "300", maxWidth: 200, color: "black" }}>
                        We’ll ask the driver not to call unless it’s an emergency.
                    </Text>
                </View>
                <Switch value={true}
                    trackColor={{ false: "lightgray", true: '#00BFF3' }}
                    thumbColor={true ? 'white' : '#f4f3f4'}
                    onChange={() => { }} />
            </View>

            <View style={{ flexDirection: "row", borderRadius: 10, justifyContent: "space-between", alignItems: "center", marginHorizontal: 20, paddingHorizontal: 15, backgroundColor: "white", marginVertical: 5, paddingVertical: 10 }}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: "500", paddingVertical: 3 }}>
                        Share my location with driver
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: "300", maxWidth: 200, color: "black" }}>
                        The driver will be able to see your location until you get in the card
                    </Text>
                </View>
                <Switch value={true}
                    trackColor={{ false: "lightgray", true: '#00BFF3' }}
                    thumbColor={true ? 'white' : '#f4f3f4'}

                    onChange={() => { }} />
            </View>

            <Text style={{ fontSize: 30, marginHorizontal: 20, marginVertical: 10 }}>Notifications</Text>

            <View style={{ flexDirection: "row", borderRadius: 10, justifyContent: "space-between", alignItems: "center", marginHorizontal: 20, paddingHorizontal: 15, backgroundColor: "white", marginVertical: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    Promotions
                </Text>
                <Switch
                    trackColor={{ false: "lightgray", true: '#00BFF3' }}
                    thumbColor={true ? 'white' : '#f4f3f4'}

                    value={true} onChange={() => { }} />
            </View>


            <View style={{ flexDirection: "row", borderRadius: 10, justifyContent: "space-between", alignItems: "center", marginHorizontal: 20, paddingHorizontal: 15, backgroundColor: "white", marginVertical: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    New Features
                </Text>
                <Switch
                    trackColor={{ false: "lightgray", true: '#00BFF3' }}
                    thumbColor={true ? 'white' : '#f4f3f4'}

                    value={true} onChange={() => { }} />
            </View>


            <View style={{ flexDirection: "row", borderRadius: 10, justifyContent: "space-between", alignItems: "center", marginHorizontal: 20, paddingHorizontal: 15, backgroundColor: "white", marginVertical: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    Recommended rides
                </Text>
                <Switch
                    trackColor={{ false: "lightgray", true: '#00BFF3' }}
                    thumbColor={true ? 'white' : '#f4f3f4'}

                    value={true} onChange={() => { }} />
            </View>

        </ScrollView>
    )
}

export default Settings;

