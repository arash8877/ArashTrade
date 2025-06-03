import { View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
      <Card title="Red Jacket for Sale" subtitle="$100" image={require("./app/assets/jacket.jpg")} />
    </View>
  );
}
