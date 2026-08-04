import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | MDC Canada",
  description: "The page you're looking for doesn't exist or may have been moved.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-23.5 w-full min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-lg py-24">
          <p className="font-heading text-primary text-8xl sm:text-9xl font-bold leading-none">
            404
          </p>
          <h1 className="mt-4 text-2xl sm:text-3xl">Page Not Found</h1>
          <p className="mt-3 text-gray-600">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="h-12 px-10 flex items-center justify-center bg-primary text-white font-bold text-sm tracking-widest hover:bg-primary-light transition-colors"
            >
              BACK TO HOMEPAGE
            </Link>
            <Link
              href="/contact-us"
              className="h-12 px-10 flex items-center justify-center border border-primary text-primary font-bold text-sm tracking-widest hover:bg-primary-50 transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}