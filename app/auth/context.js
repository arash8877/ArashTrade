import { createContext, useState, useMemo, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import authApi from "../api/auth";

const AuthContext = createContext(null);

// --------------------- Provider --------------------------
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const res = await authApi.login(email, password);
    if (res.status !== 200) throw new Error("Bad credentials");

    const decoded = jwtDecode(res.data);
    setUser(decoded);
    // TODO: save token with SecureStore or AsyncStorage if you want persistence
  };

  const logout = () => {
    setUser(null);
    // TODO: delete token from storage if you persisted it
  };

  // memoize so re‑renders only happen when user object changes
  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// -- Convenience hook (optional but pleasant) --------------------
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
