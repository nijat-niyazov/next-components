"use client";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="p-2 rounded-md bg-indigo-400 w-full text-2xl"
      style={{
        opacity: pending ? "0.5" : "1",
      }}
      disabled={pending}
      type="submit"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default SubmitButton;
