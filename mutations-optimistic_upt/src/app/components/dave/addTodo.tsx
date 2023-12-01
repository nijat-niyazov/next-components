"use client";

import { experimental_useOptimistic as useOptimistic, useRef } from "react";
import { createTodo } from "../../actions/dave/createTodo";
import SubmitButton from "./SubmitButton";

const AddTodo = ({
  todos,
}: {
  todos: { title: string; id: number; completed: boolean }[];
}) => {
  const ref = useRef<HTMLFormElement | null>(null);

  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos, // initialstate for optimisticTodos
    (state, newTodo: { title: string; id: number; completed: boolean }) => {
      //  callback function to update optimisticTodos as setState
      return [...state, newTodo];
    }
  );

  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();

          // addOptimisticTodo({
          //   title: formData.get("todo") as string,
          //   id: Math.random(),
          //   completed: false,
          // });

          await createTodo(formData);
        }}
        // action={createTodo}
        className="flex flex-col items-center p-2 gap-3"
      >
        <label htmlFor="todo">
          Enter Todo
          <input
            type="text"
            name="todo"
            id="todo"
            className="p-2 rounded-md outline-none text-black w-full  "
            placeholder="Todo"
            autoFocus
            required
          />
        </label>

        <SubmitButton />
      </form>

      {/* <ul className="w-full p-2">
        {optimisticTodos.map(
          (
            todo: { id: number; title: string; completed: boolean },
            i: number
          ) => (
            <Todo todo={todo} key={i} />
          )
        )}
      </ul> */}
    </>
  );
};

export default AddTodo;
