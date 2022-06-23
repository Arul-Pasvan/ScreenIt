import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import experience from "../data/experience";

import Header from "../components/Header";
import styles from "../styles/styles";
import { CustomInput } from "../components/CustomComponents";
import useData from "../data/Users";
import Guidelines from "../data/Guidelines";
import CustomSelect from "../components/CustomSelect";

const type = [
  {
    item: "Employed",
    id: "0",
  },
  {
    item: "UnEmployed",
    id: "1",
  },
];

function ExperienceScreen({ navigation }) {
  const [data] = useData();
  const [job, setJob] = useState({
    desig: "",
    org: "",
    cost: "",
    year: "",
    month: "",
    type: "",
  });

  const [isSelected, setSelection] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <ScrollView nestedScrollEnabled={true} style={{ width: "100%" }}>
      <View style={styles.container}>
        <Header />

        <Text style={styles.nameD}>Hi {data.fName}</Text>

        <Text style={styles.experience}>Experience</Text>

        <View style={styles.inputText}>
          <CustomInput
            label="Designation"
            value={job.desig}
            onChange={(val) => setJob({ ...job, desig: val })}
          />

          <Text style={styles.expText}>Total Years of Experience</Text>

          <View style={{ flexDirection: "row", padding: 10 }}>
            <CustomSelect
              placeholder="Years*"
              options={experience}
              value={job.year}
              change={(val) => setJob({ ...job, year: val })}
            />

            <View style={{ paddingRight: "4%" }}></View>
            <CustomSelect
              placeholder="Months*"
              options={experience}
              value={job.month}
              change={(val) => setJob({ ...job, month: val })}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              borderWidth: 1,
              borderColor: "lightgray",
            }}
          >
            <Text style={{ fontSize: 16, paddingTop: 20 }}>Current Status</Text>
            <CustomSelect
              placeholder="Employed"
              options={type}
              value={job.type}
              change={(val) => setJob({ ...job, type: val })}
              style={{ color: "green" }}
            />
          </View>

          <CustomInput
            label="Current Organization*"
            value={job.org}
            onChange={(val) => setJob({ ...job, org: val })}
          />

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Checkbox
              status={isSelected ? "checked" : "unchecked"}
              onPress={() => setSelection(!isSelected)}
            />
            <Text style={{ paddingTop: 10 }}>Hide current employer</Text>
          </View>

          <CustomInput
            label="Add Interview Cost*"
            value={job.cost}
            keyboardType="number-pad"
            onChange={(val) => setJob({ ...job, cost: val })}
          />
        </View>

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
            <View style={{ padding: 30 }}>
              <Text style={styles.modalText}>
                Guindeline to determine the interview cost
              </Text>

              <FlatList
                data={Guidelines}
                keyExtractor={() => Guidelines.key}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.modalList}>
                      <FontAwesome5 name="dot-circle" color="green" size={16} />
                      <Text style={styles.listText}>{item.text}</Text>
                    </View>
                  );
                }}
              />
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
          <Text style={styles.forgot}>
            Guidelines <FontAwesome5 name="arrow-right" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.next}
          onPress={() => navigation.navigate("Skill")}
        >
          <Text style={styles.nextText}>Next</Text>
          <FontAwesome5 name="arrow-right" size={20} style={styles.icon} />
        </TouchableOpacity>
        <Text>
          {job.desig}-{job.org}-{job.cost}-{job.month}-{job.year}-{job.type}
        </Text>
      </View>
    </ScrollView>
  );
}

export default ExperienceScreen;
