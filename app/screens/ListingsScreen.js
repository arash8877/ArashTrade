import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "Red Jacket for Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 200,
    image: require("../assets/couch.jpg"),
  },
];

const ListingsScreen = ({navigation}) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subtitle={"DKK" + item.price} image={item.image} onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}/>
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
