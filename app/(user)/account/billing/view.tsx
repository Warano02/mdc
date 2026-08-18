"use client";

import { format } from "date-fns";
import { Receipt } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { InvoiceStatus, submission } from "@/mock-data/dossier";

const statusConfig: Record<InvoiceStatus, { label: string; className: string }> = {
  paid: { label: "Paid", className: "bg-green-50 text-green-700" },
  due: { label: "Due", className: "bg-yellow-50 text-yellow-700" },
  overdue: { label: "Overdue", className: "bg-[#feeeea] text-[#f65428]" },
};

export function BillingView() {
  const total = submission.invoices.reduce((sum, i) => sum + i.amount, 0);
  const paid = submission.invoices
    .filter((i) => i.status === "paid")
    .reduce((sum, i) => sum + i.amount, 0);
  const outstanding = total - paid;

  return (
    <div className="flex flex-col gap-4 w-full py-6 px-4.5">
      <div>
        <h1 className="text-lg font-semibold">Billing</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Fee history for case {submission.reference}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs text-muted-foreground">Total invoiced</p>
          <p className="text-lg font-semibold mt-1">{total} CAD</p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs text-muted-foreground">Paid</p>
          <p className="text-lg font-semibold mt-1 text-green-700">{paid} CAD</p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-xs text-muted-foreground">Outstanding balance</p>
          <p className="text-lg font-semibold mt-1 text-[#f65428]">{outstanding} CAD</p>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-background overflow-hidden">
        {submission.invoices.map((invoice, index) => {
          const status = statusConfig[invoice.status];
          return (
            <div
              key={invoice.id}
              className={cn(
                "flex items-center justify-between gap-4 px-5 py-4",
                index !== submission.invoices.length - 1 && "border-b border-border"
              )}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted">
                  <Receipt className="size-4 text-muted-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{invoice.label}</p>
                  <p className="text-xs text-muted-foreground">
                    Issued {format(new Date(invoice.issuedAt), "d MMM yyyy")} · Due{" "}
                    {format(new Date(invoice.dueAt), "d MMM yyyy")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-sm font-medium">
                  {invoice.amount} {invoice.currency}
                </span>
                <span
                  className={cn(
                    "text-xs font-medium px-2.5 py-1 rounded-full",
                    status.className
                  )}
                >
                  {status.label}
                </span>
                {invoice.status !== "paid" && (
                  <Button size="sm" className="shadow-none">
                    Pay now
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}