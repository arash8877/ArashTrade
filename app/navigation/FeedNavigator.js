import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Listings" component={ListingsScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
