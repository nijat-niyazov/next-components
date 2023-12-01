import Link from "next/link";

const Hedaer = () => {
  return (
    <div className="flex bg-pink-400 w-1/2 mx-auto items-center justify-between">
      <Link href="/">Home</Link>
      <h1>Todos</h1>
    </div>
  );
};

export default Hedaer;
