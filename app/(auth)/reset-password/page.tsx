"use client"
import axiosInstance from "@/lib/axios"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"


function page() {
    const searchParams = useSearchParams()
    const token = searchParams.get("w")
    const router = useRouter()

    const verify = async () => {
        try {
            await axiosInstance.get("/auth/v?token=" + token)
            console.log("Request done ")
            router.push("/reset-password/r?" + searchParams.toString())
        } catch (e) {
            console.log("Invalid token ", e);
            toast("Invalid token")
        }
    }

    useEffect(() => {
        if (!token) return router.replace("/login")
        verify()
    }, [])

    return (
        <section className="w-screen h-screen flex items-center justify-center">
            <div className="size-10 border-2 border-dashed border-primary animate-spin rounded-full flex items-center justify-center">
                <span className="size-2 rounded-full bg-primary animate-ping" />
            </div>
        </section>
    )
}

export default page