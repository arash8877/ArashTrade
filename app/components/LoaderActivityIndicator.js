import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

const LoaderActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default LoaderActivityIndicator;

const styles = StyleSheet.create({
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    opacity: 0.8,
    position: "absolute",
    zIndex: 1,
  },
});
