import type { Metadata } from "next";
import { AccountView } from "./view";

export const metadata: Metadata = {
  title: "My Account | MDC Canada",
  description:
    "Your personal MDC Canada dashboard: track your case status, pending documents, upcoming appointments, and invoices at a glance.",
};

export default function AccountPage() {
  return <AccountView />;
}