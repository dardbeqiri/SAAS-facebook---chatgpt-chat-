import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api, authHeaders } from "../../lib/api";
import { PauseButton } from "../../components/PauseButton";
import { ChatView } from "../../components/ChatView";
import Layout from "../../components/Layout";

export default function ConversationView() {
  const router = useRouter();
  const { id } = router.query;
  const [conversation, setConversation] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      api.get(`/conversations/${id}`, { headers: authHeaders() }).then(res => {
        setConversation(res.data);
        setLoading(false);
      });
    }
  }, [id]);

  const handlePauseChange = (newIsPaused: boolean) => {
    setConversation({ ...conversation, isPaused: newIsPaused });
  };

  if (loading) return <Layout><div>Loading...</div></Layout>;
  if (!conversation) return <Layout><div>Not found.</div></Layout>;

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-2">Conversation</h1>
      <div className="mb-2">fbPsid: {conversation.fbPsid}</div>
      <PauseButton conversationId={conversation.id} isPaused={conversation.isPaused} onChange={handlePauseChange} />
      <ChatView messages={conversation.messages} />
    </Layout>
  );
}
