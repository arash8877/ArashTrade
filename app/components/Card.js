import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";
import CustomText from "./CustomText";

export default function Card({ title, subtitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image uri={imageUrl} preview={{ uri: thumbnailUrl }} tint="light" style={styles.image} />
        <View style={styles.detailsContainer}>
          <CustomText style={styles.title}>{title}</CustomText>
          <CustomText style={styles.subTitle}>{subtitle}</CustomText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
