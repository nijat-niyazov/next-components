import Link from "next/link";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";

const Todo = ({
  todo,
}: {
  todo: { title: string; id: number; completed: boolean };
}) => (
  <form className="flex items-center justify-between w-full p-2 bg-amber-500 rounded-md text-black mb-1">
    <label>
      <Link href={"/edit/" + todo.id}>{todo.title}</Link>
    </label>

    <div className="flex items-center gap-4">
      <UpdateTodo todo={todo} />
      <DeleteTodo id={todo.id} />
    </div>
  </form>
);

export default Todo;
