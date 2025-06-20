import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Er varen stadig til salg",
    description: "Hej! Jeg er interesseret – er kameraet stadig tilgængeligt?",
    image: require("../assets/arash.png"),
  },
  {
    id: 2,
    title: "Bytter du",
    description: "Hej, vil du bytte mod noget andet elektronik?",
    image: require("../assets/arash.png"),
  },
  {
    id: 3,
    title: "Kan du sende den",
    description: "Er det muligt at få den sendt med posten?",
    image: require("../assets/arash.png"),
  },
];

//--------------------------- Main function ---------------------------
export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from the initialMessages array
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  // --------------------------- Render function -----------------------
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected:", item)}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
