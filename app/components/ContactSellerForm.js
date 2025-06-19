import React from "react";
import { Alert, Keyboard } from "react-native";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";
import messageApi from "../api/messages";
import { CustomForm, CustomFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

 function ContactSellerForm({ listing }) {


    const handleSubmit = async ({ message }, { resetForm }) => {
        Keyboard.dismiss();
      
        try {
          const result =  messageApi.send(message, listing.id);
      
          if (!result?.ok)                   // response object but not OK
            throw new Error(JSON.stringify(result));
      
          resetForm();
      
          await Notifications.scheduleNotificationAsync({
            content: {
              title: "Awesome!",
              body: "Your message has been sent to the seller.",
            },
            trigger: null,
          });
        } catch (err) {
          console.log("Error sending message:", err);
          Alert.alert("Error", "Could not send the message to the seller.");
        }
      };
      

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