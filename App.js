import { Button, Switch, TextInput, View, Image, Text } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomText from "./app/components/CustomText";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import CustomTextInput from "./app/components/CustomTextInput";
import { useState, useEffect } from "react";
import CustomPicker from "./app/components/CustomPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button title="View Details" onPress={() => navigation.navigate("TweetDetails", { id: 1 })} />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details - {route.params.id}</Text>
  </Screen>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Tweets"
    //     screenOptions={{
    //       headerStyle: { backgroundColor: "indigo" },
    //       headerTintColor: "white",
    //       headerTitleStyle: { fontWeight: "bold" },
    //     }}
    //   >
    //     <Stack.Screen name="Tweets" component={Tweets} />
    //     <Stack.Screen
    //       name="TweetDetails"
    //       component={TweetDetails}
    //       options={({ route }) => ({ title: route.params.id })}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Tweets} />
        <Tab.Screen name="account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
