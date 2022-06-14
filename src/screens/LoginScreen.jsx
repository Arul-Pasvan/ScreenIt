import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

import Users from "../data/Users";
import { validateEmail, validatePassword } from "../validation/validation";
import styles from "../styles/styles";
import Header from "../components/Header";

function LoginScreen({ navigation }) {
  const [checked, setChecked] = useState("");
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

  function handlePasswordError() {
    if (!validatePassword(user.password)) {
      setError({ ...error, pError: true });
    } else {
      setError({ ...error, pError: false });
    }
  }

  function handleSignIn(email, password) {
    const foundUser = Users.filter((item) => {
      return email == item.email && password == item.password;
    });

    if (user.email.length == 0 || user.password.length == 0) {
      Alert.alert(
        "Wrong Input!",
        "Username or Password field cannot be empty.",
        [{ text: "Okay" }]
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert("Invalid User!", "Username or Password is Incorrect.", [
        { text: "Okay" },
      ]);
      return;
    }
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Header />
        <Text style={styles.head}>
          Sign in to stay updated on all new world
        </Text>
      </View>

      {/* ----------------- User Selection  ------------------- */}
      <View style={styles.user}>
        <TouchableOpacity
          style={[
            styles.candidateBtn,
            {
              backgroundColor:
                checked === "interviewer" ? "#14C38E" : "#F8F8F8",
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
      {/* --------------- Input Section --------------------- */}
      <View style={styles.inputText}>
        <TextInput
          backgroundColor="#FFF"
          activeUnderlineColor="#14C38E"
          error={error.eError ? true : false}
          label="Email."
          keyboardType="email-address"
          onChangeText={(val) => setUser({ ...user, email: val })}
          onBlur={handleEmailError}
        ></TextInput>
        {error.eError && (
          <HelperText type="error" visible={error.eError}>
            Invalid Email.
          </HelperText>
        )}
        <TextInput
          backgroundColor="#FFF"
          style={{ backgroundColor: "#FFF" }}
          activeUnderlineColor="#14C38E"
          error={error.pError ? true : false}
          label="Password."
          onChangeText={(val) => setUser({ ...user, password: val })}
          secureTextEntry={hide ? true : false}
          right={
            <TextInput.Icon
              onPress={() => showHide(!hide)}
              name={hide ? "eye-off" : "eye"}
            />
          }
          onBlur={handlePasswordError}
        ></TextInput>
        {error.pError && (
          <HelperText type="error" visible={error.pError}>
            Includes uppercase, lowercase, number, special characters.
          </HelperText>
        )}
        <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signInBtn}
          onPress={() => {
            handleSignIn(user.email, user.password),
              setUser({ email: "", password: "" });
          }}
        >
          <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>
      </View>

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

      <TouchableOpacity
        style={styles.signUpBtn}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text>New to Screenit? </Text>
        <Text style={styles.signUp}> Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
