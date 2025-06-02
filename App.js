import { StyleSheet, View, SafeAreaView, ImageBackground, Image, Text } from "react-native";

export default function App() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("./assets/background.jpg")}
      resizeMode="cover"
    >
      <View style={styles.logoContainer}>
        <Image source={require("./assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.logoText}>This is the logo</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.registerBtn}/>
        <View style={styles.loginBtn}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 100,
    left: "50%",
    marginLeft: -50, // Half the width to center it
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  logoText: {
    textAlign: "center",
    marginTop: 20,
  },
  buttons: {
    width: "100%",
    height: 200,
    position: "absolute",
    bottom: 0,
    display: "flex",
  },
  registerBtn: {
    width: '100%',
    height: "50%",
    backgroundColor: "blue",
  },
  loginBtn: {
    width: '100%',
    height: "50%",
    backgroundColor: "red",
  },
});
