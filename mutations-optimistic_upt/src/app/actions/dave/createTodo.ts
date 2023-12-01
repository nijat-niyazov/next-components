"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const createTodo = async (formData: FormData) => {
  const todo = {
    title: formData.get("todo"),
    completed: false,
  };
  try {
    await axios.post("http://localhost:3500/todos", todo);
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/");
};
