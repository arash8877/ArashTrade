import {
  StyleSheet,
  View,
} from "react-native";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>

      <View style={{backgroundColor: 'blue', flex: 2}}/>
      <View style={{backgroundColor: 'gold', flex: 1}}/>
      <View style={{backgroundColor: 'tomato', flex: 2}}/>
     
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
