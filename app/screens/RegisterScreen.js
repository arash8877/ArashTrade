import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { CustomForm, CustomFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <CustomForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log("Form values:", values)}
        validationSchema={validationSchema}
      >
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
