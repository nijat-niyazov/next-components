import Todo from "./Todo";

const TodoList = ({
  todos,
}: {
  todos: { title: string; id: number; completed: boolean }[];
}) => {
  return (
    <div className="w-full p-2">
      {todos.reverse().map((todo, i) => (
        <Todo todo={todo} key={i} />
      ))}
    </div>
  );
};

export default TodoList;
