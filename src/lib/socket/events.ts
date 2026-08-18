export const SOCKET_EVENTS = {
    CONNECT: "connect",
    DISCONNECT: "disconnect",

    MESSAGE_NEW: "message:new",
    MESSAGE_STATUS: "message:status",
    MESSAGE_SEND: "message:send",
    MESSAGE_READ: "message:read",
    MESSAGE_TYPING: "message:typing",

    NOTIFICATION_NEW: "notification:new",

    USER_ONLINE: "user:online",
    USER_OFFLINE: "user:offline",
} as const