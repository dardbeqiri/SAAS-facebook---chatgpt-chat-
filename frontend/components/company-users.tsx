import { useEffect, useState } from "react";
import { api, authHeaders } from "../lib/api";
import SidebarLayout from "../components/SidebarLayout";
import InviteUserForm from "../components/InviteUserForm";

export default function CompanyUsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/users", { headers: authHeaders() }).then(res => {
      setUsers(res.data || []);
      setLoading(false);
    });
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Delete user?")) {
      await api.delete(`/users/${id}`, { headers: authHeaders() });
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <SidebarLayout>
      <h1 className="text-2xl font-bold mb-4">Company Users</h1>
      <InviteUserForm companyId={users[0]?.companyId} />
      <table className="w-full border mb-6">
        <thead>
          <tr>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Role</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td className="border px-2 py-1">{u.email}</td>
              <td className="border px-2 py-1">{u.role}</td>
              <td className="border px-2 py-1">
                <button className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <div>Loading...</div>}
    </SidebarLayout>
  );
}
