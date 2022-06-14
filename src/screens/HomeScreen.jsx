import React, { useState } from "react";
import { View } from "react-native";
import { BottomNavigation } from "react-native-paper";

import styles from "../styles/styles";
import PostRoute from "./PostScreen";
import InterestRoute from "./InterestScreen";
import AvailabilityRoute from "./AvailabilityScreen";
import ScheduleRoute from "./ScheduleScreen";
import FeedbackRoute from "./FeedbackScreen";

function HomeScreen() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "post",
      title: "Post",
      icon: "format-list-bulleted",
      color: "#14C38E",
    },
    {
      key: "interest",
      title: "Interest",
      icon: "thumb-up-outline",
      color: "#14C38E",
    },
    {
      key: "availability",
      title: "Availability",
      icon: "account-clock-outline",
      color: "#14C38E",
    },
    {
      key: "schedule",
      title: "Schedule",
      icon: "timetable",
      color: "#14C38E",
    },
    {
      key: "feedback",
      title: "Feedback",
      icon: "message-reply-text-outline",
      color: "#14C38E",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    post: PostRoute,
    interest: InterestRoute,
    availability: AvailabilityRoute,
    schedule: ScheduleRoute,
    feedback: FeedbackRoute,
  });

  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        // labeled={true}
        // shifting={false}

        // activeColor="gray"
        // inactiveColor="pink"
      />
    </View>
  );
}

export default HomeScreen;

{
  /* <SafeAreaView style={{ marginTop: "15%", paddingRight: "2%" }}>
      <IconButton
        style={{ alignSelf: "flex-end" }}
        icon="logout"
        size={30}
        color="green"
        onPress={() => navigation.navigate("Login")}
      />
      <View style={styles.forgotPage}>
        <Text style={styles.forgotText}>Welcome Home...</Text>
      </View>

    </SafeAreaView> */
}
