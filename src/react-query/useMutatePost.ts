import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Todo, cache_Key_Todos } from "./todo";
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
        queryClient.getQueryData<Todo[]>(cache_Key_Todos) || [];
      queryClient.setQueryData<Todo[]>(cache_Key_Todos, (todos = []) => [
        todo,
        ...todos,
      ]);
      return { previousTodoList };
    },

    mutationFn: (todo: Todo) => mutateApi.postData(todo),
    onSuccess: (recievedObject, objectSent) => {
      if (recievedObject === objectSent)
        queryClient.setQueryData<Todo[]>(cache_Key_Todos, (todos) =>
          todos?.map((todo) => (todo === objectSent ? recievedObject : todo))
        );
      handleClear();
    },

    onError: (error, objectSent, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(
        cache_Key_Todos,
        context.previousTodoList
      );
      handleClear();
    },
  });
};

export default useMutatePost;
