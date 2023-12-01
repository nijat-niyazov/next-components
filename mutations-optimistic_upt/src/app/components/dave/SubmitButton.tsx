import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-green-500 disabled:opacity-30 hover:bg-green-400 active:bg-green-300 rounded-md w-full p-2 block text-center"
      type="submit"
      disabled={pending}
    >
      {pending ? "Adding..." : "Add todo"}
    </button>
  );
};

export default SubmitButton;
