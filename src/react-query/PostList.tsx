import axios from "axios";
import { useEffect, useRef, useState } from "react";
import usePostQuery from "./usePostQuery";

const PostList = () => {
  const pageSize = 10;
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetching,
  } = usePostQuery({ pageSize });
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group mb-4">
        {posts?.pages.map((data) =>
          data.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))
        )}
      </ul>

      <button
        onClick={() => fetchNextPage()}
        disabled={isFetching}
        className="btn btn-primary ms-3"
      >
        {isFetching ? "loading..." : "load more"}
      </button>
    </>
  );
};

export default PostList;
