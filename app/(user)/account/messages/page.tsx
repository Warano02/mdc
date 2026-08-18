import type { Metadata } from "next";
import ChatWindow from "@/components/chats/chat-window";

export const metadata: Metadata = {
  title: "Messages | MDC Canada",
  description:
    "Chat directly with your assigned RCIC agent about your immigration case.",
};

export default function MessagesPage() {
  return <ChatWindow/>;
}