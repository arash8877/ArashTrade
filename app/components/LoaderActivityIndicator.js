import React from "react";
import LottieView from "lottie-react-native";

const LoaderActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
      style={{ flex: 1 }}
    />
  );
};

export default LoaderActivityIndicator;
