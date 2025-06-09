import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ImageInput = ({ imageUri }) => {
  return (
    <View style={styles.container}>
      {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />}
    </View>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    width: 100,
  },
});
