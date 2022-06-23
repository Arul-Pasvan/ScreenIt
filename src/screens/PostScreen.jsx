import React from "react";
import { View, Text } from "react-native";
import ProfileData from "../components/ProfileData";
import useData from "../data/Users";

function PostScreen() {
  const [data] = useData();

  return (
    <View>
      <ProfileData />
      <Text style={{ fontSize: 20, fontWeight: "bold", padding: 30 }}>
        {data.fName} {data.lName} {data.phone} {data.role} {data.email}
      </Text>
    </View>
  );
}

export default PostScreen;
