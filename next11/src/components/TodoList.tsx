import fetchTodos from "@/lib/fetchTodos";
import Todo from "./Todo";

export default async function TodoList() {
  const todos = await fetchTodos();

  const sortedTodos = todos.reverse();

  return sortedTodos.map((todo) => <Todo key={todo.id} {...todo} />);
}
