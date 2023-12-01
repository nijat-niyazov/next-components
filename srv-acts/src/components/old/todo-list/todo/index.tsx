"use client";

import { Todo } from "@/app/page";
import { updateTodo } from "@/libs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const [checked, setChecked] = React.useState(todo.completed);
  const router = useRouter();

  const onChange = async (e: any) => {
    setChecked(!checked);

    await updateTodo(todo.id.toString(), {
      completed: !e.target.checked,
    });
    router.refresh();
  };

  return (
    <li
      className="my-2 text-xl flex items-center justify-between "
      key={todo.id}
    >
      <Link className="flex-1" href={`/edit/${todo.id}`}>
        {todo.text}
      </Link>
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={onChange}
        style={{
          width: "20px",
          height: "20px",
        }}
      />
    </li>
  );
};

export default TodoItem;
