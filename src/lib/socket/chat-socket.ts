import { getSocket } from "@/lib/socket/socket"
import { SOCKET_EVENTS } from "@/lib/socket/events"

export type MessageStatus =
    | "sending"
    | "sent"
    | "delivered"
    | "read"
    | "failed"

export interface SocketMessage {
    id: string
    chatId: string
    senderId: string
    text?: string
    imageUrl?: string
    sentAt: string
}

export interface MessageStatusPayload {
    messageId: string
    chatId: string
    status: MessageStatus
}

export interface SendMessagePayload {
    chatId: string
    text: string
    clientMessageId: string
}

export interface MessageReadPayload {
    messageId: string
    chatId: string
}

export interface MessageTypingPayload {
    chatId: string
    isTyping: boolean
}

export function sendMessage(data: SendMessagePayload) {
    getSocket().emit(SOCKET_EVENTS.MESSAGE_SEND, data)
}

export function subscribeToNewMessages(
    callback: (message: SocketMessage) => void
) {
    const socket = getSocket()

    socket.on(SOCKET_EVENTS.MESSAGE_NEW, callback)

    return () => {
        socket.off(SOCKET_EVENTS.MESSAGE_NEW, callback)
    }
}

export function subscribeToMessageStatus(
    callback: (data: MessageStatusPayload) => void
) {
    const socket = getSocket()

    socket.on(SOCKET_EVENTS.MESSAGE_STATUS, callback)

    return () => {
        socket.off(SOCKET_EVENTS.MESSAGE_STATUS, callback)
    }
}

export function markMessageAsRead(data: MessageReadPayload) {
    getSocket().emit(SOCKET_EVENTS.MESSAGE_READ, data)
}

export function sendTyping(data: MessageTypingPayload) {
    getSocket().emit(SOCKET_EVENTS.MESSAGE_TYPING, data)
}