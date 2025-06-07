import { StyleSheet, Text, View, Image } from "react-native";
import Screen from "../components/Screen";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <CustomTextInput
        icon="email"
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        textContentType="emailAddress"
      />
      <CustomTextInput
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
      />
      <CustomButton title='login' onPress={()=> console.log(email, password)}/>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
