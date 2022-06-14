import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import StarRating from "react-native-star-rating-widget";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

import Header from "../components/Header";
import styles from "../styles/styles";

function SkillScreen() {
  const [rating, setRating] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Header />
      </View>

      <Text style={styles.name}>Hi Pasvan</Text>
      <Text style={styles.experience}>Skills</Text>
      <TextInput
        backgroundColor="#FFF"
        activeUnderlineColor="#14C38E"
        label="Add Skills*"
      ></TextInput>
      <View style={styles.star}>
        <Text style={{ color: "gray", fontSize: 16 }}>Skill Rating*</Text>
        <StarRating
          enableHalfStar={false}
          rating={rating}
          onChange={setRating}
        />
      </View>
      <TouchableOpacity
        style={styles.signInBtn}
        onPress={() => console.log("Skill Added.")}
      >
        <Text style={styles.signIn}>Add</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModal(!modal);
        }}
      >
        <View style={styles.modal}>
          <View
            style={{
              padding: 35,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20 }}>My Skillset</Text>
            <TouchableOpacity onPress={() => setModal(false)}>
              <AntDesign size={30} name="close" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModal(true)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 50,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/skill.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text style={[styles.signUp, { fontSize: 20 }]}> My Skillset</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default SkillScreen;
