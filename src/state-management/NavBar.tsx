import { useContext } from "react";
import LoginStatus from "./LoginStatus";
import taskContext from "./contexts/taskContext";

const NavBar = () => {
  const { tasks } = useContext(taskContext);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
