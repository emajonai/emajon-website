"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function StealthLoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect") || "/";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/stealth-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push(redirect);
      router.refresh();
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
      <label htmlFor="password" className="block text-sm font-medium text-purple-200 mb-2">
        Access Code
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter access code..."
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
        autoFocus
      />
      {error && (
        <p className="mt-2 text-sm text-red-300">
          Invalid access code. Please try again.
        </p>
      )}
      <button
        type="submit"
        disabled={!password || loading}
        className="mt-4 w-full py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-hover disabled:opacity-50 transition-colors"
      >
        {loading ? "Checking..." : "Enter"}
      </button>
    </form>
  );
}

export default function StealthLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-purple-900 to-slate-900">
      <div className="w-full max-w-sm mx-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Emajon</h1>
          <p className="text-purple-300 text-sm">
            We&apos;re building something special. Enter the access code to continue.
          </p>
        </div>

        <Suspense fallback={<div className="text-purple-300 text-center">Loading...</div>}>
          <StealthLoginForm />
        </Suspense>

        <p className="mt-6 text-center text-xs text-purple-400">
          Interested in access?{" "}
          <a href="/blog" className="underline hover:text-purple-200">
            Read our blog
          </a>{" "}
          or reach out to learn more.
        </p>
      </div>
    </div>
  );
}
