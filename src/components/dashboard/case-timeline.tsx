"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CaseStep } from "@/mock-data/dossier";

interface CaseTimelineProps {
  steps: CaseStep[];
}

export function CaseTimeline({ steps }: CaseTimelineProps) {
  const displaySteps = steps.slice(0, 4);

  return (
    <ol className="flex flex-col">
      {displaySteps.map((step, index) => {
        const isLast = index === displaySteps.length - 1;
        return (
          <li key={step.id} className="relative flex gap-4 pb-8 last:pb-0">
            {!isLast && (
              <span
                className={cn(
                  "absolute left-2.75 top-6 -bottom-2 w-px",
                  step.status === "completed" ? "bg-primary" : "bg-border"
                )}
              />
            )}

            <span className="relative z-10 mt-0.5 shrink-0">
              {step.status === "completed" ? (
                <CheckCircle2 className="size-6 text-primary fill-primary/10" />
              ) : step.status === "current" ? (
                <span className="flex size-6 items-center justify-center">
                  <span className="size-3 rounded-full bg-primary animate-pulse" />
                  <span className="absolute size-6 rounded-full border-2 border-primary/30" />
                </span>
              ) : (
                <Circle className="size-6 text-muted-foreground/40" />
              )}
            </span>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3
                  className={cn(
                    "text-sm font-medium",
                    step.status === "upcoming"
                      ? "text-muted-foreground"
                      : "text-foreground"
                  )}
                >
                  {step.title}
                </h3>
                {step.date ? (
                  <span className="text-xs text-muted-foreground shrink-0">
                    {format(new Date(step.date), "d MMM yyyy")}
                  </span>
                ) : (
                  step.status === "upcoming" && (
                    <span className="text-xs text-muted-foreground shrink-0">
                      Upcoming
                    </span>
                  )
                )}
              </div>
              {step.status === "current" && (
                <span className="inline-flex items-center mt-2 rounded-full bg-primary-50 text-primary text-xs font-medium px-2 py-0.5">
                  In progress
                </span>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}