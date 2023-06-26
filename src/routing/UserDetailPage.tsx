import {
  Navigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import useAuth from "./hooks/useAuth";

const UserDetailPage = () => {
  const param = useParams();
  const [searchParams, setSearchparams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  return <p>User</p>;
};

export default UserDetailPage;
