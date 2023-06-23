import { ReactNode, useReducer } from "react";

import AuthContext from "./AuthContext";

interface actionLogin {
  type: "Login";
  name: string;
}
interface actionLogout {
  type: "Logout";
}

export type action = actionLogin | actionLogout;

const AuthReducer = (userName: string, action: action): string => {
  if (action.type === "Login") return action.name;
  if (action.type === "Logout") return "";
  return userName;
};

interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(AuthReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
