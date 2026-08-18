import { create } from "zustand";
import { sendMessage, type MessageStatus } from "@/lib/socket/chat-socket";
import { axiosInstance } from "@/lib";
export interface ChatUser {
  _id: string;
  name: string;
  avatar: string;
  email: string;
  status: string;
  isOnline: boolean;
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
  loadMessages: () => void;
  loading: boolean;
  sendMessage: (message: ChatMessage) => void;
}

const mockUser: ChatUser = {
  _id: "",
  name: "Your consultant",
  avatar: "",
  email: "consultant@example.com",
  status: "Online",
  isOnline: true,
};

interface ILoadMessage {
  id: string;
  consultant: ChatUser;
  messages: ChatMessage[];
}

export const useChatStore = create<ChatStore>((set, get) => ({
  chatId: "1",
  loading: false,
  consultant: mockUser,
  messages: [],
  setMessages: (m) => {
    const prev = get().messages;
    set({ messages: [...prev, m] });
  },

  sendMessage: async (message) => {
    try {
      await axiosInstance.post("/chat", { message });
      const prev = get().messages;
      set({
        messages: prev.map((e) =>
          e.id == message.id ? { ...e, status: "sent" } : e,
        ),
      });
    } catch (e) {
      console.log("Error occured while trying to sent message: ", e);
      const prev = get().messages;
      set({
        messages: prev.map((e) =>
          e.id == message.id ? { ...e, status: "failed" } : e,
        ),
      });
    }
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

  loadMessages: async () => {
    try {
      set({ loading: true });
      const { data } = await axiosInstance.get<ILoadMessage>("/chat");
      set({
        consultant: data.consultant,
        chatId: data.id,
        messages: data.messages,
      });
    } catch (e) {
      console.log("Error while trying to load messages ", e);
    } finally {
      set({ loading: false });
    }
  },
}));
