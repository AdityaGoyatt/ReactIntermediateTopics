import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "./todo";
import useApiClient from "./useHttp";
import { useDebugValue } from "react";

const fetchTodoList = new useApiClient<Todo>("/todos");

const query = () =>
  useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodoList.getAllData,
  });

export default query;
