import { create } from "zustand";
import { sendMessage, type MessageStatus } from "@/lib/socket/chat-socket";
export interface ChatUser {
  id: string;
  name: string;
  avatarUrl?: string;
  phone?: string;
  email?: string;
  status: string;
  isOnline: boolean;
  lastSeen?: string;
}
export interface ChatMessage {
  id: string;
  chatId: string;
  senderId: string;
  isMine: boolean;
  text?: string;
  imageUrl?: string;
  sentAt: string;
  status: MessageStatus;
}

interface ChatStore {
  consultant: ChatUser;
  messages: ChatMessage[];
  setMessages: (m: ChatMessage) => void;
  chatId: string;
  handleRetry: (id: string) => void;
}

const mockUser: ChatUser = {
  id: "marouf",
  name: "Fadhil Abouba",
  avatarUrl: "",
  phone: "+237 6 70 00 00 00",
  email: "marouf@example.com",
  status: "En ligne",
  isOnline: true,
  lastSeen: "2026-08-11T14:34:00",
};

const MOCK_MESSAGES: ChatMessage[] = [
  {
    id: "1",
    chatId: "1",
    senderId: "me",
    isMine: true,
    text: "okay oh",
    sentAt: "2026-08-11T13:40:00",
    status: "read",
  },
  {
    id: "2",
    chatId: "1",
    senderId: "marouf",
    isMine: false,
    text: "yo",
    sentAt: "2026-08-11T13:52:00",
    status: "read",
  },
  {
    id: "3",
    chatId: "1",
    senderId: "me",
    isMine: true,
    text: "yess",
    sentAt: "2026-08-11T13:53:00",
    status: "read",
  },
  {
    id: "4",
    chatId: "1",
    senderId: "marouf",
    isMine: false,
    text: "Ça dit quoi boss ?",
    sentAt: "2026-08-11T14:10:00",
    status: "read",
  },
  {
    id: "5",
    chatId: "1",
    senderId: "me",
    isMine: true,
    text: "tql et toi patron?",
    sentAt: "2026-08-11T14:12:00",
    status: "read",
  },
  {
    id: "6",
    chatId: "1",
    senderId: "marouf",
    isMine: false,
    text: "Bresom gars.",
    sentAt: "2026-08-11T14:31:00",
    status: "read",
  },
  {
    id: "7",
    chatId: "1",
    senderId: "me",
    isMine: true,
    text: "ya quoi nhr ?",
    sentAt: "2026-08-11T14:34:00",
    status: "sent",
  },
];

export const useChatStore = create<ChatStore>((set, get) => ({
  chatId: "1",
  consultant: mockUser,
  messages: MOCK_MESSAGES,
  setMessages: (m) => {
    const prev = get().messages;
    set({ messages: [...prev, m] });
  },
  handleRetry: (id) => {
    const message = get().messages.find((message) => message.id === id);

    if (!message || !message.text) return;

    const sentAt = new Date().toISOString();
    set({
      messages: get().messages.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "sending",
              sentAt,
            }
          : item,
      ),
    });

    sendMessage({
      chatId: get().chatId,
      text: message.text,
      clientMessageId: id,
    });
  },
}));
