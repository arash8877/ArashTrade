import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../components/CustomText";

export default UploadScreen = ({ progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <CustomText>{progress * 100}%</CustomText>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
