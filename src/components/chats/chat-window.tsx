"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import {
    MessageScroller,
    MessageScrollerButton,
    MessageScrollerContent,
    MessageScrollerItem,
    MessageScrollerProvider,
    MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { ChatMessage, useChatStore } from "@/store/chat-store"
import { ChatInput } from "./chat-input"
import { ChatMessageRow } from "./chat-row"
import ChatHeader from "./chat-header"
import { useAuthStore } from "@/store/auth.store"
import { getInitial } from "@/lib"
import { connectSocket } from "@/lib/socket/socket"
import { MessageCircle } from "lucide-react"

function formatTime(iso: string) {
    return new Date(iso).toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
    })
}

function shouldShowSeparator(prev: ChatMessage | undefined, current: ChatMessage) {
    if (!prev) return true
    return (
        new Date(current.sentAt).getTime() -
        new Date(prev.sentAt).getTime() >
        15 * 60 * 1000
    )
}

function TimeSeparator({ time }: { time: string }) {
    return (<div className="flex justify-center py-3"> <span className="text-xs text-muted-foreground">{time}</span> </div>
    )
}

function ChatWindow() {
    const router = useRouter()
    const { user } = useAuthStore()
    const { chatId, setMessages, messages, handleRetry, consultant, loadMessages, sendMessage } = useChatStore()

    const handleSend = (text: string) => {
        const clientMessageId = crypto.randomUUID()
        const sentAt = new Date().toISOString()

        const newMessage: ChatMessage = {
            id: clientMessageId,
            chatId,
            senderId: user._id,
            isMine: true,
            text,
            sentAt,
            status: "sending",
        }

        setMessages(newMessage)

        sendMessage(newMessage)
    }

    useEffect(() => {
        loadMessages()
    }, [])

    return (
        <div className="flex h-full w-full flex-1 flex-col">
            <ChatHeader />

            {
                messages.length == 0 ? (
                    <div className="flex-1 flex justify-center items-center flex-col gap-4">
                        <div className="mb-5 flex size-20 items-center justify-center rounded-full bg-primary/10">
                            <MessageCircle className="size-10 text-primary" />
                        </div>

                        <h1 className="text-xl font-semibold tracking-tight">
                            No Message for now.
                        </h1>

                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            Some preocupation ?  Start chatting with your consultant now.
                        </p>

                    </div>
                ) : (
                    <MessageScrollerProvider
                        autoScroll
                        defaultScrollPosition="end"
                    >
                        <MessageScroller className="flex-1">
                            <MessageScrollerViewport>
                                <MessageScrollerContent className="py-3">
                                    {messages.map((message, index) => (
                                        <MessageScrollerItem
                                            key={message.id}
                                            messageId={message.id}
                                        >
                                            {shouldShowSeparator(
                                                messages[index - 1],
                                                message
                                            ) && (
                                                    <TimeSeparator
                                                        time={formatTime(message.sentAt)}
                                                    />
                                                )}

                                            <ChatMessageRow
                                                message={message}
                                                senderAvatarUrl={consultant.avatar}
                                                senderFallback={getInitial(consultant.name)}
                                                onRetry={handleRetry}
                                            />
                                        </MessageScrollerItem>
                                    ))}
                                </MessageScrollerContent>
                            </MessageScrollerViewport>

                            <MessageScrollerButton />
                        </MessageScroller>
                    </MessageScrollerProvider>
                )
            }

            <ChatInput onSend={handleSend} />
        </div>
    )


}

export default ChatWindow
