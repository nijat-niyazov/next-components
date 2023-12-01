import OldWay from "@/containers/old-way";
import ServerWay from "@/containers/server";
import UiOPTdWay from "@/containers/ui-opt";
import { getTodos } from "@/libs";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default async function Home() {
  const todos: Todo[] = await getTodos();

  return (
    <div className="flex w-[90%] flex-col gap-4 min-h-[400px]  rounded-md ">
      <div className="flex  items-start justify-between gap-4">
        <div className="bg-gray-500/30  w-full rounded-md p-3">
          <OldWay todos={todos.reverse()} />
        </div>
        <div className="rounded-md p-3 bg-green-500/30  w-full">
          <ServerWay todos={todos} />
        </div>
        <div className="rounded-md p-3 bg-amber-500/30  w-full">
          <UiOPTdWay todos={todos} />
        </div>
      </div>
    </div>
  );
}
