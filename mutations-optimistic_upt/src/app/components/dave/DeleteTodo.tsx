import { deleteTodo } from "@/app/actions/dave/deleteTodo";

const DeleteTodo = ({ id }: { id: number }) => {
  return (
    <button
      formAction={async () => {
        "use server";
        await deleteTodo(id);
      }}
      className="bg-red-500 disabled:opacity-30 hover:bg-red-400 active:bg-red-300 rounded-md  p-2 block text-center text-white"
      type="submit"
    >
      🚮
    </button>
  );
};

export default DeleteTodo;
