"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const LANGUAGES = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
]

export default function LanguageSelector() {
    const [current, setCurrent] = useState(LANGUAGES[0])
    const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
                <span className="text-lg leading-none">{current.flag}</span>
                <span>{current.label}</span>
                <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded shadow-md z-50">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            type="button"
                            onClick={() => { setCurrent(lang); setOpen(false) }}
                            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            <span className="text-base">{lang.flag}</span>
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}