"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

const ClientHeader = () => {
  const auth = useAuth();
  // it works after

  console.log({ auth });

  return (
    <div className="flex items-center  bg-lime-500  gap-2">
      <Link href="/">Home</Link>
      <Link href="/admin">Adming</Link>
      <Link href="/login">
        {auth?.role === "admin" ? "You are second admin" : "Login"}
      </Link>
    </div>
  );
};

export default ClientHeader;
