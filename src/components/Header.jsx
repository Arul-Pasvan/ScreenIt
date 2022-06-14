import React from "react";
import { Image } from "react-native";
import styles from "../styles/styles";

function Header() {
  return (
    <Image style={styles.logo} source={require("../../assets/logoTitle.png")} />
  );
}

export default Header;
