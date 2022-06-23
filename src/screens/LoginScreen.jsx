import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HelperText } from "react-native-paper";

import {
  CustomButton,
  CustomInput,
  BottomButton,
  SocialButton,
} from "../components/CustomComponents";
import UserSelection from "../components/UserSelection";
import { firebase } from "../../firebase";

import { validateEmail, validatePassword } from "../validation/validation";
import styles from "../styles/styles";
import Header from "../components/Header";

function LoginScreen({ navigation }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [hide, showHide] = useState(true);
  const [error, setError] = useState({ eError: false, pError: false });

  function handleEmailError() {
    if (!validateEmail(user.email)) {
      setError({ ...error, eError: true });
    } else {
      setError({ ...error, eError: false });
    }
  }

  // function handlePasswordError() {
  //   if (!validatePassword(user.password)) {
  //     setError({ ...error, pError: true });
  //   } else {
  //     setError({ ...error, pError: false });
  //   }
  // }

  const handleSignIn = async (email, password) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Logged in with:", user.email);
          navigation.navigate("Home");
        });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Header text="Sign in to stay updated on all new world" />

      <UserSelection />

      {/* --------------- Input Section --------------------- */}

      <View style={styles.inputText}>
        <CustomInput
          error={error.eError ? true : false}
          label="Email"
          keyboardType="email-address"
          value={user.email}
          onChange={(val) => setUser({ ...user, email: val })}
          onBlur={handleEmailError}
        />
        {error.eError && (
          <HelperText type="error" visible={error.eError}>
            Invalid Email.
          </HelperText>
        )}

        <CustomInput
          error={error.pError ? true : false}
          label="Password."
          value={user.password}
          onChange={(val) => setUser({ ...user, password: val })}
          secure={hide ? true : false}
          iconPress={() => showHide(!hide)}
          iconName={hide ? "eye-off" : "eye"}
          // onBlur={handlePasswordError}
        />
        {error.pError && (
          <HelperText type="error" visible={error.pError}>
            Includes uppercase, lowercase, number, special characters.
          </HelperText>
        )}

        <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <CustomButton
          onPress={() => handleSignIn(user.email, user.password)}
          btn="Sign In"
        />
      </View>

      <SocialButton />

      <BottomButton
        onPress={() => navigation.navigate("SignUp")}
        t1="New to Screenit? "
        t2=" Sign Up"
      />
    </View>
  );
}

export default LoginScreen;
