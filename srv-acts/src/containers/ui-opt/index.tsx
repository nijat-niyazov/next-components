"use client";

import { Todo } from "@/app/page";
import Todos from "@/components/old/todo-list";
import AddTodo from "@/components/old/todos";
import { useState } from "react";

const UiOPTdWay = ({ todos }: { todos: Todo[] }) => {
  const [optodos, setOptodos] = useState<Todo[]>(todos);

  const addNewTodo = (newTodo: Todo) => setOptodos([newTodo, ...optodos]);

  return (
    <>
      <h1 className="mb-3 text-center text-4xl"> with UI</h1>

      <AddTodo addNewTodo={addNewTodo} />
      <Todos todos={optodos} />
    </>
  );
};

export default UiOPTdWay;
