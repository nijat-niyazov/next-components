import axios from "axios";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function PUT(req: Request, res: Response) {
  const { todo, checked } = await req.json();

  await axios.put(`http://localhost:3500/todos/${todo.id}`, {
    ...todo,
    completed: !checked,
  });

  revalidatePath("/");
  revalidatePath("/edit/[id]");
  return NextResponse.json({ message: "ok", statusbar: 200 });
}
