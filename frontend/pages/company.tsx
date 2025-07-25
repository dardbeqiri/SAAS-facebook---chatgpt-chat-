import { useEffect, useState } from "react";
import { api, authHeaders } from "../lib/api";
import SidebarLayout from "../components/SidebarLayout";
import CompanySettingsForm from "../components/CompanySettingsForm";
import MessengerConnect from "../components/MessengerConnect";

export default function CompanyPage() {
  const [company, setCompany] = useState<any>(null);
  const [conversations, setConversations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/auth/me", { headers: authHeaders() }).then(res => {
      if (res.data.user.companyId) {
        api.get(`/companies/${res.data.user.companyId}`, { headers: authHeaders() }).then(res2 => {
          setCompany(res2.data);
        });
      }
    });
    api.get("/conversations", { headers: authHeaders() }).then(res => {
      setConversations(res.data || []);
      setLoading(false);
    });
  }, []);

  return (
    <SidebarLayout>
      <h1 className="text-2xl font-bold mb-4">Company Dashboard</h1>
      {company && <CompanySettingsForm company={company} />}
      {company && <MessengerConnect company={company} />}
      <h2 className="text-lg font-bold mb-2">Conversations</h2>
      <ul>
        {conversations.map(c => (
          <li key={c.id}>
            <a className="text-blue-700 underline" href={`/conversations/${c.id}`}>{c.fbPsid}</a>
            {c.isPaused && <span className="text-red-500 ml-2">[Paused]</span>}
          </li>
        ))}
      </ul>
      {loading && <div>Loading...</div>}
    </SidebarLayout>
  );
}
