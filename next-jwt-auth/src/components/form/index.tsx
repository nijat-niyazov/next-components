"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const { success } = await res.json();

    if (success) {
      const searched = searchParams.get("next");
      router.push(searched ? searched : "/");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 items-center p-10">
      <div>
        <span className="mr-2">Username:</span>
        <input
          className="rounded-md p-2 border-2 outline-none text-black bg-red-500"
          placeholder="info"
          type="text"
          autoFocus
          value={username}
          onChange={handleUsernameChange}
        />
      </div>

      <div>
        <span className="mr-2">Password:</span>
        <input
          className="rounded-md p-2 border-2 outline-none text-black"
          placeholder="info"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
