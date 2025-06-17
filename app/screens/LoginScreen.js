import { useState } from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import { CustomForm, CustomFormField, SubmitButton, ErrorMessage } from "../components/forms";
import * as Yup from "yup";
import authApi from "../api/auth";
import { useAuth } from "../auth/authContext";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

//------------------- Main Component -------------------
const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const { login } = useAuth();

  const handleLogin = async ({ email, password }) => {
    try {
      await login(email, password);
      setLoginFailed(false);
    } catch (error) {
      setLoginFailed(true);
    }
  };

  //------------------- Render Component -------------------
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <CustomForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email or password." visible={loginFailed} />
        <CustomFormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <CustomFormField
          name="password"
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </CustomForm>
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
