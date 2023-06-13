import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import axios from "axios";
import useMutatePost from "./useMutatePost";

const TodoForm = () => {
  const addTodoData = useMutatePost(() => clearForm());
  const ref = useRef<HTMLInputElement>(null);
  function clearForm() {
    if (ref.current) ref.current.value = "";
  }
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
