import { useState } from "react";
import { api, authHeaders } from "../lib/api";

export default function InviteUserForm({ companyId }: { companyId: string }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInvite = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/users", {
        email,
        password: Math.random().toString(36).slice(2), // random password
        role: "user",
        companyId
      }, { headers: authHeaders() });
      setMessage("User invited!");
      setEmail("");
    } catch (err: any) {
      setMessage("Error: " + (err?.response?.data?.error || "Failed to invite user"));
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleInvite} className="mb-6 bg-white p-4 rounded shadow">
      <label className="block mb-2 font-bold">Invite new user (email)</label>
      <input className="border p-2 mb-2 w-full" value={email} onChange={e => setEmail(e.target.value)} type="email" required />
      <button disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">{loading ? "Inviting..." : "Invite"}</button>
      {message && <div className="mt-2">{message}</div>}
    </form>
  );
}
