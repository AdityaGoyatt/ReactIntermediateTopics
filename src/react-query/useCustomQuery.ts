import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const fetchTodoList = () =>
  axios
    .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.data);

const query = () =>
  useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodoList,
  });

export default query;
