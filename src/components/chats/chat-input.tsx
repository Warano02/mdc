"use client"

import { ImageIcon, Mic, Send, Smile, Sticker, ThumbsUp } from "lucide-react"
import { useState } from "react"

export function ChatInput({ onSend }: { onSend: (text: string) => void }) {
    const [value, setValue] = useState("")

    const handleSend = () => {
        const trimmed = value.trim()

        if (!trimmed) return

        onSend(trimmed)
        setValue("")
    }

    return (
        <div className="flex items-center gap-1 border-t border-border px-3 py-2.5 text-primary">
            <button
                type="button"
                aria-label="Message vocal"
                className="rounded-full p-2 hover:bg-secondary"
            >
                <Mic className="size-[18px]" />
            </button>

            <button
                type="button"
                aria-label="Envoyer une image"
                className="rounded-full p-2 hover:bg-secondary"
            >
                <ImageIcon className="size-[18px]" />
            </button>

            <button
                type="button"
                aria-label="Envoyer un sticker"
                className="rounded-full p-2 hover:bg-secondary"
            >
                <Sticker className="size-[18px]" />
            </button>

            <button
                type="button"
                aria-label="Envoyer un GIF"
                className="rounded-full p-2 text-xs font-bold hover:bg-secondary"
            >
                GIF
            </button>

            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Aa"
                className="h-9 flex-1 rounded-full bg-secondary px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />

            <button
                type="button"
                aria-label="Emoji"
                className="rounded-full p-2 hover:bg-secondary"
            >
                <Smile className="size-[18px]" />
            </button>

            {value.trim() ? (
                <button
                    type="button"
                    onClick={handleSend}
                    aria-label="Envoyer"
                    className="rounded-full bg-primary p-2 text-white hover:bg-primary/90"
                >
                    <Send className="size-[18px]" />
                </button>
            ) : (
                <button
                    type="button"
                    aria-label="Envoyer un like"
                    className="rounded-full p-2 hover:bg-secondary"
                >
                    <ThumbsUp className="size-[18px]" />
                </button>
            )}
        </div>
    )
}
