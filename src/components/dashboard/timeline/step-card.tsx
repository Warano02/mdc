"use client";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CaseStep, CaseStepStatus } from "@/mock-data/dossier";

interface StepCardProps {
  step: CaseStep;
}

const statusColors: Record<
  CaseStepStatus,
  { bg: string; border: string; text: string; dot: string; label: string }
> = {
  completed: {
    bg: "bg-green-50",
    border: "border border-green-200/60",
    text: "text-green-700",
    dot: "#4caf50",
    label: "Completed",
  },
  current: {
    bg: "bg-primary-50",
    border: "border border-primary/15",
    text: "text-primary",
    dot: "#28317c",
    label: "In progress",
  },
  upcoming: {
    bg: "bg-gray-100",
    border: "border border-gray-200",
    text: "text-gray-500",
    dot: "#adb5bd",
    label: "Upcoming",
  },
};

const stripeColors: Record<CaseStepStatus, { bg: string; stripe: string }> = {
  completed: { bg: "#a5d6a7", stripe: "#66bb6a" },
  current: { bg: "#9fa8da", stripe: "#28317c" },
  upcoming: { bg: "#e0e4ee", stripe: "#c7ccdb" },
};

export function StepCard({ step }: StepCardProps) {
  const statusColor = statusColors[step.status];
  const stripeColor = stripeColors[step.status];

  return (
    <div className="overflow-hidden relative rounded-lg bg-muted/30 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),0px_2px_6px_0px_rgba(0,0,0,0.08)] h-[108px]">
      <div className="absolute bottom-0 left-0 right-0 h-[10px] overflow-hidden rounded-b-lg">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: stripeColor.bg,
            backgroundImage: `repeating-linear-gradient(294.886deg, ${stripeColor.stripe} 0px, ${stripeColor.stripe} 2.108px, transparent 2.108px, transparent 4.216px)`,
            backgroundSize: "8.917px 18.955px",
          }}
        />
      </div>

      <div className="absolute left-3 top-3 right-3 flex flex-col gap-2.5 h-full pb-[14px]">
        <div className="flex flex-col gap-1.5 min-h-[42px]">
          <h3 className="text-sm font-medium text-foreground truncate leading-[18px]">
            {step.title}
          </h3>
          {step.date && (
            <p className="text-xs text-muted-foreground leading-[16px]">
              {format(new Date(step.date), "EEE dd MMM")}
            </p>
          )}
        </div>

        <div className="flex items-center h-[22px]">
          <div
            className={cn(
              "inline-flex items-center gap-1 rounded-xl px-1 pr-2 py-0.5 relative",
              statusColor.bg,
              statusColor.border
            )}
          >
            <div
              className="size-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: statusColor.dot }}
            >
              <div className="size-2 rounded-full bg-white/80" />
            </div>
            <span className={cn("text-sm font-medium leading-[18px]", statusColor.text)}>
              {statusColor.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}