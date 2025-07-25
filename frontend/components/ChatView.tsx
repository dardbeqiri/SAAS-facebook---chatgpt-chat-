import React from "react";

export function ChatView({ messages }: { messages: any[] }) {
  return (
    <div className="border rounded p-4 mb-4 bg-white">
      <div className="space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={m.sender === "user" ? "text-left" : "text-right"}>
            <span className="font-bold">{m.sender}</span>: {m.content}
          </div>
        ))}
      </div>
    </div>
  );
}
