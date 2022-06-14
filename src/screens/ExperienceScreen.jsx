import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

import Header from "../components/Header";
import styles from "../styles/styles";

function ExperienceScreen({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Header />
      </View>
      <Text style={{ fontSize: 22, fontWeight: "bold", padding: 40 }}>
        Hi Pasvan
      </Text>
      <Text style={styles.experience}>Experience</Text>
      <TextInput
        backgroundColor="#FFF"
        activeUnderlineColor="#14C38E"
        label="Designation*"
      ></TextInput>
      <Text style={{ padding: 15 }}>Total Years of Experience</Text>
      <TextInput
        backgroundColor="#FFF"
        activeUnderlineColor="#14C38E"
        label="Current Organization*"
      ></TextInput>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Checkbox
          status={isSelected ? "checked" : "unchecked"}
          onPress={() => setSelection(!isSelected)}
        />
        <Text style={{ paddingTop: 10 }}>Hide current employer</Text>
      </View>
      <TextInput
        backgroundColor="#FFF"
        activeUnderlineColor="#14C38E"
        label="Add Interview Cost*"
      ></TextInput>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModal(!modal);
        }}
      >
        <View style={styles.modal}>
          <View style={{ padding: 35 }}>
            <Text style={styles.modalText}>
              Guindeline to determine the interview cost
            </Text>
            <Text style={{ marginTop: 10 }}>
              Arrive the cost based on the skills hat you interview, common
              skills will have multiple interviewers to choose.
            </Text>
            <Text style={{ marginTop: 10 }}>
              Cost / Interview is highly acceptable by the organization when you
              have a good track record of taking interviews on time and reviews.
            </Text>
            <Text style={{ marginTop: 10 }}>
              In case if you are not getting an interview request from the
              Organisation, your cost might be the cause. So kindly rethink.
            </Text>
            <Text style={{ marginTop: 10 }}>
              The recommended cost per interview is the cost per hour of your
              skill.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.verifyBtn}
            onPress={() => setModal(false)}
          >
            <Text style={styles.signIn}>Ok</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModal(true)}>
        <Text style={styles.forgot}>Guidelines </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.next}
        onPress={() => navigation.navigate("Skill")}
      >
        <Text style={{ color: "#fff", fontSize: 20, alignSelf: "center" }}>
          Next
        </Text>
        <FontAwesome5
          name="arrow-right"
          size={20}
          style={{ color: "#fff", alignSelf: "center" }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ExperienceScreen;
