"use client";

import Link from "next/link";
import { format } from "date-fns";
import { Workflow, FileText, Calendar, Receipt, ArrowRight } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { CaseTimeline } from "@/components/dashboard/case-timeline";
import { submission } from "@/mock-data/dossier";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export type CaseStepStatus = "completed" | "current" | "upcoming";
export interface CaseStep {
  id: string;
  title: string;
  description: string;
  status: CaseStepStatus;
  date: string | null;
}

const mockSteps: CaseStep[] = [
  {
    id: "consultation",
    title: "Initial consultation",
    description: "Assessment of your profile and the immigration program that best fits your situation.",
    status: "current",
    date: new Date().toLocaleString("en-EN"),
  },
  {
    id: "documents",
    title: "Document collection",
    description: "Gathering the supporting documents required for your case.",
    status: "upcoming",
    date: null,
  },
  {
    id: "submission",
    title: "Application submission",
    description: "Official filing of your application with IRCC.",
    status: "upcoming",
    date: null,
  },
  {
    id: "biometrics",
    title: "Biometrics",
    description: "Fingerprints and photo collected at a designated Visa Application Centre.",
    status: "upcoming",
    date: null,
  },
  {
    id: "interview",
    title: "Interview",
    description: "Interview with an immigration officer, if required for your case.",
    status: "completed",
    date: null,
  },
  {
    id: "decision",
    title: "Decision",
    description: "IRCC's decision on your application.",
    status: "upcoming",
    date: null,
  },
  {
    id: "visa",
    title: "Visa issued",
    description: "Final visa and confirmation documents are issued.",
    status: "upcoming",
    date: null,
  },
]

interface IClient{
  steps:CaseStep[]
}

export function AccountView() {
  const [loading, setLoading] = useState(true)
  const [client,setClient]=useState<IClient|null>(null)
  const [steps, setSteps] = useState<CaseStep[]>([])
  const currentStep = submission.steps.find((s) => s.status === "current");
  const pendingDocuments = submission.documents.filter(
    (d) => d.status !== "approved"
  ).length;
  const nextAppointment = submission.appointments.find(
    (a) => a.status === "upcoming"
  );
  const dueInvoice = submission.invoices.find((i) => i.status !== "paid");

  if (loading ||!client) {
    return <div className="flex flex-col gap-6 w-full py-6 px-4.5 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {
          Array.from({ length: 4 }).map((_, idx) => <div key={idx} className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4 h-full">
            <Skeleton className="flex size-10 shrink-0 items-center justify-center rounded-full" />
            <div className="min-w-0 relative space-y-4">
              <Skeleton className="w-12 h-1.5" />
              <Skeleton className="w-26 h-1.5" />
              <Skeleton className="w-18 h-1.5" />
            </div>
          </div>)
        }
      </div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-base font-semibold">Case progress</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Reference <Skeleton className="w-46 h-2" />
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
      <CaseTimeline loading={loading} steps={steps} />
    </div>
  }

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
        <CaseTimeline loading={loading} steps={steps} />
      </div>
    </div>
  );
}