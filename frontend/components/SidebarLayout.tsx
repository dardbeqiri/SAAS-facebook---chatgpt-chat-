import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { clearToken } from "../lib/auth";

const nav = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/company-users", label: "Users" },
  { href: "/company", label: "Company Settings" },
  { href: "/user", label: "My Conversations" },
];

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // You can fetch user/company from backend or context for production
  const user = { name: "John Doe", avatar: "/avatar.png", company: "Demo Company" };

  function logout() {
    clearToken();
    router.push("/login");
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="flex items-center gap-3 p-6">
          <img src="/logo.png" alt="logo" className="h-8 w-8" />
          <span className="font-bold text-lg">Messenger ChatGPT SaaS</span>
        </div>
        <div className="p-6 flex flex-col items-center">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-16 h-16 rounded-full border-4 border-white mb-2"
          />
          <div className="font-bold">{user.name}</div>
          <div className="text-sm">{user.company}</div>
        </div>
        <nav className="flex-1 px-4">
          <ul>
            {nav.map(link => (
              <li key={link.href}>
                <Link href={link.href}>
                  <a
                    className={`block py-2 px-3 rounded hover:bg-blue-700 transition ${
                      router.pathname === link.href ? "bg-blue-700" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={logout}
          className="m-4 py-2 px-4 bg-red-500 hover:bg-red-600 rounded text-white"
        >
          Logout
        </button>
      </aside>
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
