import HomeDave from "@/pages/dave";

export const revalidate = 0;
export default async function Home() {
  const todos = await fetch("http://localhost:3500/todos").then((res) =>
    res.json()
  );

  return (
    <main className="flex items-center justify-center h-screen  ">
      <div className="flex items-center justify-center bg-blue-700 w-1/2 gap-4 flex-col   ">
        <HomeDave todos={todos} />
      </div>
    </main>
  );
}
