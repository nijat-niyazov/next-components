import { Todo } from "@/app/page";
import { updateTodo } from "@/libs";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const [completed, setCompleted] = useState<boolean>(todo.completed);

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setCompleted((prev) => !prev);

    const res = await updateTodo(todo.id.toString(), {
      completed: !completed,
    });

    if (res?.message) {
      setCompleted(false);
      toast.error(res.message);
    } else {
      toast.success("Todo updated successfully");
    }
  };

  return (
    <li
      className="my-2 text-xl flex items-center justify-between "
      key={todo.id}
    >
      <Link className="flex-1" href={`/edit/${todo.id}`}>
        {todo.text}
      </Link>
      <input
        type="checkbox"
        checked={completed}
        onChange={onChange}
        style={{
          width: "20px",
          height: "20px",
        }}
      />
    </li>
  );
};

export default TodoItem;
