import { Message, MessageAvatar, MessageContent, MessageFooter } from "@/components/ui/message"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { cn } from "@/lib"
import { MoreVertical, RefreshCcw, Reply, Smile, } from "lucide-react"
import { ChatMessage } from "@/store/chat-store"

function formatRelativeTime(iso: string) {
    const diffMin = Math.round((Date.now() - new Date(iso).getTime()) / 60000)
    if (diffMin < 1) return "À l'instant"
    if (diffMin < 60) return `Envoyé il y a ${diffMin} min`

    return `Envoyé il y a ${Math.round(diffMin / 60)} h`
}

export function ChatMessageRow({
    message,
    senderAvatarUrl,
    senderFallback,
    onRetry,
}: {
    message: ChatMessage
    senderAvatarUrl?: string
    senderFallback: string
    onRetry: (id: string) => void
}) {
    const align = message.isMine ? "end" : "start"

    return (
        <Message align={align} className="group px-4 py-1">
            {!message.isMine && (
                <MessageAvatar>
                    <Avatar className="size-7">
                        <AvatarImage src={senderAvatarUrl} />
                        <AvatarFallback className="text-[10px]">
                            {senderFallback}
                        </AvatarFallback>
                    </Avatar>
                </MessageAvatar>
            )}

            <MessageContent className="max-w-[75%] text-white">
                <div
                    className={cn(
                        "flex items-center gap-1.5",
                        message.isMine
                            ? "flex-row-reverse"
                            : "flex-row"
                    )}
                >
                    <Bubble
                        align={align}
                        variant={message.isMine ? "default" : "secondary"}
                        className={cn(
                            message.status === "failed" &&
                            "border border-destructive/60"
                        )}
                    >
                        <BubbleContent>
                            {message.imageUrl ? (
                                <img
                                    src={message.imageUrl}
                                    alt="Image envoyée"
                                    className="max-w-64 rounded-lg"
                                />
                            ) : (
                                message.text
                            )}
                        </BubbleContent>
                    </Bubble>

                    <div className="hidden items-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100 sm:flex">
                        <button
                            type="button"
                            aria-label="Répondre"
                            className="rounded-full p-1.5 hover:bg-secondary"
                        >
                            <Reply className="size-3.5 text-muted-foreground" />
                        </button>

                        <button
                            type="button"
                            aria-label="Réagir"
                            className="rounded-full p-1.5 hover:bg-secondary"
                        >
                            <Smile className="size-3.5 text-muted-foreground" />
                        </button>

                        <button
                            type="button"
                            aria-label="Plus d'options"
                            className="rounded-full p-1.5 hover:bg-secondary"
                        >
                            <MoreVertical className="size-3.5 text-muted-foreground" />
                        </button>
                    </div>
                </div>

                {message.status === "failed" ? (
                    <MessageFooter className="flex items-center gap-1.5 text-xs text-destructive">
                        <span>Échec de l&apos;envoi</span>

                        <button
                            type="button"
                            onClick={() => onRetry(message.id)}
                            className="inline-flex items-center gap-1 font-medium underline-offset-2 hover:underline"
                        >
                            <RefreshCcw className="size-3" />
                            Réessayer
                        </button>
                    </MessageFooter>
                ) : message.isMine && message.status !== "read" ? (
                    <MessageFooter className="text-xs text-muted-foreground">
                        {message.status === "sending"
                            ? "Envoi..."
                            : formatRelativeTime(message.sentAt)}
                    </MessageFooter>
                ) : null}
            </MessageContent>
        </Message>
    )
}