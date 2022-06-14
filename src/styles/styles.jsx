import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#FFF",
    flex: 1,
  },
  title: { alignItems: "center" },
  logo: {
    height: 60,
    width: 230,
    marginTop: 80,
  },
  head: {
    marginTop: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  user: { flexDirection: "row", justifyContent: "space-evenly" },
  candidateBtn: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  candidateText: { paddingLeft: 10, fontSize: 18 },
  inputText: {
    marginTop: 20,
    width: "95%",
    alignSelf: "center",
  },
  forgot: {
    color: "#14C38E",
    alignSelf: "flex-end",
    marginTop: 10,
  },
  signInBtn: {
    width: "95%",
    height: 50,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#00FFAB",
    justifyContent: "center",
  },
  signIn: {
    color: "#E3FDFD",
    alignSelf: "center",
    fontSize: 25,
  },
  googleBtn: {
    flexDirection: "row",
    backgroundColor: "#F8F8F8",
    alignSelf: "center",
    width: "95%",
    height: 40,
    marginTop: 80,
    justifyContent: "center",
    borderRadius: 8,
  },
  googleImg: { width: 20, height: 20, padding: 20 },
  googleText: {
    color: "#14C38E",
    fontSize: 18,
    alignSelf: "center",
    paddingLeft: 15,
  },
  signUpBtn: {
    flexDirection: "row",
    marginTop: 80,
    alignSelf: "center",
  },
  signUp: {
    color: "#14C38E",
    alignItems: "flex-end",
  },
  forgotPage: {
    fontFamily: "sans-serif",
    marginTop: "50%",
  },
  forgotText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderColor: "grey",
    marginTop: 20,
  },
  forgotContent: {
    marginTop: 20,
    marginBottom: 20,
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
  },
  verifyBtn: {
    width: "100%",
    height: 50,
    backgroundColor: "#00FFAB",
    color: "#FFF",
    justifyContent: "center",
  },
  next: {
    flexDirection: "row",
    backgroundColor: "#00FFAB",
    justifyContent: "space-evenly",
    width: "25%",
    height: 40,
    alignSelf: "flex-end",
    margin: 20,
    borderRadius: 8,
  },
  modal: {
    backgroundColor: "pink",
    //flex: "0.1",
    height: "50%",
    marginTop: "auto",
  },
  modalText: {
    alignSelf: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  experience: {
    fontSize: 20,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderWidth: 1,
    backgroundColor: "#FFF",
  },
  name: { fontSize: 22, fontWeight: "bold", padding: 40 },
  star: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: "center",
  },
});
export default styles;
