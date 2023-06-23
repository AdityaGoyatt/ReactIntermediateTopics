import { useContext } from "react";
import taskContext from "./taskContext";

export const useTask = () => {
  return useContext(taskContext);
};
