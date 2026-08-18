"use client";

import Link from "next/link";
import { format } from "date-fns";
import { Workflow, FileText, Calendar, Receipt, ArrowRight } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { CaseTimeline } from "@/components/dashboard/case-timeline";
import { submission } from "@/mock-data/dossier";

export function AccountView() {
  const currentStep = submission.steps.find((s) => s.status === "current");
  const pendingDocuments = submission.documents.filter(
    (d) => d.status !== "approved"
  ).length;
  const nextAppointment = submission.appointments.find(
    (a) => a.status === "upcoming"
  );
  const dueInvoice = submission.invoices.find((i) => i.status !== "paid");

  return (
    <div className="flex flex-col gap-6 w-full py-6 px-4.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          icon={Workflow}
          label="Case status"
          value={currentStep?.title ?? "Completed"}
          hint={submission.visaType}
          href="/account/case"
        />
        <StatCard
          icon={FileText}
          label="Pending documents"
          value={String(pendingDocuments)}
          hint="required or in review"
          href="/account/documents"
          accent="orange"
        />
        <StatCard
          icon={Calendar}
          label="Next appointment"
          value={
            nextAppointment
              ? format(new Date(nextAppointment.date), "d MMM")
              : "None"
          }
          hint={nextAppointment?.title}
          href="/account/appointments"
          accent="green"
        />
        <StatCard
          icon={Receipt}
          label="Invoice"
          value={dueInvoice ? `${dueInvoice.amount} ${dueInvoice.currency}` : "Up to date"}
          hint={dueInvoice ? "payment pending" : "no invoice due"}
          href="/account/billing"
          accent="muted"
        />
      </div>

      <div className="rounded-2xl border border-border bg-background p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-base font-semibold">Case progress</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Reference {submission.reference}
            </p>
          </div>
          <Link
            href="/account/case"
            className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
          >
            View details
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <CaseTimeline steps={submission.steps} />
      </div>
    </div>
  );
}