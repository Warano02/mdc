"use client";

import { useState } from "react";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Youtube",
    href: "#",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormState("error");
    }
  };

  return (
    <section className="w-full flex gap-8 justify-center items-center py-12 flex-col md:flex-row md:items-start px-4">
      <div className="w-full md:w-[22em] ml-0 md:ml-4">
        <h1 className="mt-4 mb-6 text-[2.5em] text-primary font-serif leading-tight">
          Regulated Canadian Immigration Consultants
        </h1>

        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-[1.3em] font-bold text-primary mb-2 font-serif">ADDRESS</h2>
            <p className="text-gray-700 font-medium leading-relaxed">
              700 W Pender St, Vancouver,<br />
              BC V6C 1GB<br />
              Canada
            </p>
          </div>

          <div>
            <h2 className="text-[1.3em] font-bold text-primary mb-1 font-serif">PHONE</h2>
            <a href="tel:+16044491100" className="text-gray-900 font-bold hover:underline">
              +1 604 449 1100
            </a>
          </div>

          <div>
            <h2 className="text-[1.3em] font-bold text-primary mb-1 font-serif">WHATSAPP</h2>
            <a href="tel:+16044491100" className="text-gray-900 font-bold hover:underline">
              +1 604 449 1100
            </a>
          </div>

          <div>
            <h2 className="text-[1.3em] font-bold text-primary mb-1 font-serif">EMAIL</h2>
            <a href="mailto:support@mdccanada.ca" className="text-gray-900 font-bold hover:underline">
              support@mdccanada.ca
            </a>
          </div>

          <div className="flex gap-2 mt-2">
            {socialLinks.map(({ label, href, svg }) => (
              <a
                key={label}
                href={href}
                title={label}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 transition-transform duration-200"
              >
                {svg}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-[55em]">
        <h3 className="mt-8 ml-4 text-[1.5em] text-primary font-serif mb-4">
          Leave a message
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ml-6 w-[90%]">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full h-10 text-base border border-gray-400 pl-4 outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-10 text-base border border-gray-400 pl-4 outline-none focus:border-primary transition-colors"
          />
          <textarea
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            minLength={50}
            required
            className="w-full h-[20em] resize-y text-base border border-gray-400 p-4 outline-none focus:border-primary transition-colors"
          />

          {formState === "success" && (
            <p className="text-green-600 font-medium">Message sent successfully!</p>
          )}
          {formState === "error" && (
            <p className="text-red-600 font-medium">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={formState === "loading"}
            className="w-[12em] h-10 bg-primary text-white font-bold text-base cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {formState === "loading" ? "SENDING..." : "SEND"}
          </button>
        </form>
      </div>
    </section>
  );
}