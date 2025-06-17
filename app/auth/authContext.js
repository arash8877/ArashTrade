import { createContext, useState, useEffect, useMemo, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import authApi from "../api/auth";
import tokenStorage from "./tokenStorage";

const AuthContext = createContext(null);

// -------------------------- Provider ------------------------------
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  //----- restore token when the app starts ---
  useEffect(() => {
    const restoreUser = async () => {
      try {
        const token = await tokenStorage.getToken();
        if (!token) {
          return;
        } else {
          setUser(jwtDecode(token));
        }
      } catch (error) {
        console.error("Failed to restore token", error);
      } finally {
        setReady(true); // release the app (show splash)
      }
    };
    restoreUser();
  }, []);

  //--- Login: hit API ➜ store token ➜ set user ---
  const login = async (email, password) => {
    const res = await authApi.login(email, password);
    if (res.status !== 200) throw new Error("Bad credentials");

    const token = res.data;
    const decoded = jwtDecode(token);

    await tokenStorage.storeToken(token);
    setUser(decoded);
  };

  //-- Logout: clear state ➜ blow away token ---
  const logout = async () => {
    setUser(null);
    await tokenStorage.removeToken();
  };

  //--- memoize so re‑renders only happen when user object changes ---
  const value = useMemo(() => ({ user, login, logout }), [user]);

  if (!ready) return null;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// -- Convenience hook (optional but pleasant) --------------------
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
