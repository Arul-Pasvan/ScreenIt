import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import styles from "../styles/styles";
import Header from "../components/Header";

function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Header />
      </View>
      <Text style={styles.forgotText}>Sign Up</Text>
      <Text style={styles.forgotContent}>
        Enter your email and we'll send you the OTP
      </Text>
      <TextInput
        style={{ width: "95%", alignSelf: "center" }}
        backgroundColor="#fff"
        activeUnderlineColor="green"
        label="Email."
        keyboardType="email-address"
      ></TextInput>

      <TouchableOpacity
        style={styles.signInBtn}
        onPress={() => navigation.navigate("Verification")}
      >
        <Text style={styles.signIn}>Send OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signUpBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Already have an account? </Text>
        <Text style={styles.signUp}> Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUpScreen;
