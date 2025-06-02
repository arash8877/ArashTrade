import { View, Image, StyleSheet } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 50,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 50,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default ViewImageScreen;
