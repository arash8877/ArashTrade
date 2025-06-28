// This file is used to manage different settings for development, staging, and production environments in an Expo app.

import Constants from "expo-constants";
import * as Updates from "expo-updates";

const settings = {
  dev: {
    apiUrl: "http://192.168.50.50:9000/api",
  },
  staging: {
    apiUrl: "https://staging.example.com/api",
  },
  prod: {
    apiUrl: "https://api.example.com",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;

  // Prefer Updates.channel from EAS Build
  const channel = Updates.channel;

  // Fallback to env injected in app.config.js if needed
  const envFromExtra = Constants.expoConfig?.extra?.env;

  const env = channel || envFromExtra || "prod";

  return settings[env] || settings.prod;
};

export default getCurrentSettings();

// Then in the app/api/client file, I replaced
// baseURL: "http://192.168.50.50:9000/api", to
// baseURL: settings.apiUrl,
