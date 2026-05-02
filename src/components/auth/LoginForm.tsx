"use client"

import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff, LoaderCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
        const formData = new FormData(e.currentTarget)
        console.log(Object.fromEntries(formData))
        setTimeout(() => setIsLoading(false), 1500)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex gap-3">
                <Input
                    name="email"
                    type="text"
                    autoComplete="email"
                    required
                    placeholder="Email or Username here..."
                    className="h-12 flex-1 border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-primary text-sm placeholder:text-gray-400"
                />
                <div className="relative flex-1">
                    <Input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        placeholder="Password here..."
                        className="h-12 w-full border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-primary text-sm placeholder:text-gray-400 pr-10"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember" name="remember" className="rounded-sm border-gray-400" />
                <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer font-normal">
                    Keep me logged in
                </Label>
            </div>
            <Separator className="bg-gray-200" />
            <div className="flex items-center justify-end gap-2">
                <Button
                    type="button"
                    variant="ghost"
                    asChild
                    className="text-primary font-semibold tracking-widest text-xs uppercase hover:bg-transparent hover:text-primary/80"
                >
                    <Link href="/reset-password">Recover Password</Link>
                </Button>
                <Button
                    type="submit"
                    disabled={isLoading}
                    className="border border-primary bg-transparent text-primary hover:bg-primary hover:text-white font-semibold tracking-widest text-xs uppercase rounded-none px-6 h-11 transition-colors min-w-[200px]"
                >
                    {isLoading ? <LoaderCircle size={16} className="animate-spin" /> : "Log Into Dashboard"}
                </Button>
            </div>
        </form>
    )
}