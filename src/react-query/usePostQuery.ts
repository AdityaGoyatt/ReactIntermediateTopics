import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
const fetchPost = () =>
  axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);

const usePostQuery = () =>
  useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPost,
  });

export default usePostQuery;
