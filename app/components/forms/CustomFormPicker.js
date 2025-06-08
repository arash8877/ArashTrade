import { useFormikContext } from "formik";
import CustomPicker from "../CustomPicker";
import ErrorMessage from "./ErrorMessage";

export default function CustomFormPicker ({items, name, numberOfColumns, PickerItemComponent, placeholder, width}) {
    const {errors, setFieldValue, touched, values} = useFormikContext();

    return (
        <>
            <CustomPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}