"use client";

import { Todo } from "@/app/page";
import { useOptimistic } from "react";
import AddTodoForm from "../addtodo";
import TodoList from "../todo-list";

const Todos = ({ todos }: { todos: Todo[] }) => {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: Todo) => [newTodo, ...state]
  );

  return (
    <>
      <h1 className="mb-3 text-center text-4xl">with server actions</h1>
      <AddTodoForm addOptimisticTodo={addOptimisticTodo} />
      <TodoList todos={optimisticTodos} />
    </>
  );
};

export default Todos;
