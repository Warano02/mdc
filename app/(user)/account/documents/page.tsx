import type { Metadata } from "next";
import { DocumentsView } from "./view";

export const metadata: Metadata = {
  title: "Documents | MDC Canada",
  description:
    "View, upload, and track the status of the documents required for your immigration case.",
};

export default function DocumentsPage() {
  return <DocumentsView />;
}