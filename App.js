import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import "react-native-gesture-handler";

import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ForgotScreen from "./src/screens/ForgotScreen";
import VerificationScreen from "./src/screens/VerificationScreen";
import SignUpScreenValidated from "./src/screens/SignUpScreenValidated";
import ExperienceScreen from "./src/screens/ExperienceScreen";
import SkillScreen from "./src/screens/SkillScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Forgot: ForgotScreen,
    Verification: VerificationScreen,
    SignUpValid: SignUpScreenValidated,
    Experience: ExperienceScreen,
    Skill: SkillScreen,
    Profile: ProfileScreen,
    Notification: NotificationScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "App",
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
