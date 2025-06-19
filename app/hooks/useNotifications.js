
import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import expoPushTokens from "../api/expoPushTokens";
import navigation from "../navigation/rootNavigation";


export default useNotifications = () => {
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
}