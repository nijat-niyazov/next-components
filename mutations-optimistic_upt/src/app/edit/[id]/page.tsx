import Todo from "@/app/components/dave/Todo";
import axios from "axios";
export const revalidate = 0;

const EditPage = async ({ params: { id } }: { params: { id: number } }) => {
  const { data: todo } = await axios.get("http://localhost:3500/todos/" + id);
  return <Todo todo={todo} />;
};

export default EditPage;
