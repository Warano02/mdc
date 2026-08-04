"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface GreetingProps {
  name?: string;
}

function getGreeting(hour: number) {
  if (hour >= 0 && hour < 6) {
    return { text: "Hello", icon: Moon, bgColor: "bg-slate-900" };
  } else if (hour >= 6 && hour < 12) {
    return { text: "Good morning", icon: Sun, bgColor: "bg-yellow-400" };
  } else if (hour >= 12 && hour < 18) {
    return { text: "Good afternoon", icon: Sun, bgColor: "bg-yellow-400" };
  }
  return { text: "Good evening", icon: Moon, bgColor: "bg-slate-900" };
}

export function Greeting({ name = "there" }: GreetingProps) {
  const [hour, setHour] = useState(() => new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().getHours());
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const greeting = getGreeting(hour);
  const Icon = greeting.icon;

  return (
    <div className="flex items-center gap-2">
      <div
        className={cn("size-6 rounded-full flex items-center justify-center text-white", greeting.bgColor)}
      >
        <Icon className="size-4" />
      </div>
      <p className="text-sm sm:text-lg font-medium">
        {greeting.text}, {name}
      </p>
    </div>
  );
}