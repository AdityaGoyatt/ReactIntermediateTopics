import { Task } from "./TaskList";
import taskContext from "./taskContext";
import { ReactNode, useReducer } from "react";

interface AddTaskAction {
  type: "Add";
  task: Task;
}

interface DeleteTaskAction {
  type: "Delete";
  taskId: number;
}

export type action = DeleteTaskAction | AddTaskAction;
const taskReducer = (currentTasks: Task[], action: action): Task[] => {
  switch (action.type) {
    case "Add":
      return [...currentTasks, action.task];
    case "Delete":
      return currentTasks.filter((tsk) => tsk.id != action.taskId);
  }
  return currentTasks;
};

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
