import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { ArrowSmallLeftIcon } from "react-native-heroicons/outline";
import { EnvelopeIcon, PhoneIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function ProfileSettings() {
  const [email, setEmail] = useState("Steven Smith");
  const [mobile, setMobile] = useState("+915678643");
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate("Root");
  };

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 5,
        backgroundColor: "#fafafa",
        height: "100%",
      }}
    >
      <ScrollView vertical>
        {/* ----Top Return Icon---- */}
        <TouchableOpacity style={styles.TopBack} onPress={goBack}>
          <ArrowSmallLeftIcon color="black" size={20} />
        </TouchableOpacity>

        {/* ----image container---- */}
        <View style={styles.CenterImage}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/camera.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>

        <Text style={styles.HeadingText}>Steven Smith</Text>

        {/* ----Inputs---- */}
        <View style={styles.InputContainer}>
          <Text style={styles.Labels}>Email</Text>
          <View style={styles.InputWrapperEdit}>
            <EnvelopeIcon color="#00BFF3" size={17} />
            <TextInput
              style={styles.TextInputEdit}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <Text style={styles.Labels}>Mobile Number</Text>
          <View style={styles.InputWrapperEdit}>
            <PhoneIcon color="#00BFF3" size={17} />
            <TextInput
              style={styles.TextInputEdit}
              value={mobile}
              onChangeText={setMobile}
            />
          </View>
        </View>

        {/* Finish Booking button */}
        <TouchableOpacity style={styles.finishBookingButton}>
          <Text style={styles.finishBookingButtonText}>Update</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  InputWrapperEdit: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "gray",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  TextInputEdit: {
    flex: 1,
    height: 40,
    padding: 10,
  },
  TextClass: {
    color: "black",
    fontSize: 13,
  },
  TopBack: {
    marginTop: 25,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    width: "13%",
    height: 40,
    marginHorizontal: 15,
  },
  TopButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    marginTop: 20,
    marginHorizontal: 15,
  },
  HeadingText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  InputContainer: {
    paddingHorizontal: 20,
  },
  finishBookingButton: {
    backgroundColor: "#00BFF3",
    paddingVertical: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
    marginHorizontal: 15,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  finishBookingButtonText: {
    color: "white",
    fontSize: 18,
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: "auto",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#ededed",
  },

  image: {
    width: 80,
    height: 80,
  },
  Labels: {
    color: "black",
    fontSize: 12,
    paddingLeft: 3,
    marginBottom: 5,
  },
  CenterImage: {
    alignItems: "center",
  },
});
