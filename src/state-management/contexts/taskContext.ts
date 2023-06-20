import React from "react";
import { Task } from "../TaskList";
import { action } from "../reducers/TaskReducer";

interface taskContextBox {
  tasks: Task[];
  dispatch: React.Dispatch<action>;
}

const taskContext = React.createContext<taskContextBox>({} as taskContextBox);
export default taskContext;
