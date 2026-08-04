import type { Metadata } from "next";
import { BillingView } from "./view";

export const metadata: Metadata = {
  title: "Billing | MDC Canada",
  description:
    "Review your invoices and fee history, and pay any outstanding balance for your case.",
};

export default function BillingPage() {
  return <BillingView />;
}