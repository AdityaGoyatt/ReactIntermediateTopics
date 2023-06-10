import useCustomQuery from "./useCustomQuery";

const TodoList = () => {
  const { data: todos, error, isLoading } = useCustomQuery();

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>is Loading</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
