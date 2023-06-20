import React from "react";
import { action } from "../reducers/userReducer";

interface userContextBox {
  user: string;
  dispatch: React.Dispatch<action>;
}

const AuthContext = React.createContext<userContextBox>({} as userContextBox);
export default AuthContext;
