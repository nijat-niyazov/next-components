import { Todo } from "@/app/page";
import TodoItem from "./todo";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <>
      <h1 className="text-center text-2xl">Todos</h1>

      <ul>
        {todos.map((todo: Todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
