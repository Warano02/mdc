"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ChevronDown, ChevronRight, X } from "lucide-react";
import SignupDialog from "@/components/SignupDialog";
import LoginForm from "./LoginForm";
type SubItem = { label: string; hasNested?: boolean, href: string };
type NavItem = { label: string; submenu?: SubItem[], href: string };

const navItems: NavItem[] = [
  {
    label: "CANADIAN VISAS",
    href: "/canadian-visas",
    submenu: [
      { label: "Express Entry System", href: "/canadian-visas/express-entry-system" },
      { label: "Tourist Visa", href: "/canadian-visas/tourist-visa" },
      { label: "Working Holiday Visa", href: "/canadian-visas/working-holiday-visa" },
      { label: "Student Visa", href: "/canadian-visas/student-visa" },
      { label: "Start-up Visa Program", href: "/canadian-visas/start-up-visa-program" },
      { label: "Business Immigration Programs", href: "/canadian-visas/business-immigration-programs" },
      { label: "Family Sponsorship Visa", href: "/canadian-visas/family-sponsorship-visa" },
    ],
  },
  { label: "WHY USE AN RCIC?", href: "/why-use-an-rcic" },
  {
    label: "ABOUT CANADA",
    href: "/about-canada",
    submenu: [
      { label: "British Columbia", href: "/about-canada/british-columbia" },
      { label: "Alberta", href: "/about-canada/alberta" },
      { label: "Ontario", href: "/about-canada/ontario" },
      { label: "Quebec", href: "/about-canada/quebec" },
      { label: "New Brunswick", href: "/about-canada/new-brunswick" },
      { label: "Manitoba", href: "/about-canada/manitoba" },
      { label: "Saskatchewan", href: "/about-canada/saskatchewan" },
      { label: "Newfoundland & Labrador", href: "/about-canada/newfoundland-and-labrador" },
      { label: "Nova Scotia", href: "/about-canada/nova-scotia" },
      { label: "Nunavut", href: "/about-canada/nunavut" },
      { label: "Yukon", href: "/about-canada/yukon" },
    ],
  },
  { label: "NEWS", href: "/news" },
  { label: "FAQ", href: "/faq" },
  {
    label: "ABOUT US",
    href: "/about-us",
    submenu: [
      { label: "Known Agents", href: "/known-agents" },
      { label: "Meet Our Team", href: "/about-us/meet-our-team" },
      { label: "Testimonials", href: "/about-us/testimonials" },
    ],
  },
  { label: "CONTACT US", href: "/contact-us" },
];
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const searchRef = useRef<HTMLInputElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) setLoginOpen(false);
    };
    if (loginOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [loginOpen]);

  return (
    <header className="w-full bg-white shadow-[0_4px_20px_1px_rgba(0,0,0,0.2)] fixed top-0 z-50">
      <div className="flex items-center h-[5.8em] relative pl-8 max-[1088px]:pl-4 max-[1088px]:justify-between">
        <div className="flex items-center h-full shrink-0 pr-4">
          <button aria-label="Toggle navigation" onClick={() => setMobileOpen((p) => !p)} className="hidden max-[1088px]:flex items-center justify-center w-16 h-full text-primary bg-transparent border-none cursor-pointer">
            <Menu size={28} />
          </button>
          <Link href="/"><Image src="https://mdccanada.ca/assets/images/Logo_colour_tagline.svg" alt="MDC Canada" width={120} height={40} priority className="h-[80%] w-auto mt-2 object-contain" /></Link>
        </div>
        {searchOpen ? (
          <div className="flex-1 flex items-center gap-2 px-4">
            <input ref={searchRef} type="text" placeholder="Search..." className="w-full h-10 border-b-2 border-primary outline-none bg-transparent text-primary text-sm placeholder:text-gray-400" />
            <button onClick={() => setSearchOpen(false)} className="text-primary bg-transparent border-none cursor-pointer"><X size={20} /></button>
          </div>
        ) : (
          <nav className={`h-full flex-1 max-[1088px]:flex-none max-[1088px]:absolute max-[1088px]:top-full max-[1088px]:left-0 max-[1088px]:w-full max-[1088px]:h-auto max-[1088px]:bg-white max-[1088px]:shadow-[0_4px_20px_1px_rgba(0,0,0,0.2)] max-[1088px]:p-4 max-[1088px]:z-50 ${mobileOpen ? "max-[1088px]:block" : "max-[1088px]:hidden"}`}>
            <ul className="w-full h-full flex justify-between items-center list-none max-[1088px]:flex-col max-[1088px]:items-start max-[1088px]:gap-4 max-[1088px]:h-auto">
              {navItems.map((item) => (
                <li key={item.label} className="relative group h-full flex items-center">

                  <Link href={item.href} className="text-[12px] font-bold text-primary no-underline whitespace-nowrap flex items-center gap-1">
                    {item.label}
                    {item.submenu && (
                      <span className="flex items-center gap-1 text-[12px] font-bold text-primary cursor-pointer whitespace-nowrap">
                        <ChevronDown size={12} />
                      </span>
                    )}
                  </Link>

                  {item.submenu && (
                    <div className="absolute top-full left-0 z-1000 hidden group-hover:block pt-1 min-w-65">
                      <div className="bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.12)] rounded-sm overflow-hidden">
                        <div className="bg-primary px-4 py-1.5">
                          <span className="text-white text-[11px] font-bold tracking-wider uppercase">{item.label}</span>
                        </div>
                        <ul className="list-none">
                          {item.submenu.map((sub, i) => (
                            <li key={sub.label} className={`flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors ${i < (item?.submenu?.length || 1) - 1 ? "border-b border-gray-200" : ""}`}>
                              <Link href={sub.href} className="text-[13px] text-primary no-underline w-full">
                                {sub.label}
                              </Link>
                              {sub.hasNested && <ChevronRight size={14} className="text-primary shrink-0" />}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div className="flex items-center h-full border-l border-gray-300 ml-2 pl-4 gap-1 shrink-0 relative" ref={loginRef}>
          {!searchOpen && (
            <button onClick={() => setLoginOpen((p) => !p)} className="flex items-center gap-1 text-primary font-bold text-sm bg-transparent border-none cursor-pointer whitespace-nowrap hover:text-primary-light transition-colors">
              Login <ChevronDown size={14} />
            </button>)}
          {loginOpen && <LoginForm />}
          {!searchOpen && (
            <button aria-label="Search" onClick={() => setSearchOpen(true)} className="w-10 h-10 bg-transparent border-none text-primary cursor-pointer flex items-center justify-center hover:text-primary-light transition-colors">
              <Search size={22} />
            </button>
          )}
        
        </div>

        <SignupDialog>
          <button className="h-full w-[13em] bg-[#dc3545] text-white font-bold font-mono text-[1.1em] tracking-[0.5px] flex items-center justify-center border-none cursor-pointer hover:bg-[#e93c4e] shrink-0 max-[655px]:w-[10em] max-[455px]:w-[7em] max-[455px]:text-[0.85em]">
            START TODAY
          </button>
        </SignupDialog>
      </div>
    </header>
  );
}

