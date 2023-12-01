import { editTodo } from "@/libs";
import { revalidatePath } from "next/cache";

export async function editTodoAction(id: number, formdata: FormData) {
  const text = formdata.get("text") as string;

  try {
    if (!text) return;

    const res = await editTodo(id, { text });
    return res;
  } catch (error: any) {
    return { message: "Smething went wrong" };
  } finally {
    // redirect("/");
    revalidatePath("/");
  }
}
