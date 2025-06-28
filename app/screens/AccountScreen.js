import { StyleSheet, FlatList, View } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import { useAuth } from "../auth/authContext";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    // targetScreen: "Messages",
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  return (
    <Screen style={styles.screen}>
      {/* <View style={styles.container}> */}
      <ListItem title={user.name} subTitle={user.email} image={require("../assets/arash.png")} />
      {/* </View> */}
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              iconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>

      <ListItem
        title="Log Out"
        iconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={logout}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    backgroundColor: "yellow",
    marginVertical: 20,
  },
  container1: {
    backgroundColor: "yellow",
    marginVertical: -210,
  },
});
