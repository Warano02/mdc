"use client"
import axiosInstance from "@/lib/axios"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"


function page() {
    const token = useSearchParams().get("w")
    const router = useRouter()
    const verify = async () => {
        try {
            await axiosInstance.get("/auth/v?token=" + token)
            router.replace("/reset-password/r")
        } catch (e) {
            console.log("Invalid token ", e);

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