import { StyleSheet, Text, View, Image } from "react-native";
import Screen from "../components/Screen";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomText from "../components/CustomText";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log("Form values:", values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <CustomTextInput
              icon="email"
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <ErrorMessage error={errors.email} visible={touched.email}/>
            <CustomTextInput
              icon="lock"
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
            />
            <ErrorMessage error={errors.password} visible={touched.password}/>
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
