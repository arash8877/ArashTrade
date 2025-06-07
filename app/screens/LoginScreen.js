import { StyleSheet, Text, View, Image } from "react-native";
import Screen from "../components/Screen";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { Formik } from "formik";

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log("Form values:", values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <CustomTextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              textContentType="emailAddress"
            />
            <CustomTextInput
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
            />
            <CustomButton title="login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
