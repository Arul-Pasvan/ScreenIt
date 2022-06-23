import React, { useRef, useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";
import RNPickerSelect from "react-native-picker-select";
import { firebase, db } from "../../firebase";

import styles from "../styles/styles";
import Header from "../components/Header";
import { CustomInput, CustomButton } from "../components/CustomComponents";

function SignUpScreenValidated({ navigation }) {
  const phoneInput = useRef(null);
  const [isSelected, setSelection] = useState(false);

  const [user, setUser] = useState({
    fName: "",
    lName: "",
    role: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleSignUp = async (email, password, fName, lName, phone, role) => {
    try {
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      db.collection("users").doc(authUser.user.email).set({
        owner_uuid: authUser.user.uid,
        fName: fName,
        lName: lName,
        email: email,
        role: role,
        phone: phone,
      });
      isSelected && navigation.navigate("Experience");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Header />
        <Text style={styles.head}>
          Sign up to stay updated on all new world
        </Text>
      </View>

      {/* --------------- Input Section --------------------- */}

      <View style={styles.inputText}>
        <CustomInput
          label="First Name"
          value={user.fName}
          onChange={(val) => setUser({ ...user, fName: val })}
        />
        <CustomInput
          label="Last Name"
          value={user.lName}
          onChange={(val) => setUser({ ...user, lName: val })}
        />

        <View style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}>
          <RNPickerSelect
            onValueChange={(val) => setUser({ ...user, role: val })}
            items={[
              { key: 1, label: "Interviewer", value: "interviewer" },
              { key: 2, label: "Candidate", value: "candidate" },
            ]}
            placeholder={{ label: "Select Role" }}
          />
        </View>

        <CustomInput
          label="Email."
          value={user.email}
          onChange={(val) => setUser({ ...user, email: val })}
        />

        <PhoneInput
          ref={phoneInput}
          defaultValue={user.phone}
          // defaultCode="IN"
          layout="second"
          onChangeText={(val) => {
            setUser({ ...user, phone: val });
          }}
          withShadow
        />

        <TextInput
          backgroundColor="#FFF"
          style={{ backgroundColor: "#FFF" }}
          activeUnderlineColor="#14C38E"
          label="Password."
          value={user.password}
          onChangeText={(val) => setUser({ ...user, password: val })}
          secureTextEntry
          right={<TextInput.Icon name="eye-off" />}
        ></TextInput>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Checkbox
            status={isSelected ? "checked" : "unchecked"}
            onPress={() => setSelection(!isSelected)}
          />
          <Text style={{ paddingTop: 10 }}>
            Accept Terms and Conditions and Privacy policy
          </Text>
        </View>
      </View>

      <CustomButton
        onPress={() => {
          isSelected ? navigation.navigate("Experience") : null;
          // handleSignUp(
          //   user.email,
          //   user.password,
          //   user.fName,
          //   user.lName,
          //   user.phone,
          //   user.role
          // );
        }}
        btn="Sign Up"
      />
    </View>
  );
}

export default SignUpScreenValidated;
