"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const deleteTodo = async (id: number) => {
  console.log({ id });

  await axios.delete("http://localhost:3500/todos/" + id);

  revalidatePath("/");
};
