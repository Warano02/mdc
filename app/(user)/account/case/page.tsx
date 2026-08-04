import type { Metadata } from "next";
import { CaseView } from "./view";

export const metadata: Metadata = {
  title: "My Case | MDC Canada",
  description:
    "Follow the progress of your immigration case step by step, from initial consultation to visa issuance.",
};

export default function CasePage() {
  return <CaseView />;
}