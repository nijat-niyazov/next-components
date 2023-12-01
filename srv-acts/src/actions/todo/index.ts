"use server";

import { addTodo, updateTodo } from "@/libs";
import { revalidateTag } from "next/cache";

export async function addTodoAction(formdata: FormData) {
  const text = formdata.get("text") as string;
  const id = Math.random();
  const completed = false;

  const res = await addTodo({ id, text, completed });

  revalidateTag("todos");

  return res;
}

export const updatetodoAction = async (
  id: string,
  completed: { completed: boolean }
) => {
  if (!id) return;

  const res = await updateTodo(id, completed);

  revalidateTag("todos");

  return res;
};
