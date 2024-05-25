import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  containerTitle: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: "#081225",
  },
  inputDesc: {
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
    width: 270,
    height: 50,
    marginTop: 5,
    borderColor: "#BCBCBC",
  },
  formContainer: {
    width: "100%",
    gap: 20,
    alignItems: "center",
    marginTop: 20,
  },
  labelStyle: {
    fontSize: 20,
  },
  containerButtons: {
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 270,
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  btnText: {
    fontSize: 20,
  },
});
