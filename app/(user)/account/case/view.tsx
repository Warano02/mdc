"use client";

import { CaseProgressTimeline } from "@/components/dashboard/timeline/case-progress-timeline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { dossier } from "@/mock-data/dossier";

export function CaseView() {
  const completedSteps = dossier.steps.filter(
    (s) => s.status === "completed"
  ).length;
  const progress = Math.round((completedSteps / dossier.steps.length) * 100);

  return (
    <div className="flex flex-col gap-4 w-full py-4 px-4.5 h-full">
      <div className="rounded-2xl border border-border bg-background p-5 shrink-0">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-lg font-semibold">{dossier.visaType}</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Reference {dossier.reference}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Avatar className="size-10 border border-border">
              <AvatarImage src={dossier.agent.photo} />
              <AvatarFallback>
                {dossier.agent.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{dossier.agent.name}</p>
              <p className="text-xs text-muted-foreground">{dossier.agent.title}</p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <CaseProgressTimeline steps={dossier.steps} />
      </div>
    </div>
  );
}