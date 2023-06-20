import { useContext, useReducer, useState } from "react";
import taskReducer from "./reducers/TaskReducer";
import taskContext from "./contexts/taskContext";
import AuthContext from "./contexts/AuthContext";
import { useTask } from "./hooks/useTasks";
import { useAuth } from "./hooks/useAuth";

export interface Task {
  id: number;
  title: string;
}

const TaskList = () => {
  const { tasks, dispatch } = useTask();
  const { user: currentUser } = useAuth();
  return (
    <>
      {currentUser !== "" ? <p>user: {currentUser}</p> : <></>}
      <button
        onClick={() =>
          dispatch({
            type: "Add",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "Delete", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
