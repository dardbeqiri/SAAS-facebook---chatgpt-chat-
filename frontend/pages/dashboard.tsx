import { useEffect } from "react";
import { api, authHeaders } from "../lib/api";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get("/auth/me", { headers: authHeaders() });
        if (res.data?.user) {
          if (res.data.user.role === "superadmin") router.replace("/superadmin");
          else if (res.data.user.role === "company_admin") router.replace("/company");
          else router.replace("/user");
        } else {
          router.replace("/login");
        }
      } catch {
        router.replace("/login");
      }
    }
    fetchUser();
  }, []);

  return <div>Loading...</div>;
}
