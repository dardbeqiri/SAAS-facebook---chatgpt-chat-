import { api, authHeaders } from "../lib/api";

export function PauseButton({ conversationId, isPaused, onChange }: {
  conversationId: string,
  isPaused: boolean,
  onChange: (newState: boolean) => void
}) {
  const toggle = async () => {
    await api.patch(`/conversations/${conversationId}/pause`, { isPaused: !isPaused }, { headers: authHeaders() });
    onChange(!isPaused);
  };
  return (
    <button
      className="px-4 py-1 rounded bg-blue-500 text-white"
      onClick={toggle}
    >
      {isPaused ? "Resume AI" : "Pause AI"}
    </button>
  );
}
