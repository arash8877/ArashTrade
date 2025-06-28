import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import CustomText from "./CustomText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItem({
  title,
  subTitle,
  image,
  iconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {iconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.detailsContainer}>
              <CustomText style={styles.title} numberOfLines={1}>
                {title}
              </CustomText>
              {subTitle && (
                <CustomText style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </CustomText>
              )}
            </View>
            <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium} />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
