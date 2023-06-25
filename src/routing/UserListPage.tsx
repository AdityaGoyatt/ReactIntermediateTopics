import { Link, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const UserListPage = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  const users = [
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" },
  ];
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
          {/* manipulating string to pass the required path */}
        </li>
      ))}
    </ul>
  );
};

export default UserListPage;
