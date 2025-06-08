import { useFormikContext } from "formik";
import CustomPicker from "../CustomPicker";
import ErrorMessage from "./ErrorMessage";

export default function CustomFormPicker ({items, name, placeholder, width}) {
    const {errors, setFieldValue, touched, values} = useFormikContext();

    return (
        <>
            <CustomPicker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}