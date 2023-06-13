import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import useApiClient from "./useHttp";
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
const dependentPostApi = new useApiClient<Post>("/posts");

export interface postQuery {
  pageSize: number;
}

const usePostQuery = (query: postQuery) =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) =>
      dependentPostApi.getSpecificData({
        _start: (pageParam - 1) * query.pageSize,
        _limit: query.pageSize,
      }),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

export default usePostQuery;
