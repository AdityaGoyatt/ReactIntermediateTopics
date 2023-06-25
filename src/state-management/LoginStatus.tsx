import { useAuth } from "./Users";
import StorageUser from "./Users/storeUser";

const LoginStatus = () => {
  const { name, login, logout } = StorageUser();

  if (name)
    return (
      <>
        <div>
          <span className="mx-2">{name}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("Aditya Goyat")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
