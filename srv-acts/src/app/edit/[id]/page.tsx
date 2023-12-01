import { Todo } from "@/app/page";
import EditTodoForm from "@/components/old/edit-todo";
import { getTodo } from "@/libs";
import { notFound } from "next/navigation";

const EditTodo = async ({ params: { id } }: { params: { id: number } }) => {
  const todo: Todo = await getTodo(id.toString());

  if (!todo?.id) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-2xl">Edit Todo</h1>

      <EditTodoForm id={todo.id} value={todo.text} />
    </div>
  );
};

export default EditTodo;
