import { View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <WelcomeScreen /> */}
      <MaterialCommunityIcons name="email" size={60} color= 'blue'/>
      {/* <ViewImageScreen /> */}
    </View>
  );
}
