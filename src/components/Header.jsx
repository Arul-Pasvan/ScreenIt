import React from "react";
import { Image, View, Text } from "react-native";
import styles from "../styles/styles";

function Header({ text }) {
  return (
    <View style={styles.title}>
      <Image
        style={styles.logo}
        source={require("../../assets/logoTitle.png")}
      />
      <Text style={styles.head}>{text}</Text>
    </View>
  );
}

export default Header;
