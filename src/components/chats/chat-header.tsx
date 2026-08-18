import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Info, Phone, Video } from "lucide-react"
import { useChatStore } from "@/store/chat-store"
import { getInitial } from "@/lib"

export default function ChatHeader() {
    const { consultant } = useChatStore()
    return (
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-3">
                <Avatar className="size-10">
                    <AvatarImage src={consultant.avatarUrl} alt={consultant.name} />
                    <AvatarFallback>{getInitial(consultant.name)}</AvatarFallback>
                </Avatar>

                <div>
                    <p className="text-sm font-semibold leading-tight">
                        {consultant.name}
                    </p>

                    <p className="text-xs text-muted-foreground">
                        Online
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-1 text-primary">
                <button
                    type="button"
                    aria-label="Appeler"
                    className="rounded-full p-2 hover:bg-secondary"
                >
                    <Phone className="size-4.5" />
                </button>

                <button
                    type="button"
                    aria-label="Appel vidéo"
                    className="rounded-full p-2 hover:bg-secondary"
                >
                    <Video className="size-4.5" />
                </button>

                {/* <button
                    type="button"
                    onClick={() => setOpenPanel(!openPanel)}
                    aria-label="Infos de la conversation"
                    className="rounded-full p-2 hover:bg-secondary cursor-pointer"
                >
                    <Info className="size-4.5" />
                </button> */}
            </div>
        </div>
    )
}
