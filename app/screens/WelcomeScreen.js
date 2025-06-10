import { StyleSheet, View, TouchableOpacity, ImageBackground, Image, Text } from "react-native";
import CustomText from "../components/CustomText";
import colors from "../config/colors";
import CustomButton from "../components/CustomButton";

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <CustomButton title="login" onPress={()=> navigation.navigate('Login')}/>
        <CustomButton title="register" color="secondary" onPress={()=> navigation.navigate('Register')} />
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
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    color: colors.black,
    paddingVertical: 20,
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
});

export default WelcomeScreen;
