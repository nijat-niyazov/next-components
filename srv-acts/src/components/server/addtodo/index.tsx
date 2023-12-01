import { addTodoAction } from "@/actions/todo";
import { Todo } from "@/app/page";
import { useRef } from "react";
import toast from "react-hot-toast";
import SubmitButton from "../todos/btn";

const AddTodoForm = ({
  addOptimisticTodo,
}: {
  addOptimisticTodo: (action: Todo) => void;
}) => {
  const form = useRef<HTMLFormElement | null>(null);

  const addTodo = async (formdata: FormData) => {
    form.current?.reset();
    const text = formdata.get("text") as string;

    const newTodo = {
      id: Math.random(),
      text,
      completed: false,
    };

    addOptimisticTodo(newTodo);

    const res = await addTodoAction(formdata);

    if (res?.message) {
      toast.error(res.message);
    } else {
      toast.success("Todo added successfully");
    }
  };

  return (
    <form
      ref={form}
      action={addTodo}
      className="flex items-center justify-center w-full gap-3 flex-col"
    >
      <input
        type="text"
        name="text"
        className="w-full rounded-md p-2 text-black"
        autoFocus
      />
      <SubmitButton />
    </form>
  );
};

export default AddTodoForm;
