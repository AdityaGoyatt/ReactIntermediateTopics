import {
  Navigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import useAuth from "./hooks/useAuth";

const UserDetailPage = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  const param = useParams();
  const [searchParams, setSearchparams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  return <p>User</p>;
};

export default UserDetailPage;
