import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import CustomTextInput from "../CustomTextInput";
import ErrorMessage from "./ErrorMessage";

const CustomFormField = ({ name, width, ...otherProps }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();

  return (
    <>
      <CustomTextInput
        onChangeText={handleChange("name")}
        onBlur={() => setFieldTouched("name")}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default CustomFormField;

const styles = StyleSheet.create({});
