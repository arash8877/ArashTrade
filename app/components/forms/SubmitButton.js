import CustomButton from "../CustomButton";
import { useFormikContext } from "formik";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <CustomButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
