import * as SecureStore from "expo-secure-store";

const KEY = "authToken";

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(KEY, token);
  } catch (error) {
    console.error("❌ Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(KEY);
  } catch (error) {
    console.error("❌ Error getting the auth token", error);
    return null;
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(KEY);
  } catch (error) {
    console.error("❌ Error removing the auth token", error);
  }
};

export default { storeToken, getToken, removeToken };
