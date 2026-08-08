"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="hidden md:block w-50 shrink-0 sticky top-28 self-start">
      <div className="bg-primary text-white text-sm font-bold px-4 py-3">
        Table of Contents
      </div>
      <div className="border border-gray-200 divide-y divide-gray-200">
        {items.map((item, i) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left px-4 py-3 text-sm transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "text-red-600 font-semibold bg-white"
                  : "text-gray-700 hover:text-primary bg-white"
              }`}
            >
              {i + 1}. {item.label}
            </button>
          );
        })}
      </div>
    </aside>
  );
}