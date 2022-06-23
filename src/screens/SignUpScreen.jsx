import React from "react";
import { View, Text } from "react-native";

import styles from "../styles/styles";
import Header from "../components/Header";
import {
  CustomButton,
  CustomInput,
  BottomButton,
} from "../components/CustomComponents";

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

      <CustomInput label="Email." keyboardType="email-address" />

      <CustomButton
        onPress={() => navigation.navigate("Verification")}
        btn="Send OTP"
      />

      <BottomButton
        onPress={() => navigation.navigate("Login")}
        t1="Already have an account? "
        t2=" Sign In"
      />
    </View>
  );
}

export default SignUpScreen;
