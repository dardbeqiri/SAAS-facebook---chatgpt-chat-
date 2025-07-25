import { useEffect, useState } from "react";
import { api, authHeaders } from "../lib/api";
import Layout from "../components/Layout";

export default function SuperadminPage() {
  const [companies, setCompanies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/companies", { headers: authHeaders() }).then(res => {
      setCompanies(res.data || []);
      setLoading(false);
    });
  }, []);

  const updateStatus = async (companyId: string, status: string) => {
    await api.patch(`/companies/${companyId}/billing-status`, { billingStatus: status }, { headers: authHeaders() });
    setCompanies(companies.map(c => c.id === companyId ? { ...c, billingStatus: status } : c));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Companies</h1>
      {loading ? <div>Loading...</div> : (
        <table className="w-full border mb-6">
          <thead>
            <tr>
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Billing Status</th>
              <th className="border px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(company => (
              <tr key={company.id}>
                <td className="border px-2 py-1">{company.name}</td>
                <td className="border px-2 py-1">{company.billingStatus}</td>
                <td className="border px-2 py-1">
                  {company.billingStatus !== "active" &&
                    <button className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                      onClick={() => updateStatus(company.id, "active")}>Activate</button>
                  }
                  {company.billingStatus !== "suspended" &&
                    <button className="bg-red-600 text-white px-2 py-1 rounded"
                      onClick={() => updateStatus(company.id, "suspended")}>Suspend</button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Layout>
  );
}
