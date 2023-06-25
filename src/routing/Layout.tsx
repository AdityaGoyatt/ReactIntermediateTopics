import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main"></div>
      <Outlet />
      {/* it is the children component */}
    </>
  );
};

export default Layout;
