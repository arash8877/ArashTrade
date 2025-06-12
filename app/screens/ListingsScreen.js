import { useEffect, useState } from "react";
import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
// import LoaderActivityIndicator from "../components/LoaderActivityIndicator";
import BasketActivityIndicator from "../components/BasketActivityIndicator";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";

// const listings = [
//   {
//     id: 1,
//     title: "Red Jacket for Sale",
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 200,
//     image: require("../assets/couch.jpg"),
//   },
// ];

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) {
      return setError(true);
    } else {
      setError(false);
    }

    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <CustomText>Couldn't retrieve the listings</CustomText>
          <CustomButton title="Retry" onPress={loadListings} />
        </>
      )}
      <BasketActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"DKK" + item.price}
            imageUrl={item.images[0]?.url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});
