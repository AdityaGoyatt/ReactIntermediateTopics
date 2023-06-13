import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface postQuery {
  pageSize: number;
}

const fetchResults = (query: postQuery, pageParam: number) =>
  axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _start: (pageParam - 1) * query.pageSize,
        _limit: query.pageSize,
      },
    })
    .then((res) => res.data);

const usePostQuery = (query: postQuery) =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) => fetchResults(query, pageParam),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

export default usePostQuery;
