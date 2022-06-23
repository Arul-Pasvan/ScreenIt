import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../styles/styles";

function CustomInput({
  error,
  label,
  keyboardType,
  onChange,
  onBlur,
  value,
  secure,
  iconPress,
  iconName,
}) {
  return (
    <TextInput
      backgroundColor="#FFF"
      activeUnderlineColor="#14C38E"
      error={error}
      label={label}
      keyboardType={keyboardType}
      onChangeText={onChange}
      onBlur={onBlur}
      value={value}
      secureTextEntry={secure}
      right={<TextInput.Icon onPress={iconPress} name={iconName} />}
      style={{ backgroundColor: "#FFF" }}
    ></TextInput>
  );
}

function CustomButton({ onPress, btn }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.signInBtn}>
      <Text style={styles.signIn}>{btn}</Text>
    </TouchableOpacity>
  );
}

function BottomButton({ onPress, t1, t2 }) {
  return (
    <TouchableOpacity style={styles.signUpBtn} onPress={onPress}>
      <Text>{t1}</Text>
      <Text style={styles.signUp}>{t2}</Text>
    </TouchableOpacity>
  );
}

function SocialButton() {
  return (
    <TouchableOpacity
      style={styles.googleBtn}
      onPress={() => console.log("Google Button Clicked.")}
    >
      <Image
        style={styles.googleImg}
        source={require("../../assets/googleLogo.png")}
      />
      <Text style={styles.googleText}>Login with Google</Text>
    </TouchableOpacity>
  );
}

export { CustomButton, CustomInput, BottomButton, SocialButton };
