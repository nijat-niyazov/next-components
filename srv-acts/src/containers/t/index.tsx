"use client";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Here is your toast.");

export const Notif = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};
