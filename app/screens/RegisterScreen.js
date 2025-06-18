import { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { CustomForm, CustomFormField, SubmitButton, ErrorMessage } from "../components/forms";
import * as Yup from "yup";
import { useAuth } from "../auth/authContext";
import users from "../api/users";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const [registerFailed, setRegisterFailed] = useState(false);
  const [error, setError] = useState();
  const { login } = useAuth();

  const handleRegister = async (userInfo) => {
    const result = await users.register(userInfo);

    if (!result.ok) {
      setRegisterFailed(true);
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }
    //-- auto login after register  ---
    try {
      await login(userInfo.email, userInfo.password);
      setRegisterFailed(false);
    } catch (error) {
      setError("Registered! But automatic sign‑in failed — try logging in manually.");
      setRegisterFailed(true);
    }
  };

  return (
    <Screen style={styles.container}>
      <CustomForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleRegister}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={registerFailed} />
        <CustomFormField
          name="name"
          icon="account"
          placeholder="Name"
          autoCapitalize="none"
          autoCorrect={false}
        />
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

        <SubmitButton title="Register" />
      </CustomForm>
    </Screen>
  );
};

export default RegisterScreen;

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
