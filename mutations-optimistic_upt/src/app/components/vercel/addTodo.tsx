"use client";

import {
  experimental_useFormState as useFormState,
  experimental_useFormStatus as useFormStatus,
} from "react-dom";
import { createTodo } from "../../actions/vercel/createTodo";

const initialState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  console.log({ pending });

  return (
    <button
      className="bg-green-500 disabled:opacity-30 hover:bg-green-400 active:bg-green-300 rounded-md w-full p-2 block text-center"
      type="submit"
      // disabled={pending}
      aria-disabled={pending}
    >
      Add todo
    </button>
  );
}

const AddTodo = () => {
  const [state, formAction] = useFormState(createTodo, initialState);

  return (
    <form action={formAction} className="flex flex-col items-center p-2 gap-3">
      <label htmlFor="todo">
        Enter Todo
        <input
          type="text"
          name="todo"
          id="todo"
          className="p-2 rounded-md outline-none text-black w-full  "
          placeholder="Todo"
          autoFocus={true}
          required
        />
      </label>
      <SubmitButton />
    </form>
  );
};

export default AddTodo;
