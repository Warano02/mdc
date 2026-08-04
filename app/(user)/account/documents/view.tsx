"use client";

import { format } from "date-fns";
import { FileText, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DocumentStatus, dossier } from "@/mock-data/dossier";

const statusConfig: Record<
  DocumentStatus,
  { label: string; className: string }
> = {
  approved: { label: "Approved", className: "bg-green-50 text-green-700" },
  "in-review": { label: "In review", className: "bg-yellow-50 text-yellow-700" },
  required: { label: "Required", className: "bg-[#feeeea] text-[#f65428]" },
};

export function DocumentsView() {
  return (
    <div className="flex flex-col gap-4 w-full py-6 px-4.5">
      <div>
        <h1 className="text-lg font-semibold">Documents</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Documents required for case {dossier.reference}
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-background overflow-hidden">
        {dossier.documents.map((doc, index) => {
          const status = statusConfig[doc.status];
          return (
            <div
              key={doc.id}
              className={cn(
                "flex items-center justify-between gap-4 px-5 py-4",
                index !== dossier.documents.length - 1 && "border-b border-border"
              )}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted">
                  <FileText className="size-4 text-muted-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {doc.updatedAt
                      ? `Updated on ${format(new Date(doc.updatedAt), "d MMM yyyy")}`
                      : "Not uploaded yet"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span
                  className={cn(
                    "text-xs font-medium px-2.5 py-1 rounded-full",
                    status.className
                  )}
                >
                  {status.label}
                </span>
                {doc.status === "required" && (
                  <Button size="sm" variant="outline" className="gap-1.5 shadow-none">
                    <Upload className="size-3.5" />
                    Upload
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