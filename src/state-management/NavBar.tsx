import useCounterStore from "./Counter/store";
import LoginStatus from "./LoginStatus";
import { useTask } from "./Tasks";

const NavBar = () => {
  const counter = useCounterStore((s) => s.counter);
  console.log("Nav bar rendered");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
