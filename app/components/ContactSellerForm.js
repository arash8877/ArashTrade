import React from "react";
import { Alert, Keyboard } from "react-native";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";
import messageApi from "../api/messages";
import { CustomForm, CustomFormField, SubmitButton } from "../components/forms";
import Toast from "react-native-toast-message";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

//------------------------------ Main Component ----------------------------
function ContactSellerForm({ listing }) {
  //------- Handle Submit Function ----------
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    console.log("Sending message:", message, "to listing ID:", listing.id);

    try {
      const result = await messageApi.send(message, listing.id);

      if (!result || !result.ok) {
        console.log(
          "API problem →",
          result ? result.problem || result.data || result : "No response"
        );
        throw new Error("API call failed");
      }

      if (!result?.ok) {
        // response object but not OK
        console.log("API problem →", result && (result.problem || result.data || result));
        throw new Error("API call failed");
      }

      resetForm();

      // await Notifications.scheduleNotificationAsync({
      //   content: {
      //     title: "Awesome!",
      //     body: "Your message has been sent to the seller.",
      //   },
      //   trigger: null,
      // });

      Toast.show({
        type: "success",
        text1: "Success",
        text2: "The message is sent successfully 👌",
      });
    } catch (error) {
      console.log("Error sending message:", error);
      Alert.alert("Error", "Could not send the message to the seller.");
    }
  };

  //----------------------------- Render Component ----------------------------
  return (
    <CustomForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <CustomFormField
        name="message"
        placeholder="Message..."
        maxLength={255}
        multiline
        numberOfLines={3}
      />
      <SubmitButton title="Contact Seller" />
    </CustomForm>
  );
}

export default ContactSellerForm;
