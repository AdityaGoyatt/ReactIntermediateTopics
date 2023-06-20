import { ReactNode, useReducer } from "react";
import userReducer from "./reducers/userReducer";
import AuthContext from "./contexts/AuthContext";
interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(userReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
