"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ChevronDown, ChevronRight, X, ChevronLeft } from "lucide-react";
import SignupDialog from "@/components/SignupDialog";
import LoginForm from "./LoginForm";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
type SubItem = { label: string; hasNested?: boolean, href: string, highlight?: boolean };
type NavItem = { label: string; submenu?: SubItem[], href: string };

const navItems: NavItem[] = [
  {
    label: "CANADIAN VISAS",
    href: "/canadian-visas",
    submenu: [
      { label: "Express Entry System", href: "/canadian-visas/express-entry-system" },
      { label: "Tourist Visa", href: "/canadian-visas/tourist-visa" },
      { label: "Working Holiday Visa", href: "/canadian-visas/working-holiday-visa" },
      { label: "Student Visa", href: "/canadian-visas/student-visa", highlight: true },
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
  { label: "WORKS", href: "/works" },
  // { label: "NEWS", href: "/news" },
  {
    label: "ABOUT US",
    href: "/about-us",
    submenu: [
      { label: "FAQ", href: "/faq" },
      { label: "Known Agents", href: "/known-agents" },
      { label: "Meet Our Team", href: "/about-us/meet-our-team" },
      { label: "Testimonials", href: "/about-us/testimonials" },
    ],
  },
  { label: "CONTACT US", href: "/contact-us" },
];
export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const searchRef = useRef<HTMLInputElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);
  // useEffect(() => {
  //   const handler = (e: MouseEvent) => {
  //     if (loginRef.current && !loginRef.current.contains(e.target as Node)) setLoginOpen(false);
  //   };
  //   if (loginOpen) document.addEventListener("mousedown", handler);
  //   return () => document.removeEventListener("mousedown", handler);
  // }, [loginOpen]);

  return (
    <header className="w-full bg-white shadow-[0_4px_20px_1px_rgba(0,0,0,0.2)] fixed top-0 z-50">
      <div className="container flex items-center h-[5.8em] relative justify-between">
        <div className="flex items-center h-full shrink-0 pr-4">
          <MobileNav />
          <Link href="/"><Image src="https://mdccanada.ca/assets/images/Logo_colour_tagline.svg" alt="MDC Canada" width={120} height={40} priority className="h-[80%] w-auto mt-2 object-contain" /></Link>
        </div>
        {searchOpen ? (
          <div className="flex-1 flex items-center gap-2 px-4">
            <input ref={searchRef} type="text" placeholder="Search..." className="w-full h-10 border-b-2 border-primary outline-none bg-transparent text-primary text-sm placeholder:text-gray-400" />
            <button onClick={() => setSearchOpen(false)} className="text-primary bg-transparent border-none cursor-pointer"><X size={20} /></button>
          </div>
        ) : (
          <nav className={`hidden lg:block h-full flex-1   `}>
            <ul className="w-full h-full flex justify-between items-center list-none text-xs">
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
                    <div className="absolute top-full left-0 z-1000 hidden group-hover:block pt-1 lg:min-w-65">
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
                              {sub.highlight && <span className="px-2 py-0.2 rounded-lg bg-green-500 text-xs border border-primary">New</span>}
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
        <div className="hidden lg:flex items-center h-full border-l border-gray-300 ml-2 pl-4 gap-1 shrink-0 relative" ref={loginRef}>
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

        <div className="hidden h-full sm:flex lg:hidden gap-2">
          {!searchOpen && (
            <button onClick={() => setLoginOpen((p) => !p)} className=" sm:flex lg:hidden items-center gap-1 text-primary font-bold text-sm bg-transparent border-none cursor-pointer whitespace-nowrap hover:text-primary-light transition-colors">
              Login <ChevronDown size={14} />
            </button>)}
          {loginOpen && <LoginForm />}
          <SignupDialog>
            <button className="h-full w-1/2 sm:w-60 md:w-70 bg-[#dc3545] text-white font-bold font-mono text-[1.1em] tracking-[0.5px] flex items-center justify-center border-none cursor-pointer hover:bg-[#e93c4e] shrink-0  max-[455px]:text-[0.85em]">
              START TODAY
            </button>
          </SignupDialog>
        </div>

          <SignupDialog>
            <button className="h-full sm:hidden lg:block w-1/2 sm:w-60 md:w-70 bg-[#dc3545] text-white font-bold font-mono text-[1.1em] tracking-[0.5px] flex items-center justify-center border-none cursor-pointer hover:bg-[#e93c4e] shrink-0  max-[455px]:text-[0.85em]">
              START TODAY
            </button>
          </SignupDialog>
      </div>
    </header>
  );
}

const MobileNav = () => {
  return <Drawer direction="left">
    <DrawerTrigger className="flex relative" asChild>
      <button aria-label="Toggle navigation" className="flex items-center justify-center w-16 h-full text-primary bg-transparent border-none cursor-pointer  sm:hidden">
        <Menu size={28} />
      </button>
    </DrawerTrigger>
    <DrawerContent>
      <div className="flex justify-between px-4">
        <DrawerHeader >
          <Link href={"/"}>
            <Image src="https://mdccanada.ca/assets/images/Logo_colour_tagline.svg" alt="Logo MDCCanada" width={80} height={40} />
          </Link>

          <DrawerTitle className="sr-only">Nav Links</DrawerTitle>
        </DrawerHeader>
        <DrawerClose>
          <X />
        </DrawerClose>
      </div>

      <ul className="px-4 mt-1 space-y-2">
        {
          navItems.map(el => <Elem data={el} key={el.label} />)
        }
      </ul>

      <DrawerFooter className="w-full p-2 bg-[#EDF1FF]">
        <div className="space-y-2">
          <h3 className="font-bold">Easy Way To Travel</h3>
          <p>We provide the guidance and services to make your Canadian immigration process easy, affordable, and reliable.</p>
        </div>
        {/* <div className="flex justify-between">
          <Link href={""}>
            <Image src="/icons/appstore-badge.svg" alt="App Store" width={120} height={40} />
          </Link>
          <Link href={""}>
            <Image src="/icons/playstore-badge.svg" alt="Play Store" width={120} height={40} />
          </Link>
        </div> */}
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
}

const Elem = ({ data }: { data: NavItem }) => {
  if (!data?.submenu) return <li><Link href={data.href}>{data.label} </Link></li>
  return (
    <li>
      <Drawer direction="left">
        <DrawerTrigger className="flex relative" asChild>
          <div className="my-4 flex relative items-center gap-0.5">
            <h2>{data.label} </h2>
            <ChevronRight size={18} />
          </div>
        </DrawerTrigger>
        <DrawerContent >
          <div className="mt-6 flex justify-between px-4">
            <DrawerHeader className="hidden">
              <DrawerTitle className="hidden">Move Goal</DrawerTitle>
            </DrawerHeader>
            <DrawerClose>
              <ChevronLeft />
            </DrawerClose>
            <DrawerClose>
              <X />
            </DrawerClose>
          </div>

          <ul className="mt-6 px-4 space-y-4">
            {
              data.submenu.map((el) => <Elem data={el} key={el.label} />)
            }
          </ul>

          <DrawerFooter className="w-full p-2 bg-[#EDF1FF]">
            <div className="space-y-2">
              <h3 className="font-bold">Téléchargez l'app</h3>
              <p>et postulez dans les premiers</p>
            </div>
            <div className="flex justify-between">
              <Link href={""}>
                <Image src="/icons/appstore-badge.svg" alt="App Store" width={120} height={40} />
              </Link>
              <Link href={""}>
                <Image src="/icons/playstore-badge.svg" alt="Play Store" width={120} height={40} />
              </Link>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </li>
  )
}