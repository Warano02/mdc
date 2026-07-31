"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MessageSquareText, X, Link as LinkIcon, Smile, Send } from "lucide-react";

interface ChatMessage {
  msg: string;
  me: boolean;
}

const STORAGE_KEY = "mi";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [value, setValue] = useState("");
  const [waitingForReply, setWaitingForReply] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed: ChatMessage[] = JSON.parse(stored);
      setMessages(parsed);
      if (parsed.some((m) => m.me)) setWaitingForReply(true);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [open, messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitingForReply) {
      alert("Please wait we answer your question!");
      return;
    }
    const next = [...messages, { msg: value, me: true }];
    setMessages(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setWaitingForReply(true);
    setValue("");
  };

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((p) => !p)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center cursor-pointer transition-transform hover:scale-105 ${open ? "hidden" : ""}`}
      >
        <MessageSquareText size={26} />
      </button>

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[22em] max-w-[calc(100vw-2rem)] h-[32em] max-h-[calc(100vh-3rem)] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-primary flex items-center justify-end px-3 h-10 shrink-0">
            <button type="button" aria-label="Close chat" onClick={() => setOpen(false)} className="text-white cursor-pointer">
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col items-center text-center gap-1 px-4 py-4 border-b border-gray-200 shrink-0">
            <Image src="/img/img_av5tsk26hf_acedca4654646ec003a1bc8420f2b018221208f1b2362981541c3c357631d5d1.png" alt="MDC Canada" width={40} height={40} className="rounded-full" />
            <h3 className="text-primary font-bold text-sm">Inbox</h3>
            <p className="text-xs text-gray-500">We&apos;re currently away. Please leave us a message!</p>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-2 bg-gray-50">
            <div className="flex items-start gap-2 max-w-[85%]">
              <Image src="/img/img_1619623109400.png" alt="" width={28} height={28} className="rounded-full shrink-0" />
              <p className="bg-white rounded-lg rounded-tl-none px-3 py-2 text-xs text-gray-700 shadow-sm">
                Hello there! Need help? Reach out to us right here, and we&apos;ll get back to you as soon as we can!
              </p>
            </div>

            {messages.map((m, i) =>
              m.me ? (
                <p key={i} className="self-end max-w-[85%] bg-primary text-white rounded-lg rounded-tr-none px-3 py-2 text-xs shadow-sm">
                  {m.msg}
                </p>
              ) : (
                <div key={i} className="flex items-start gap-2 max-w-[85%]">
                  <Image src="/img/img_1619623109400.png" alt="" width={28} height={28} className="rounded-full shrink-0" />
                  <p className="bg-white rounded-lg rounded-tl-none px-3 py-2 text-xs text-gray-700 shadow-sm">{m.msg}</p>
                </div>
              )
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-gray-200 px-2 py-2 shrink-0">
            <input
              type="text"
              minLength={5}
              placeholder="Reply here..."
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="flex-1 h-9 border border-gray-300 rounded-full px-3 text-xs outline-none focus:border-primary transition-colors"
            />
            <span className="text-gray-400 shrink-0">
              <LinkIcon size={16} />
            </span>
            <button type="submit" aria-label="Send message" className="text-primary shrink-0 cursor-pointer">
              {value.length > 5 ? <Send size={20} /> : <Smile size={20} />}
            </button>
          </form>
        </div>
      )}
    </>
  );
}