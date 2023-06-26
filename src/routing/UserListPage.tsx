import { Link, Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const UserListPage = () => {
  const users = [
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" },
  ];
  return (
    <>
      {" "}
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <ul className="list-group col-sm-6 text-center">
            {users.map((user) => (
              <li className="list-group-item" key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
                {/* manipulating string to pass the required path */}
              </li>
            ))}
          </ul>
          <div className="col-sm-6 text-center">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserListPage;
