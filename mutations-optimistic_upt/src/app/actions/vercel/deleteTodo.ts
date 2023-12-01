"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

import { z } from "zod";

export const deleteTodo = async (prevStateL: any, formData: FormData) => {
  const schema = z.object({
    todo: z.string().nonempty(),
    id: z.string().nonempty(),
  });

  const data = schema.parse({
    todo: formData.get("todo"),
    id: formData.get("id"),
  });

  console.log(formData, data.id);

  await axios.delete("http://localhost:3500/todos/" + data.id);

  try {
    revalidatePath("/");
    return { message: `Deleted todo with id ${data.id}` };
  } catch (error) {
    console.log(error);
  }
};
