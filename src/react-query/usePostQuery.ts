import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const fetchResults = (userId: number | undefined) =>
  axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
      params: {
        userId,
      },
    })
    .then((res) => res.data);

const usePostQuery = (userId: number | undefined) =>
  useQuery<Post[], Error>({
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryFn: () => fetchResults(userId),
  });

export default usePostQuery;
