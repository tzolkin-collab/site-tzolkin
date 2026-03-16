const API_URL = process.env.NEXT_PUBLIC_CHATBOT_API_URL || 'http://localhost:3001';

export interface ChatApiResponse {
  sessionId: string;
  reply: string;
  serviceCards: Array<{ slug: string; reason: string }>;
  leadData: Record<string, string> | null;
}

export interface SessionData {
  session: {
    id: string;
    createdAt: string;
    leadData?: Record<string, string>;
  };
  messages: Array<{ role: string; content: string }>;
}

export async function sendMessage(sessionId: string | null, message: string): Promise<ChatApiResponse> {
  const res = await fetch(`${API_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId, message }),
  });

  if (!res.ok) {
    throw new Error('Erro ao enviar mensagem');
  }

  return res.json();
}

export async function getSession(sessionId: string): Promise<SessionData> {
  const res = await fetch(`${API_URL}/api/session/${sessionId}`);

  if (!res.ok) {
    throw new Error('Sessão não encontrada');
  }

  return res.json();
}

export async function saveLead(data: {
  sessionId: string;
  name?: string;
  email?: string;
  whatsapp?: string;
  company?: string;
  service?: string;
}): Promise<void> {
  await fetch(`${API_URL}/api/lead`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}
