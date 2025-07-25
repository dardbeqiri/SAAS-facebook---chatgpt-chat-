import { useState } from "react";
import { api } from "../lib/api";
import { setToken } from "../lib/auth";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      if (res.data.token) {
        setToken(res.data.token);
        router.push("/dashboard");
      } else {
        setErr("Invalid credentials.");
      }
    } catch {
      setErr("Invalid credentials.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow max-w-sm w-full" onSubmit={handleLogin}>
        <h1 className="mb-4 text-2xl font-bold">Login</h1>
        <input
          className="w-full mb-3 border p-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="w-full mb-3 border p-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
        {err && <p className="text-red-600 mt-2">{err}</p>}
      </form>
    </div>
  );
}
