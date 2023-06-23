import taskReducer from "./TaskReducer";
import { Task } from "./TaskList";
import taskContext from "./taskContext";
import { ReactNode, useReducer } from "react";
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
