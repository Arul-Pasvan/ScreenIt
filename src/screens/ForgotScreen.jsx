import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../styles/styles";

function ForgotScreen({ navigation }) {
  return (
    <View style={styles.forgotPage}>
      <Text style={styles.forgotText}>Forgotten your password?</Text>
      <Text style={styles.forgotContent}>
        Enter your registered email and we'll send you the link to reset
        password.
      </Text>
      <TextInput
        style={{ width: "95%", alignSelf: "center" }}
        backgroundColor="#fff"
        activeUnderlineColor="green"
        label="Email."
        keyboardType="email-address"
      ></TextInput>

      <TouchableOpacity style={styles.signInBtn}>
        <Text style={styles.signIn}>Get OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.signUpBtn}
      >
        <Text>Back to </Text>
        <Text style={styles.signUp}> Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgotScreen;
