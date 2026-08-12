"use client"

import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"

function CustomScrollbar({ children, size, isContainer = true }: { children: React.ReactNode, size?: number, isContainer?: boolean }) {
    const scrollAreaRef = useRef<HTMLDivElement>(null)

    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)
    const [activeIndex, setActiveIndex] = useState<0 | 1 | 2>(0)

    const updateState = () => {
        const el = scrollAreaRef.current
        if (!el) return

        const { scrollLeft, scrollWidth, clientWidth } = el
        const maxScroll = scrollWidth - clientWidth

        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < maxScroll - 1)

        if (maxScroll <= 0) {
            setActiveIndex(0)
            return
        }

        const progress = scrollLeft / maxScroll

        if (progress < 0.45) setActiveIndex(0)
        else if (progress <= 0.65) setActiveIndex(1)
        else setActiveIndex(2)
    }

    const scroll = (direction: "left" | "right") => {
        if (!scrollAreaRef.current) return
        const w = size || 300
        scrollAreaRef.current.scrollBy({
            left: direction === "left" ? -w : w,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        updateState()
    }, [])

    return (
        <div className={cn("overflow-hidden", isContainer && "container")} >

            <div ref={scrollAreaRef} onScroll={updateState} className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth">
                {children}
            </div>

            <div className="w-full flex justify-between items-center mt-4">
                <button onClick={() => scroll("left")} disabled={!canScrollLeft} className={cn("h-12.5 w-12.5 rounded-full border flex items-center justify-center transition", canScrollLeft ? "border-gray-400 text-gray-700 cursor-pointer" : "border-gray-200 text-gray-300 cursor-not-allowed")}>
                    <ChevronLeft />
                </button>

                <div className="flex items-center gap-1">
                    {[0, 1, 2].map((i) => (
                        <span key={i} className={cn("h-2 w-2 rounded-full transition-all", activeIndex === i ? "w-6 bg-gray-900" : "bg-gray-300")} />
                    ))}
                </div>

                <button onClick={() => scroll("right")} disabled={!canScrollRight} className={cn("h-12.5 w-12.5 rounded-full border flex items-center justify-center transition", canScrollRight ? "border-gray-400 text-gray-700 cursor-pointer" : "border-gray-200 text-gray-300 cursor-not-allowed")}>
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    )
}

export default CustomScrollbar