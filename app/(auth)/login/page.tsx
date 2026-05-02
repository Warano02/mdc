import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import LoginForm from "@/components/auth/LoginForm"
import LanguageSelector from "@/components/auth/Languageselector"

export const metadata: Metadata = {
  title: "Connexion | MDC Canada",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block w-[340px] shrink-0 relative">
        <Image src="/img/bg/mdc_login.jpg" alt="MDC Canada" fill className="object-cover" priority />
      </div>
      <div className="flex-1 flex flex-col">
        <header className="flex justify-end px-8 py-4 border-b border-gray-100">
          <LanguageSelector />
        </header>
        <main className="flex-1 px-12 py-12">
          <div className="max-w-3xl">
            <Link href="/" className="inline-block mb-10">
              <Image src="/img/bg/mdc_login.jpg" alt="MDC" width={80} height={40} className="object-contain" />
            </Link>
            <h1 className="text-2xl font-normal text-primary mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Your Visa Application
            </h1>
            <p className="text-sm text-gray-500 mb-8" style={{ fontFamily: "var(--font-body)" }}>
              Welcome back. Log in to continue your application
            </p>
            <LoginForm />
          </div>
        </main>
      </div>
    </div>
  )
}