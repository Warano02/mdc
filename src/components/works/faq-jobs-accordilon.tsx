"use client"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp, LucideIcon } from "lucide-react"
import { useState } from "react"

function Accordilon({ title, content, className, Icon }: { title: string, content: string, className?: string, Icon?: LucideIcon }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={cn("w-125.5  px-4 py-2 border rounded-lg space-y-6 transition-smooth hover:border-black cursor-pointer ", !isOpen && "max-h-max", className)} onClick={() => setIsOpen(prev => !prev)}>
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    {Icon && <Icon size={16} />}
                    <h3 className="font-bold flex-1 text-center ">{title} </h3>
                </div>
                {isOpen ? <ChevronDown /> : <ChevronUp />}
            </div>
            <p className={cn("transition-opacity animate-in whitespace-pre-wrap", !isOpen && "hidden")} >
                {content}
            </p>
        </div>
    )
}

export default Accordilon