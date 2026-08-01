"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import axiosInstance from "@/lib/axios";
import { countries as countryData } from "@/data/countries";
interface PhoneCountry {
  code: string;
  name: string;
  nationality: string;
  flag: string;
  cca2: string;
  placeholder: string;
}
interface FormState {
  name: string;
  email: string;
  birthYear: string;
  englishLevel: string;
  phone: string;
}
const buildPlaceholder = (code: string): string => {
  const digits = code.replace(/\D/g, "");
  const len = Math.max(0, 10 - digits.length);
  return Array.from({ length: len }, (_, i) => (i % 3 === 0 && i !== 0 ? " " : "") + "X").join("").trim() || "XXXXXXXXX";
};
interface SignupDialogProps {
  children: React.ReactNode;
}
export default function SignupDialog({ children }: SignupDialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const countries = useMemo<PhoneCountry[]>(
    () =>
      countryData.map((c) => ({
        code: c.code,
        name: c.name,
        nationality: c.nationality,
        flag: c.flag,
        cca2: c.cca2,
        placeholder: buildPlaceholder(c.code),
      })),
    []
  );
  const [selectedCountry, setSelectedCountry] = useState<PhoneCountry | null>(
    () => countries.find((c) => c.code === "+237") ?? countries[0] ?? null
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState<FormState>({ name: "", email: "", birthYear: "", englishLevel: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1958 }, (_, i) => String(currentYear - i));

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setDropdownOpen(false);
    };
    if (dropdownOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen]);
  const filtered = countries.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.code.includes(search));
  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => setForm((p) => ({ ...p, [field]: e.target.value }));
  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const phone = `${selectedCountry?.code ?? ""}${form.phone}`.replace(/\D/g, "");
      await axiosInstance.post("/auth/signup", {
        name: form.name,
        email: form.email,
        birthYear: form.birthYear,
        englishLevel: form.englishLevel,
        phone,
        nationality: selectedCountry?.nationality ?? "",
      });
      router.push("/thank-you");
      setOpen(false);
    } catch (err) {
      const message =
        (axios.isAxiosError(err) && (err.response?.data?.message as string)) ||
        "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogTitle className="sr-only">Signup Form</DialogTitle>
      <DialogContent className="sm:max-w-sm p-6">
        <h2 className="text-primary text-xl font-bold leading-tight mb-4 ">
          Start your Canadian Visa Evaluation
        </h2>
        <div className="flex flex-col gap-2.5">
          <input type="text" placeholder="Name & Surname" value={form.name} onChange={set("name")} className="w-full h-10 border border-gray-300 rounded px-3 text-sm outline-none focus:border-primary transition-colors" />
          <input type="email" placeholder="Email" value={form.email} onChange={set("email")} className="w-full h-10 border border-gray-300 rounded px-3 text-sm outline-none focus:border-primary transition-colors" />
          <select
            value={form.birthYear}
            onChange={(e) => setForm((p) => ({ ...p, birthYear: e.target.value }))}
            className="w-full h-10 border border-gray-300 rounded px-3 text-sm outline-none focus:border-primary transition-colors bg-white text-gray-500"
          >
            <option value="" disabled>Year of Birth</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <input type="text" placeholder="English Level" value={form.englishLevel} onChange={set("englishLevel")} className="w-full h-10 border border-gray-300 rounded px-3 text-sm outline-none focus:border-primary transition-colors" />
          <div className="w-full h-10 border border-gray-300 rounded flex items-center relative" ref={dropdownRef}>
            <button type="button" onClick={() => setDropdownOpen((p) => !p)} className="h-full flex items-center gap-1 px-2 border-r border-gray-300 bg-gray-200 cursor-pointer shrink-0">
              <span className="text-base">{selectedCountry?.flag}</span>
              <span className="text-xs text-gray-700 font-medium">{selectedCountry?.code}</span>
              <ChevronDown size={11} className="text-gray-500" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 z-50000 w-72 bg-white border border-gray-200 shadow-lg rounded mt-1 overflow-hidden">
                <div className="p-2 border-b border-gray-100">
                  <input autoFocus type="text" placeholder="Search country..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full h-8 border border-gray-200 rounded px-2 text-xs outline-none focus:border-primary" />
                </div>
                <ul className="max-h-48 overflow-y-auto list-none">
                  {filtered.map((c) => (
                    <li key={`${c.cca2}-${c.code}`} onClick={() => { setSelectedCountry(c); setDropdownOpen(false); setSearch(""); setForm((p) => ({ ...p, phone: "" })); }} className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer">
                      <span>{c.flag}</span>
                      <span className="text-xs text-gray-700 flex-1">{c.name}</span>
                      <span className="text-xs text-gray-400">{c.code}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <input type="tel" placeholder={selectedCountry?.placeholder ?? "XXXXXXXXX"} value={form.phone} onChange={set("phone")} className="flex-1 h-full px-3 text-sm outline-none bg-transparent" />
          </div>
          {error && (
            <div className="w-full bg-red-50 border border-red-200 text-red-600 text-xs text-center rounded px-3 py-2">
              {error}
            </div>
          )}
          <button onClick={handleSubmit} disabled={submitting} className="w-full h-11 bg-[#dc3545] hover:bg-[#c82333] text-white font-bold text-sm tracking-widest uppercase border-none cursor-pointer rounded transition-colors mt-1 disabled:opacity-60 disabled:cursor-not-allowed">
            {submitting ? "Submitting..." : "Submit Your Details"}
          </button>
        </div>
        <p className="text-gray-500 text-xs text-center mt-3 leading-5">MDC is a private Canadian Immigration company and is not affiliated with the Canadian Government.</p>
        <div className="flex justify-center mt-1.5">
          <Link href="#" className="text-gray-600 text-xs underline hover:text-primary transition-colors">Privacy policy</Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}