// cache-layer

import { AsyncStorage } from "react-native";

const prefix = "cache_";
const expireTime = 1000 * 60 * 60; // 1 hour in milliseconds

//--------------- store data ----------------
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

//--------------- get data ----------------
const isExpired = (item) => {
  const now = Date.now();
  return now - item.timestamp > expireTime;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(`${prefix}${key}`);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(`${prefix}${key}`);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log("Error retrieving data:", error);
    return null;
  }
};


//--------------- export ----------------
export default {
  store,
  get,
};
