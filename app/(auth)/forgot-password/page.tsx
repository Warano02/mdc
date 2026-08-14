"use client";

import { useState, type SubmitEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axios";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPassWord() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) return setError("Invalid Email Adress !")

    setSubmitting(true);
    setError("");
    
    try {
      await axiosInstance.patch("/auth/forgot-password", { email });
      router.replace("/forgot-password/sent");
    } catch (err) {
      const message =
        (axios.isAxiosError(err) && (err.response?.data?.message as string)) ||
        "Invalid Credentials !";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen w-full">
      <div className="w-full flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className="md:w-96 w-80 flex flex-col items-center justify-center">
          <div className="my-10">
            <h2 className="text-4xl text-gray-900 font-medium">Get Recovery Link</h2>
            <p className="text-sm text-gray-500/90 mt-3">Welcome back! Please sign in to continue</p>

          </div>
          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
            </svg>
            <input type="email" placeholder="Email id" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
          </div>

          {error && (
            <div className="w-full bg-red-50 border border-red-200 text-red-600 text-xs text-center rounded px-3 py-2 mt-4">
              {error}
            </div>
          )}

          <button type="submit" disabled={submitting} className="cursor-pointer mt-4 w-full h-11 rounded-full text-white bg-primary hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed">
            {submitting ? "Sending Mail..." : "Sent Recovery Link"}
          </button>
          <p className="text-gray-500/90 text-sm mt-4">You Remember it? <Link className="text-primary hover:underline" href="/login">Login</Link></p>
        </form>
      </div>

      <div className="w-full hidden sm:inline-block relative">
        <Image fill className="object-cover" src="/img/forgot-password.png" alt="rightSideImage" />
      </div>
    </div>
  );
}