import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  hint?: string;
  href?: string;
  accent?: "primary" | "orange" | "green" | "muted";
}

const accentClasses: Record<NonNullable<StatCardProps["accent"]>, string> = {
  primary: "bg-primary-50 text-primary",
  orange: "bg-[#feeeea] text-[#f65428]",
  green: "bg-green-50 text-green-700",
  muted: "bg-muted text-muted-foreground",
};

export function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  href,
  accent = "primary",
}: StatCardProps) {
  const content = (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4 h-full">
      <div
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-full",
          accentClasses[accent]
        )}
      >
        <Icon className="size-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-lg font-semibold text-foreground truncate">{value}</p>
        {hint && <p className="text-xs text-muted-foreground mt-0.5">{hint}</p>}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block hover:border-primary/40 rounded-2xl transition-colors">
        {content}
      </Link>
    );
  }

  return content;
}