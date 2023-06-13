import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./useCustomQuery";
import axios from "axios";
interface AddPreviousTodos {
  previousTodoList: Todo[];
}

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodoData = useMutation<Todo, Error, Todo, AddPreviousTodos>({
    onMutate: (todo: Todo) => {
      const previousTodoList =
        queryClient.getQueryData<Todo[]>(["todos"]) || [];
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        todo,
        ...(todos || []),
      ]);
      return { previousTodoList };
    },

    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onSuccess: (recievedObject, objectSent) => {
      if (recievedObject === objectSent)
        queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
          todos?.map((todo) => (todo === objectSent ? recievedObject : todo))
        );
      if (ref.current) ref.current.value = "";
    },

    onError: (error, objectSent, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(["todos"], context.previousTodoList);
      if (ref.current) ref.current.value = "";
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodoData.error && (
        <div className="alert alert-danger">{addTodoData.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current && ref.current.value)
            addTodoData.mutate({
              id: 0,
              title: ref.current.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary">
            {addTodoData.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
