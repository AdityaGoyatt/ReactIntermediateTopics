import { useReducer, useState } from "react";
import userReduce from "./reducers/userReducer";

const LoginStatus = () => {
  const [user, dispatch] = useReducer(userReduce, "");

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "Logout" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "Login", name: "Aditya Goyat" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
