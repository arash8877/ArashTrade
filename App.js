import { StyleSheet, View } from "react-native";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  return (
    <View style={{ backgroundColor: "white", flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ backgroundColor: "blue", width: 100, height: 300, alignSelf: 'flex-end' }} />
      <View style={{ backgroundColor: "gold", width: 100, height: 200 }} />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
