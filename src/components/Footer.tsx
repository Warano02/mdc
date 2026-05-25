"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
const siteMap = [
    { label: "Home", href: "/" },
    { label: "Why use an RCIC?", href: "/why-use-an-rcic" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Sitemap", href: "#" },
];
const visaPrograms = [
    { label: "Canadian Visas", href: "/canadian-visas" },
    { label: "Working Holiday Visa", href: "/canadian-visas/working-holiday-visa" },
    { label: "Tourist Visa", href: "/canadian-visas/tourist-visa" },
    { label: "Student Visa", href: "/canadian-visas/student-visa" },
    { label: "Start-up Visa Program", href: "/canadian-visas/start-up-visa-program" },
    { label: "Business Immigration Programs", href: "/canadian-visas/business-immigration-programs" },
    { label: "Family Sponsorship Visa", href: "/canadian-visas/family-sponsorship-visa" },
    { label: "Express Entry System", href: "/canadian-visas/express-entry-system" },
];
const socials = [
    {
        label: "Facebook", href: "#",
        svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
    },
    {
        label: "Instagram", href: "#",
        svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>,
    },
    {
        label: "LinkedIn", href: "#",
        svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>,
    },
    {
        label: "X", href: "#",
        svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
    },
    {
        label: "Youtube", href: "#",
        svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon fill="#1a1a1a" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>,
    },
];
export default function Footer() {
    return (
        <footer className="w-full bg-[#1a1a1a]">
            <div className="container flex justify-between items-start gap-8 py-12 max-[840px]:flex-wrap">
                <div className="w-64 shrink-0 max-[840px]:w-full">
                    <h4 className="text-white font-bold mb-5  text-base">Welcome to MDC Canada</h4>
                    <p className="text-white/70 text-sm leading-6 tracking-[0.5px]">
                        Our experienced team of legal experts and consultants are here to help you. With our passion, in-depth knowledge of the system and amazing success stories, we give you nothing but the best service. For further information about immigration, please contact our office. Please note: Our Immigration Consultants don't apply for electronic travel visas and authorizations (ETAs) on the user's behalf.
                    </p>
                </div>
                <div className="shrink-0 max-[840px]:w-[calc(50%-16px)] max-[505px]:w-full">
                    <h4 className="text-white font-bold mb-5  text-base">SiteMap</h4>
                    <ul className="list-none w-52">
                        {siteMap.map((item) => (
                            <li key={item.label} className="w-full h-9.5 border-b border-white/10 flex items-center justify-between">
                                <Link href={item.href} className="text-sm text-white/80 no-underline transition-all duration-300 hover:text-white/50 hover:tracking-[0.8px]">{item.label}</Link>
                                <ChevronRight size={12} className="text-white/80 shrink-0" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="shrink-0 max-[840px]:w-[calc(50%-16px)] max-[505px]:w-full">
                    <h4 className="text-white font-bold mb-5  text-base">Visa Programs</h4>
                    <ul className="list-none w-56">
                        {visaPrograms.map((item) => (
                            <li key={item.label} className="w-full h-9.5 border-b border-white/10 flex items-center justify-between">
                                <Link href={item.href} className="text-sm text-white/80 no-underline transition-all duration-300 hover:text-white/50 hover:tracking-[0.8px]">{item.label}</Link>
                                <ChevronRight size={12} className="text-white/80 shrink-0" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-56 shrink-0 max-[840px]:w-full">
                    <h4 className="text-white font-bold mb-5  text-base">Contact Us</h4>
                    <div className="flex items-center gap-3 mb-6">
                        {socials.map(({ label, href, svg }) => (
                            <Link key={label} href={href} aria-label={label} className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-white/80 transition-all duration-300 hover:border-white/20 hover:text-white/40 hover:scale-105">
                                {svg}
                            </Link>
                        ))}
                    </div>
                    <p className="text-white/80 text-sm leading-7 mb-4">
                        <Link href="mailto:support@mdccanada.ca" className="text-white/80 no-underline hover:text-white/50 transition-colors block">support@mdccanada.ca</Link>
                        <Link href="tel:+16044491100" className="text-white/80 no-underline hover:text-white/50 transition-colors block">+1 604 449 1100</Link>
                    </p>
                    <p className="text-white text-sm leading-7">
                        700 W Pender St,<br />Vancouver,<br />BC V6C 1GB,<br />Canada
                    </p>
                </div>
            </div>
            <div className="w-full min-h-[5em] bg-black flex justify-around items-center px-8 gap-4 max-[505px]:flex-col max-[505px]:py-4">
                <Image src="https://dwyeyw425tqez.cloudfront.net/production/mdccanada-v2/browser/assets/images/Logo_white.svg" alt="Logo MDC" width={100} height={36} className="object-contain shrink-0" />
                <p className="text-white text-sm text-center">MdcCanada.ca｜700 W Pender St, Vancouver, BC V6C 1G8, Canada © Copyright {new Date().getFullYear()} MdcCanada.ca. All Rights Reserved</p>
            </div>
        </footer>
    );
}