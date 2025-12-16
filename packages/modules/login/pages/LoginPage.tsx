"use client";

import { useState } from "react";

export function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (role: string) => {
    setLoading(true);
    try {
      // Set cookies via API route (server-side)
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
      });

      if (res.ok) {
        // Force a full page reload to ensure server sees cookies
        window.location.href = "/";
      } else {
        console.error("Login failed");
        setLoading(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-muted-foreground">
          Choose a role to simulate authentication.
        </p>
      </div>

      <div className="card">
        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground">
            This demo sets cookies <code>auth_token</code> and <code>auth_role</code> for one
            day. In a real app, replace with your auth flow.
          </p>
          <div className="grid gap-2">
            <button
              onClick={() => handleLogin("admin")}
              disabled={loading}
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login as Admin"}
            </button>
            <button
              onClick={() => handleLogin("editor")}
              disabled={loading}
              className="px-4 py-2 rounded-md border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login as Editor"}
            </button>
            <button
              onClick={() => handleLogin("viewer")}
              disabled={loading}
              className="px-4 py-2 rounded-md border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login as Viewer"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

