import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";
import RNPickerSelect from "react-native-picker-select";

import styles from "../styles/styles";
import Header from "../components/Header";

function SignUpScreenValidated({ navigation }) {
  const phoneInput = useRef(null);
  const [phone, setPhone] = useState("");
  const [isSelected, setSelection] = useState(false);

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
        <TextInput
          backgroundColor="#FFF"
          activeUnderlineColor="#14C38E"
          label="First Name"
        ></TextInput>
        <TextInput
          backgroundColor="#FFF"
          activeUnderlineColor="#14C38E"
          label="Last Name"
        ></TextInput>

        <View style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { key: 1, label: "Interviewer", value: "interviewer" },
              { key: 2, label: "Candidate", value: "candidate" },
            ]}
            placeholder={{ label: "Select Role" }}
          />
        </View>

        <TextInput
          label="Email"
          value="pasvan.g@truetechsolutions.in"
          disabled="true"
          backgroundColor="#FFF"
        />
        <PhoneInput
          ref={phoneInput}
          defaultValue={phone}
          // defaultCode="IN"
          layout="second"
          onChangeText={(text) => {
            setPhone(text);
          }}
          withShadow
        />
        <TextInput
          backgroundColor="#FFF"
          style={{ backgroundColor: "#FFF" }}
          activeUnderlineColor="#14C38E"
          label="Password."
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
      <TouchableOpacity
        style={styles.signInBtn}
        onPress={() => {
          isSelected ? navigation.navigate("Experience") : null;
        }}
      >
        <Text style={styles.signIn}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUpScreenValidated;
