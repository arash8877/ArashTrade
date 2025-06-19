import client from "./client";

const registerPushToken = (pushToken) => client.post("/expoPushTokens", { token: pushToken });


export default {
    registerPushToken,
}