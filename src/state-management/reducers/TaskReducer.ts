import { Task } from "../TaskList";

interface AddTaskAction {
  type: "Add";
  task: Task;
}

interface DeleteTaskAction {
  type: "Delete";
  taskId: number;
}

type action = DeleteTaskAction | AddTaskAction;
const taskReducer = (currentTasks: Task[], action: action): Task[] => {
  switch (action.type) {
    case "Add":
      return [...currentTasks, action.task];
    case "Delete":
      return currentTasks.filter((tsk) => tsk.id != action.taskId);
  }
  return currentTasks;
};

export default taskReducer;
