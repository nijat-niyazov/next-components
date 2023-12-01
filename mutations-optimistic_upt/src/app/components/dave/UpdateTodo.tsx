"use client";

import { updateTodo } from "@/app/actions/dave/updateTodo";
import { useRouter } from "next/navigation";
import { experimental_useOptimistic as useOptimistic } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const UpdateTodo = ({ todo }: { todo: Todo }) => {
  const router = useRouter();

  const { pending } = useFormStatus();
  const [optimisticTodo, addOptimisticTodo] = useOptimistic(
    todo,
    (state: Todo, completed: boolean) => {
      return { ...state, completed };
    }
  );

  return (
    <input
      type="checkbox"
      id="completed"
      name="completed"
      className="w-8 h-8 rounded-md outline-none text-black "
      checked={optimisticTodo.completed}
      onChange={async () => {
        addOptimisticTodo(!todo.completed);
        await updateTodo(todo);
        router.refresh();
      }}
      disabled={pending}
    />
  );
};

export default UpdateTodo;
