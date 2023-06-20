import React, { ReactNode, useReducer } from "react";
import taskReducer from "./reducers/TaskReducer";
import { Task } from "./TaskList";
import taskContext from "./contexts/taskContext";
interface Props {
  children: ReactNode;
}
const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, [] as Task[]);
  return (
    <taskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </taskContext.Provider>
  );
};

export default TaskProvider;
