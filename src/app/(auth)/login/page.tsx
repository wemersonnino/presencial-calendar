"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="bg-indigo-600 text-white p-3 rounded"
      >
        Login com Google
      </button>
    </div>
  );
}

