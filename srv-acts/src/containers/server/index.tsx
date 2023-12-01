import { Todo } from "@/app/page";
import Todos from "@/components/server/todos";

const ServerWay = ({ todos }: { todos: Todo[] }) => {
  return <Todos todos={todos} />;
};

export default ServerWay;
