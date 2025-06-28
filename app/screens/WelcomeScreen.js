import { StyleSheet, View, TouchableOpacity, ImageBackground, Image, Text } from "react-native";
import colors from "../config/colors";
import CustomButton from "../components/CustomButton";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>Sell Your Stuff and Help the Planet</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <CustomButton title="login" onPress={() => navigation.navigate(routes.LOGIN)} />
        <CustomButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
  },
  tagline: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.black,
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
});

export default WelcomeScreen;
