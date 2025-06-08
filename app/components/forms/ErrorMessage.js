import { StyleSheet, Text, View } from "react-native";
import CustomText from "../CustomText";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <CustomText style={styles.error}>{error}</CustomText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 18,
    marginTop: 5,
  },
});
