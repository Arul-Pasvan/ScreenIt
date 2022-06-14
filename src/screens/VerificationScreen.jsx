import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

// const screen = Dimensions.get("window");

function VerificationScreen({ navigation }) {
  return (
    <View style={styles.forgotPage}>
      <Text style={styles.forgotText}>Verification Code</Text>
      <Text style={styles.forgotContent}>
        OTP has been sent to your registered email. Please enter to verify
      </Text>

      <Text style={styles.forgotContent}>OTP will be resent in 1:11s</Text>
      <View style={{ marginTop: 300 }}>
        <TouchableOpacity
          style={styles.verifyBtn}
          onPress={() => navigation.navigate("SignUpValid")}
        >
          <Text style={styles.signIn}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default VerificationScreen;
