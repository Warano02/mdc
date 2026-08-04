import type { Metadata } from "next";
import { MessagesView } from "./view";

export const metadata: Metadata = {
  title: "Messages | MDC Canada",
  description:
    "Chat directly with your assigned RCIC agent about your immigration case.",
};

export default function MessagesPage() {
  return <MessagesView />;
}