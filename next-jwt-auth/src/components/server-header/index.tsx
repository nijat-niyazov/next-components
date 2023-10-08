import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

const Header = async () => {
  const user = await useAuth.fromServer();

  return (
    <div className="flex items-center  gap-2">
      <Link href="/">Home</Link>
      <Link href="/admin">Adming</Link>
      <Link href="/login">
        {user?.role === "admin" ? "You are main admin" : "Login"}
      </Link>
    </div>
  );
};

export default Header;
