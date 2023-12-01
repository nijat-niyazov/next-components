"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const updateTodo = async (todo: {
  id: number;
  title: string;
  completed: boolean;
}) => {
  const updatedTodo = {
    ...todo,
    completed: !todo.completed,
  };

  await axios.put("http://localhost:3500/todos/" + todo.id, updatedTodo);

  revalidatePath("/");
};
