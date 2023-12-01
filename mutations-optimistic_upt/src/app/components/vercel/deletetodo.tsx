"use client";

import {
  experimental_useFormState as useFormState,
  experimental_useFormStatus as useFormStatus,
} from "react-dom";
import { deleteTodo } from "../../actions/vercel/deleteTodo";

const initialState = {
  message: null,
};

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-red-500 disabled:opacity-30 hover:bg-red-400 active:bg-red-300 rounded-md w-full p-2 block text-center"
      type="submit"
      // disabled={pending}
      aria-disabled={pending}
    >
      🚮
    </button>
  );
}

const DeleteTodo = ({
  todo,
}: {
  todo: { id: number; title: string; completed: boolean };
}) => {
  const [state, formAction] = useFormState(deleteTodo, initialState);

  console.log({ state, todo });

  return (
    <form action={formAction} className="flex flex-col items-center p-2 gap-3">
      <input type="hidden" name="todo" value={todo.title} />
      <input type="hidden" name="id" id={`${todo.id}`} />
      <DeleteButton />
      <p role="status">{state?.message} </p>
    </form>
  );
};

export default DeleteTodo;
