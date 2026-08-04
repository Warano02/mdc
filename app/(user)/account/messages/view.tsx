"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Message, dossier } from "@/mock-data/dossier";

export function MessagesView() {
  const [messages, setMessages] = useState<Message[]>(dossier.messages);
  const [draft, setDraft] = useState("");

  const handleSend = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: `msg-${prev.length + 1}`,
        from: "client",
        author: "You",
        content: draft.trim(),
        date: new Date().toISOString(),
      },
    ]);
    setDraft("");
  };

  return (
    <div className="flex flex-col gap-4 w-full py-6 px-4.5 h-full">
      <div>
        <h1 className="text-lg font-semibold">Messages</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Chat directly with {dossier.agent.name}
        </p>
      </div>

      <div className="flex-1 min-h-0 rounded-2xl border border-border bg-background flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
          {messages.map((msg) => {
            const isAgent = msg.from === "agent";
            return (
              <div
                key={msg.id}
                className={cn("flex items-end gap-2", !isAgent && "flex-row-reverse")}
              >
                <Avatar className="size-7 shrink-0">
                  {isAgent ? (
                    <AvatarImage src={dossier.agent.photo} />
                  ) : null}
                  <AvatarFallback>
                    {msg.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={cn(
                    "max-w-[75%] rounded-2xl px-4 py-2.5",
                    isAgent
                      ? "bg-muted text-foreground rounded-bl-sm"
                      : "bg-primary text-white rounded-br-sm"
                  )}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p
                    className={cn(
                      "text-[10px] mt-1",
                      isAgent ? "text-muted-foreground" : "text-white/70"
                    )}
                  >
                    {format(new Date(msg.date), "d MMM 'at' HH:mm")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-border p-3 flex items-center gap-2">
          <Input
            placeholder="Write your message..."
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            className="h-10"
          />
          <Button size="icon" className="h-10 w-10 shrink-0" onClick={handleSend}>
            <Send className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}