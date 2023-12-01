import TodoList from "@/app/components/dave/TodoList";
import AddTodo from "@/app/components/dave/addTodo";

const HomeDave = ({
  todos,
}: {
  todos: { title: string; id: number; completed: boolean }[];
}) => {
  return (
    <>
      <AddTodo todos={todos} />

      {todos.length > 0 ? (
        <TodoList todos={todos} />
      ) : (
        <h2>No any todos yet</h2>
      )}
    </>
  );
};

export default HomeDave;
