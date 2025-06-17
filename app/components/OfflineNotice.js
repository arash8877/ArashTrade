import React from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "./CustomText";
import colors from "../config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  // in the Simulator app, when the internet connection is back, the component is not re-rendered
  // but in real devices it get rerendered and the component is removed

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <CustomText style={styles.text}>No Internet Connection!</CustomText>
      </View>
    );
  }
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    width: "100%",
    height: 50,
    position: "absolute",
    top: Constants.statusBarHeight,
    zIndex: 1,
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
});
