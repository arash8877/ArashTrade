import { BackHandler, StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import { CustomForm, CustomFormField, SubmitButton, CustomFormPicker } from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "#fc5c65", icon: "floor-lamp" },
  { label: "Clothing", value: 2, backgroundColor: "#fd9644", icon: "shoe-heel" },
  { label: "Cameras", value: 3, backgroundColor: "#fed330", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "#26de81", icon: "cards" },
  { label: "Sports", value: 5, backgroundColor: "#2bcbba", icon: "basketball" },
  { label: "Movies & Music", value: 6, backgroundColor: "#45aaf2", icon: "headphones" },
  { label: "Books", value: 7, backgroundColor: "#4b7bec", icon: "book-open-variant" },
  { label: "Other", value: 8, backgroundColor: "#a55eea", icon: "dots-horizontal" },
  { label: "Electronics", value: 9, backgroundColor: "#778ca3", icon: "cellphone" },
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
        <CustomFormPicker
          items={categories}
          name="category"
          numberOfColumns={3} //try comment these 2
          PickerItemComponent={CategoryPickerItem} //try comment these 2
          placeholder="Category"
          width="50%"
        />
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
