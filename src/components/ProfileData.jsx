import React from "react";
import { View, Text } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import useData from "../data/Users";
import styles from "../styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

function ProfileData({ navigation }) {
  const [data] = useData();
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 1,
        paddingVertical: 10,
        backgroundColor: "lightgray",
      }}
    >
      <Text style={styles.nameTag}>Hi {data.fName}</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
        <Feather
          name="bell"
          size={25}
          style={{ paddingLeft: 170, paddingRight: 20 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <FontAwesome5 name="user-circle" size={25} />
      </TouchableOpacity>
    </View>
  );
}
export default ProfileData;
