import client from "./client";

const login = (email, password) => {
  const res = client.post("/auth", { email, password });
  return res;
};

export default {
  login,
};
