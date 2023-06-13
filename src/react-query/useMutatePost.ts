import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Todo } from "./todo";
import useApiClient from "./useHttp";

interface AddPreviousTodos {
  previousTodoList: Todo[];
}

const mutateApi = new useApiClient<Todo>("/todos");

const useMutatePost = (handleClear: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddPreviousTodos>({
    onMutate: (todo: Todo) => {
      const previousTodoList =
        queryClient.getQueryData<Todo[]>(["todos"]) || [];
      queryClient.setQueryData<Todo[]>(["todos"], (todos = []) => [
        todo,
        ...todos,
      ]);
      return { previousTodoList };
    },

    mutationFn: (todo: Todo) => mutateApi.postData(todo),
    onSuccess: (recievedObject, objectSent) => {
      if (recievedObject === objectSent)
        queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
          todos?.map((todo) => (todo === objectSent ? recievedObject : todo))
        );
      handleClear();
    },

    onError: (error, objectSent, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(["todos"], context.previousTodoList);
      handleClear();
    },
  });
};

export default useMutatePost;
