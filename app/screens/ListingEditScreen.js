import { StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import { CustomForm, CustomFormField, SubmitButton, CustomFormPicker } from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <CustomForm
        initialValues={{ title: "", price: "", description: "", category: null }}
        onSubmit={(values) => console.log("Form values:", values)}
        validationSchema={validationSchema}
      >
        <CustomFormField maxLength={225} name="title" placeholder="Title" />
        <CustomFormField
          keyboardType="numeric"
          maxLength={8} //10000.99
          name="price"
          placeholder="Price"
          width={120}
        />
        <CustomFormPicker items={categories} name="category" placeholder="Category" width='50%'/>
        <CustomFormField
          maxLength={255}
          name="description"
          numberOfLines={3}
          multiline
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </CustomForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
