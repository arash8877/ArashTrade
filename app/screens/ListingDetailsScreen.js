import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Image } from "react-native-expo-image-cache";
import CustomText from "../components/CustomText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import ContactSellerForm from "../components/ContactSellerForm";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <CustomText style={styles.title}>{listing.title}</CustomText>
        <CustomText style={styles.price}>{`DKK ${listing.price}`}</CustomText>
        <CustomText style={styles.description}>{listing.description}</CustomText>

        <View style={styles.userContainer}>
          <ListItem
            title="Arash Abdollahi"
            subTitle="5 Items"
            image={require("../assets/arash.png")}
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: colors.medium,
  },
  userContainer: {
    marginTop: 10,
    minHeight: 100,
  },
});
