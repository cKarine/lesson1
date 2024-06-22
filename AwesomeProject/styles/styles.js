import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    alignItems: "center",
    display: "flex",
  },
  input: {
    height: 40,
    width: 180,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  columnView: {
    flexDirection: "column",
    marginLeft: 10,
  },
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  userContainer: {
    flex: 1,
    padding: 10,
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
  },
  profileView: {
    paddingTop: 50,
    margin: 10,
    alignItems: "center",
  },
  button: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  createButton: {
    backgroundColor: "#55088D",
  },
  randomButton: {
    backgroundColor: "#8852af",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  profileText: {
    fontWeight: "bold",
  },
});
