"use client";

import { Todo } from "@/app/page";
import { addTodo } from "@/libs";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import SubmitButton from "./btn";

const AddTodo = ({ todos }: { todos: Todo[] }) => {
  const [value, setValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      if (!value) return alert("Please enter a todo");
      await addTodo({
        id: Math.random(),
        text: value,
        completed: false,
      });
    } catch (error) {
      alert(error);
    } finally {
      setValue("");
      router.refresh();
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          backdropFilter: "blur(5px)",
          opacity: isLoading ? 0.5 : 0,
          pointerEvents: isLoading ? "auto" : "none",
        }}
        className="bg-black absolute inset-0  w-full h-full  z-10"
      ></div>

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
        <SubmitButton loading={isLoading} />
      </form>

      {/* <Todos todos={optimisticTodos} /> */}
    </>
  );
};

export default AddTodo;
