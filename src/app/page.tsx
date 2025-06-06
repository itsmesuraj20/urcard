"use client";

import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle your submission logic here
    alert(`Username submitted: ${username}`);
  };

  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-b from-white to-red-400">
      <form
        onSubmit={handleSubmit}
        className="bg-black text-white p-6 rounded-xl shadow-lg w-80 space-y-4"
      >
        <input
          type="text"
          placeholder="Enter username (without @)"
          value={username}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition"
        >
          X
        </button>
      </form>
    </main>
  );
}