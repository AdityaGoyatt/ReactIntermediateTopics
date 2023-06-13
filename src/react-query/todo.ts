export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export const cache_Key_Todos = ["todos"];
