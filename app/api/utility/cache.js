// cache-layer

import { AsyncStorage } from "react-native";

const prefix = "cache_";

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(`${prefix}${key}`, JSON.stringify(item));
  } catch (error) {
    console.log("Error storing data:", error);
  }
};

export default {
  store,
};
