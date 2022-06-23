import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "../styles/styles";
function UserSelection() {
  const [checked, setChecked] = useState("");
  return (
    <View style={styles.user}>
      <TouchableOpacity
        style={[
          styles.candidateBtn,
          {
            backgroundColor: checked === "interviewer" ? "#14C38E" : "#F8F8F8",
          },
        ]}
        onPress={() => setChecked("interviewer")}
      >
        <FontAwesome5 size={22} name="user-tie" />
        <Text
          style={[
            styles.candidateText,
            { color: checked === "interviewer" ? "#fff" : "black" },
          ]}
        >
          Interviewer
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.candidateBtn,
          {
            backgroundColor: checked === "candidate" ? "#14C38E" : "#F8F8F8",
          },
        ]}
        onPress={() => setChecked("candidate")}
      >
        <FontAwesome5 size={22} name="user-graduate" />
        <Text
          style={[
            styles.candidateText,
            { color: checked === "candidate" ? "#fff" : "black" },
          ]}
        >
          Candidate
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default UserSelection;
