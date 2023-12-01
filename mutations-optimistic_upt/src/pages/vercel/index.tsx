import AddTodo from "@/app/components/vercel/addTodo";
import DeleteTodo from "@/app/components/vercel/deletetodo";

const HomeVercel = ({
  todos,
}: {
  todos: { title: string; id: number; completed: boolean }[];
}) => {
  return (
    <>
      <AddTodo />

      <ul className="w-full p-2">
        {todos.map((todo, i) => {
          return (
            <li
              className="flex items-center justify-between w-full p-2 bg-amber-500 rounded-md text-black mb-1"
              key={todo.id}
            >
              <span> {todo.title}</span>
              <DeleteTodo todo={todo} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default HomeVercel;
