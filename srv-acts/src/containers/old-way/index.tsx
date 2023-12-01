import { Todo } from "@/app/page";
import Todos from "@/components/old/todo-list";
import AddTodo from "@/components/old/todos";

const OldWay = ({ todos }: { todos: Todo[] }) => {
  return (
    <>
      <h1 className="mb-3 text-center text-4xl">Todo with states</h1>

      <AddTodo todos={todos} />
      <Todos todos={todos} />
    </>
  );
};

export default OldWay;
