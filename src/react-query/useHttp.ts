import axios from "axios";
import { Todo } from "./todo";
import { Post, postQuery } from "./usePostQuery";
``;
const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
class useApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAllData = () => {
    return apiClient.get<T[]>(this.endpoint).then((res) => res.data);
  };

  postData = <T>(data: T) => {
    return apiClient.post<T>(this.endpoint, data).then((res) => res.data);
  };

  getSpecificData = (dependencies: {}) => {
    return apiClient
      .get<T[]>(this.endpoint, dependencies)
      .then((res) => res.data);
  };
}

export default useApiClient;
