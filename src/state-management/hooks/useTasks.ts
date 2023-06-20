import { useContext } from "react";
import taskContext from "../contexts/taskContext";

export const useTask = () => {
  return useContext(taskContext);
};
