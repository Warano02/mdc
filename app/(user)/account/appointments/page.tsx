import type { Metadata } from "next";
import { AppointmentsView } from "./view";

export const metadata: Metadata = {
  title: "Appointments | MDC Canada",
  description:
    "See your upcoming and past appointments with your RCIC agent, including biometrics and consultations.",
};

export default function AppointmentsPage() {
  return <AppointmentsView />;
}