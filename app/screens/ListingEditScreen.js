import * as Yup from "yup";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { CustomForm, CustomFormField, SubmitButton, CustomFormPicker } from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().nullable(false).required("Please select a category").label("Category"),
  images: Yup.array().min(1, "Please select at least one image").label("Images"),
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
  const location = useLocation();

  const handleSubmit = async (listing) => {
    const result = await listingsApi.addListing({ ...listing, location });
    if (!result.ok) {
      console.log("Status:", result.status); // e.g. 400, 500
      console.log("Problem:", result.problem); // 'CLIENT_ERROR', 'SERVER_ERROR', …
      console.log("Payload:", result.data); // backend message
      alert("Could not save the listing ‑ check the log for details.");
      return;
    }

    alert("The listing is saved successfully");
  };

  return (
    <Screen style={styles.container}>
      <CustomForm
        initialValues={{ title: "", price: 0, description: "", category: null, images: [] }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <CustomFormField name="title" maxLength={225} placeholder="Title" />
        <CustomFormField
          keyboardType="numeric"
          maxLength={8}
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
