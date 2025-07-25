import { useState } from "react";
import { api, authHeaders } from "../lib/api";

export default function CompanySettingsForm({ company }: { company: any }) {
  const [name, setName] = useState(company?.name || "");
  const [loading, setLoading] = useState(false);
  const handleSave = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await api.patch(`/companies/${company.id}`, { name }, { headers: authHeaders() });
    setLoading(false);
    alert("Updated!");
  };
  return (
    <form onSubmit={handleSave} className="mb-6">
      <label className="block mb-2 font-bold">Company Name</label>
      <input className="border p-2 mb-2 w-full" value={name} onChange={e => setName(e.target.value)} />
      <button disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">{loading ? "Saving..." : "Save"}</button>
    </form>
  );
}
