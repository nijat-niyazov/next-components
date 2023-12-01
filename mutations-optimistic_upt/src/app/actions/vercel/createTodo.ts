"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

import { z } from "zod";

export const createTodo = async (prevStateL: any, formData: FormData) => {
  const schmea = z.object({
    todo: z.string().nonempty(),
  });

  const data = schmea.parse({
    todo: formData.get("todo"),
  });

  await axios.post("http://localhost:3500/todos", {
    title: data.todo,
    completed: false,
  });

  try {
    revalidatePath("/");
    return { message: `Added todo ${data.todo}` };
  } catch (error) {
    console.log(error);
  }
};
