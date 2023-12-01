"use client";

import { Todo } from "@/app/page";
import { addTodo } from "@/libs";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import SubmitButton from "./btn";

const AddTodo = ({ addNewTodo }: { addNewTodo: (act: Todo) => void }) => {
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = {
      id: Math.random(),
      text: value,
      completed: false,
    };

    try {
      if (!value) return alert("Please enter a todo");

      addNewTodo(newTodo);
      await addTodo(newTodo);
    } catch (error) {
      alert(error);
    } finally {
      setValue("");
      router.refresh();
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center justify-center w-full gap-3 flex-col"
    >
      <input
        type="text"
        name="text"
        className="w-full rounded-md p-2 text-black"
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <SubmitButton />
    </form>
  );
};

export default AddTodo;
