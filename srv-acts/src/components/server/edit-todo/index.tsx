"use client";

import { editTodoAction } from "@/actions/todo/edit-todo";
export const dynamic = "force-dynamic";

const EditTodoForm = ({ id, value }: { id: number; value: string }) => {
  return (
    <form
      action={async (formdata: FormData) => {
        await editTodoAction(id, formdata);
      }}
      className="flex flex-col items-center justify-center gap-3"
    >
      <input
        className="p-2 text-black rounded-md w-full"
        type="text"
        name="text"
        defaultValue={value}
      />
      <button className="w-full p-2 rounded-md bg-green-400" type="submit">
        Edit
      </button>
    </form>
  );
};

export default EditTodoForm;
