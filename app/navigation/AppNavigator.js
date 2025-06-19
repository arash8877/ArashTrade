import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import * as Notifications from "expo-notifications";
import expoPushTokens from "../api/expoPushTokens";
import navigation from "./rootNavigation";

const Tab = createBottomTabNavigator();

// navigation prop is only available to 'screen' components.  Tab.screen
// AppNavigator is not an screen component, so we cannot use the navigation prop here like: AppNavigator=({navigation})=> {}
// Instead we use the navigation object from rootNavigation.js also add ref to NavigationContainer in App.js
const AppNavigator = () => {
  useEffect(() => {
    getPushNotificationToken();
    Notifications.addNotificationReceivedListener((notification) => {
      navigation.navigate('Account')
    });
  }, []);

  const getPushNotificationToken = async () => {
    try {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        const { status: newStatus } = await Notifications.requestPermissionsAsync();
        if (newStatus !== "granted") return; // user said “nope”
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      expoPushTokens.registerPushToken(token); // add the pushToken to the user-object in backend
    } catch (error) {
      console.log(first("Error getting push token:", error));
    }
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="AccountTab"
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
