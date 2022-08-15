import { createContext, useContext, useState } from "react";
import Cookies from "universal-cookie";

const cookie = new Cookies();
const AuthContext = createContext(null);

const getAuth = () => {
  if (cookie.get("access_token")) {
    return true;
  } else {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getAuth());

  const login = (token) => {
    setUser(true);
    cookie.set("access_token", token);
  };

  const logout = () => {
    cookie.remove("access_token");
    setUser(false)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Wrapp <App /> component with <AuthContext.Provider>!");
  }

  return context;
};