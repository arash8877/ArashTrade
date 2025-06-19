import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/navigation/AppNavigator";
import { AuthProvider, useAuth } from "./app/auth/authContext";
import { navigationRef } from "./app/navigation/rootNavigation";

//------------------- using splash ------------------
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

//---- Gatekeeper that shows the right navigator based on auth status ----
const RootNavigator = () => {
  const { user } = useAuth();
  return user ? <AppNavigator /> : <AuthNavigator />;
};

//---------- The main content of the app ----------------
const Main = () => {
  const { ready } = useAuth();

  const onReady = useCallback(async () => {
    if (ready) {
      await SplashScreen.hideAsync();
    }
  }, [ready]);
  if (!ready) return <></>;



  return (
    <NavigationContainer theme={navigationTheme} onReady={onReady} ref={navigationRef}>
      <OfflineNotice />
      <RootNavigator />
    </NavigationContainer>
  );
};

//-------------------- App root --------------------
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}
