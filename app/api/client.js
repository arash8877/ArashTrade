import { create } from "apisauce";
import cache from "./utility/cache";
import tokenStorage from "../auth/tokenStorage";
import settings from "../config/settings";

const apiClient = create({
  // baseURL: "http://192.168.50.50:9000/api",
  baseURL: settings.apiUrl,
});

// Add a request transform to include the auth token in headers
apiClient.addAsyncRequestTransform(async (request) => {
  const token = await tokenStorage.getToken();
  if (!token) return;
  request.headers["x-auth-token"] = token;
});

// Add a request interceptor to cache GET requests
const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
