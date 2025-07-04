import React from "react";
import LottieView from "lottie-react-native";

const BasketActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/basket.json")}
      style={{ flex: 1 }}
    />
  );
};

export default BasketActivityIndicator;
