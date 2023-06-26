import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateROutes from "./privateROutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/users",
        element: <UserListPage />,
        children: [{ path: ":id", element: <UserDetailPage /> }],
      },
    ],
  },
]);

export default router;
