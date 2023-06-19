import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Todo, cache_Key_Todos } from "./todo";
import useApiClient from "./useHttp";
import { useDebugValue } from "react";

const fetchTodoList = new useApiClient<Todo>("/todos");

const query = () =>
  useQuery<Todo[], Error>({
    queryKey: cache_Key_Todos,
    queryFn: fetchTodoList.getAllData,
  });

export default query;
