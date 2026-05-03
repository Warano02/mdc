"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ChevronDown, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const languages = [
  { code: "en", label: "English", flag: "/img/flag/United Kingdom.png" },
  { code: "fr", label: "Français", flag: "/img/flag/France.png" },
] as const;
type LangCode = (typeof languages)[number]["code"];
const navItems = [
  {
    label: "CANADIAN VISAS",
    submenu: [
      "Express Entry System",
      "Tourist Visa",
      "Working Holiday Visa",
      "Student Visa",
      "Start-up Visa Program",
      "Business Immigration Program",
      "Provincial Nominee Program",
      "Family Sponsorship Visa",
      "Pilot Programs",
    ],
  },
  { label: "WHY USE AN RCIC?", href: "/why-use-an-rcic" },
  {
    label: "ABOUT CANADA",
    submenu: [
      "British Columbia",
      "Alberta",
      "Ontario",
      "Quebec",
      "New Brunswick",
      "Manitoba",
      "Saskatchewan",
      "Newfoundland & Labrador",
      "Nova Scotia",
      "Nunavut",
      "Yukon",
    ],
  },
  { label: "NEWS", href: "/news" },
  { label: "FAQ", href: "/faq" },
  {
    label: "ABOUT US",
    submenu: ["Known Agents", "Meet Our Team", "Testimonials"],
  },
  { label: "CONTACT US", href: "/contact" },
] as const;
interface HeaderProps {
  onLoginOpen?: () => void;
}
export default function Header({ onLoginOpen }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [lang, setLang] = useState<LangCode>("en");
  const searchRef = useRef<HTMLInputElement>(null);
  const currentLang = languages.find((l) => l.code === lang)!;
  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);
  return (
    <header className="w-full bg-white shadow-[0_4px_20px_1px_rgba(0,0,0,0.2)] fixed top-0 z-[25000]">
      <div className="container flex items-center gap-4 h-[5.8em] relative max-[1088px]:justify-between">
        <div className="flex items-center h-full">
          <button
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((p) => !p)}
            className="hidden max-[1088px]:flex items-center justify-center w-20 h-full text-[var(--color-primary)] bg-transparent border-none cursor-pointer"
          >
            <Menu size={28} />
          </button>
          <Link href="/">
            <Image
              src="https://mdccanada.ca/assets/images/Logo_colour_tagline.svg"
              alt="MDC Canada"
              width={160}
              height={60}
              priority
              className="h-[80%] w-auto mt-2 object-contain"
            />
          </Link>
        </div>
        {searchOpen ? (
          <div className="flex-1 flex items-center gap-2 px-4">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search..."
              className="w-full h-10 border-b-2 border-[var(--color-primary)] outline-none bg-transparent text-[var(--color-primary)] font-[var(--font-body)] text-sm placeholder:text-gray-400"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-[var(--color-primary)] bg-transparent border-none cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        ) : (
          <nav className={`h-full flex-1 pr-[10px] after:content-[''] after:w-px after:h-[60%] after:bg-black after:ml-[10px] after:mt-[10px] max-[1088px]:after:hidden max-[1088px]:flex-none max-[1088px]:absolute max-[1088px]:top-full max-[1088px]:left-0 max-[1088px]:w-full max-[1088px]:h-auto max-[1088px]:bg-white max-[1088px]:shadow-[0_4px_20px_1px_rgba(0,0,0,0.2)] max-[1088px]:p-4 max-[1088px]:z-50 ${mobileOpen ? "max-[1088px]:block" : "max-[1088px]:hidden"}`}>
            <ul className="w-full h-full flex justify-between items-center list-none max-[1088px]:flex-col max-[1088px]:items-start max-[1088px]:gap-4 max-[1088px]:h-auto">
              {navItems.map((item) => (
                <li key={item.label} className="relative group">
                  {"href" in item ? (
                    <Link href={item.href} className="text-[12px] font-bold text-[var(--color-primary)] no-underline font-[var(--font-body)]">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="flex items-center gap-1 text-[12px] font-bold text-[var(--color-primary)] font-[var(--font-body)] cursor-pointer">
                      {item.label} <ChevronDown size={12} />
                    </span>
                  )}
                  {item.submenu && (
                    <div className="w-[20em] h-auto absolute mt-[10px] z-[1000] hidden group-hover:block">
                      <ul className="w-full bg-gray-50 rounded border border-gray-400 p-[5px] overflow-hidden list-none">
                        {item.submenu.map((sub) => (
                          <li key={sub} className="w-full h-10 border-b border-gray-800 flex justify-center items-center">
                            <Link href="#" className="text-[10px] text-gray-800 no-underline hover:[letter-spacing:0.8px]">
                              {sub}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div className="h-full flex items-center gap-2 p-[5px]">
          {!searchOpen && (
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="h-full min-w-[3em] bg-transparent border-none text-[var(--color-primary)] cursor-pointer flex items-center justify-center"
            >
              <Search size={24} />
            </button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Select language"
                className="h-full min-w-[3em] bg-transparent border-none cursor-pointer flex items-center justify-center gap-1 max-[455px]:hidden"
              >
                <Image
                  src={currentLang.flag}
                  alt={currentLang.label}
                  width={30}
                  height={30}
                  className="rounded-full object-cover border border-gray-400"
                />
                <ChevronDown size={12} className="text-[var(--color-primary)]" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              {languages.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Image
                    src={l.flag}
                    alt={l.label}
                    width={24}
                    height={24}
                    className="rounded-full object-cover border border-gray-300"
                  />
                  <span className="text-sm font-[var(--font-body)]">{l.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            onClick={onLoginOpen}
            className="w-[17em] h-full bg-[#dc3545] text-gray-100 font-bold font-mono text-[1.2em] tracking-[0.5px] flex items-center justify-center border-none cursor-pointer hover:bg-[#e93c4e] -mt-[10px] max-[655px]:w-[15em] max-[455px]:w-[8em] max-[455px]:text-[0.9em]"
          >
            START TODAY
          </button>
        </div>
      </div>
    </header>
  );
}