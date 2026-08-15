"use client"

import { X } from "lucide-react";
import Link from "next/dist/client/link";
import { useState } from "react";
import axiosInstance from "@/lib/axios";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");
  const router = useRouter()
  const handleLogin = async () => {
    if (!username.trim()) { setUsernameError(true); return; }
    setUsernameError(false);
    setLoginError("");
    setSubmitting(true);
    try {
      await axiosInstance.post("/auth/login", { email: username, password });
      router.replace("/account")
    } catch (e: any) {
      // console.log("error in login form "+e)
      setLoginError(e?.response?.data?.message || "Invalid username or password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleLogin() }} className="absolute top-full right-0 mt-2 w-72 bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-sm z-30000 p-4 flex flex-col gap-3">
      <div className="relative">
        <input type="email" placeholder="Email or Username" value={username} onChange={(e) => { setUsername(e.target.value); setUsernameError(false); }} className={`w-full h-10 border rounded px-3 text-sm outline-none ${usernameError ? "border-red-500" : "border-gray-300"} focus:border-primary transition-colors`} required />
        {usernameError && <X size={16} className="absolute right-3 top-3 text-red-500 cursor-pointer" onClick={() => { setUsername(""); setUsernameError(false); }} />}
        {usernameError && <p className="text-red-500 text-xs mt-1">Username is required</p>}
      </div>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full h-10 border border-gray-300 rounded px-3 text-sm outline-none focus:border-primary transition-colors" minLength={4} required />
      <div className="flex justify-end">
        <Link href="/forgot-password" className="text-primary font-bold text-xs hover:text-primary-light">Forgot Password?</Link>
      </div>
      {loginError && <p className="text-red-500 text-xs">{loginError}</p>}
      <button type="submit" disabled={submitting} className="w-full h-10 bg-primary text-white font-bold text-sm rounded border-none cursor-pointer hover:bg-primary-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed">{submitting ? "Logging in..." : "Login"}</button>
    </form>
  )
}

export default LoginForm;