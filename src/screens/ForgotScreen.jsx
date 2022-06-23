import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

import {
  CustomButton,
  CustomInput,
  BottomButton,
} from "../components/CustomComponents";

function ForgotScreen({ navigation }) {
  return (
    <View style={styles.forgotPage}>
      <Text style={styles.forgotText}>Forgotten your password?</Text>
      <Text style={styles.forgotContent}>
        Enter your registered email and we'll send you the link to reset
        password.
      </Text>

      <CustomInput label="Email." keyboardType="email-address" />

      <CustomButton btn="Get OTP" />

      <BottomButton
        onPress={() => navigation.navigate("Login")}
        t1="Back to "
        t2=" Sign In"
      />
    </View>
  );
}

export default ForgotScreen;
