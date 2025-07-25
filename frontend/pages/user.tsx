import { useEffect, useState } from "react";
import { api, authHeaders } from "../lib/api";
import Layout from "../components/Layout";

export default function UserPage() {
  const [conversations, setConversations] = useState<any[]>([]);
  useEffect(() => {
    api.get("/conversations", { headers: authHeaders() }).then(res => {
      setConversations(res.data || []);
    });
  }, []);
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Your Conversations</h1>
      <ul>
        {conversations.map(c => (
          <li key={c.id}>
            <a className="text-blue-700 underline" href={`/conversations/${c.id}`}>{c.fbPsid}</a>
            {c.isPaused && <span className="text-red-500 ml-2">[Paused]</span>}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
