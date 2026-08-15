"use client"

import { useState, type SubmitEvent } from "react"
import axios from "axios"
import { useRouter, useSearchParams } from "next/navigation"
import axiosInstance from "@/lib/axios"
import { toast } from "sonner"

function ResetPasswordForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    const token = searchParams.get("w")

    if (!token) {
      setError("The password reset link is invalid or has expired.")
      return
    }

    setSubmitting(true)

    try {
      const { data } = await axiosInstance.put(
        `/auth/reset-password?token=${encodeURIComponent(token)}`,
        { password }
      )

      toast(data.message, { position: "top-right" })
      router.replace("/login")
    } catch (err) {
      const message =
        (axios.isAxiosError(err) &&
          (err.response?.data?.message as string)) ||
        "Unable to reset your password. Please try again."

      setError(message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-96 w-80 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl text-gray-900 font-medium">
        Reset your password
      </h2>

      <p className="text-sm text-gray-500/90 mt-3 text-center">
        Create a new password for your account.
      </p>

      <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 mt-8">
        <svg
          width="13"
          height="17"
          viewBox="0 0 13 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
            fill="#6B7280"
          />
        </svg>

        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
          required
        />
      </div>

      <div className="flex items-center mt-4 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
        <svg
          width="13"
          height="17"
          viewBox="0 0 13 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
            fill="#6B7280"
          />
        </svg>

        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
          required
        />
      </div>

      {error && (
        <div className="w-full bg-red-50 border border-red-200 text-red-600 text-xs text-center rounded px-3 py-2 mt-4">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="cursor-pointer mt-8 w-full h-11 rounded-full text-white bg-primary hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Updating password..." : "Update password"}
      </button>
    </form>
  )
}

export default ResetPasswordForm