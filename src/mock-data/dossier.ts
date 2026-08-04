export type CaseStepStatus = "completed" | "current" | "upcoming";

export interface CaseStep {
  id: string;
  title: string;
  description: string;
  status: CaseStepStatus;
  date: string | null;
}

export interface Agent {
  name: string;
  title: string;
  photo: string;
  email: string;
  phone: string;
}

export type DocumentStatus = "approved" | "in-review" | "required";

export interface CaseDocument {
  id: string;
  name: string;
  status: DocumentStatus;
  updatedAt: string | null;
}

export type AppointmentStatus = "upcoming" | "completed" | "cancelled";
export type AppointmentMode = "video" | "in-person" | "phone";

export interface Appointment {
  id: string;
  title: string;
  date: string;
  mode: AppointmentMode;
  status: AppointmentStatus;
}

export interface Message {
  id: string;
  from: "agent" | "client";
  author: string;
  content: string;
  date: string;
}

export type InvoiceStatus = "paid" | "due" | "overdue";

export interface Invoice {
  id: string;
  label: string;
  amount: number;
  currency: string;
  issuedAt: string;
  dueAt: string;
  status: InvoiceStatus;
}

export interface Dossier {
  clientName: string;
  visaType: string;
  reference: string;
  agent: Agent;
  steps: CaseStep[];
  documents: CaseDocument[];
  appointments: Appointment[];
  messages: Message[];
  invoices: Invoice[];
}

export const dossier: Dossier = {
  clientName: "MDC Client",
  visaType: "Express Entry — Permanent Residence",
  reference: "MDC-2026-00482",
  agent: {
    name: "Giovanni Mariella",
    title: "RCIC — Regulated Canadian Immigration Consultant",
    photo: "/img/pp/Giovanni_Mariella-RCIC-picture-MDC-Canada-new.png",
    email: "giovanni.mariella@mdccanada.ca",
    phone: "+1 (514) 555-0142",
  },
  steps: [
    {
      id: "consultation",
      title: "Initial consultation",
      description: "Assessment of your profile and the immigration program that best fits your situation.",
      status: "completed",
      date: "2026-05-12",
    },
    {
      id: "documents",
      title: "Document collection",
      description: "Gathering the supporting documents required for your case.",
      status: "completed",
      date: "2026-06-02",
    },
    {
      id: "submission",
      title: "Application submission",
      description: "Official filing of your application with IRCC.",
      status: "completed",
      date: "2026-06-20",
    },
    {
      id: "biometrics",
      title: "Biometrics",
      description: "Fingerprints and photo collected at a designated Visa Application Centre.",
      status: "current",
      date: "2026-08-10",
    },
    {
      id: "interview",
      title: "Interview",
      description: "Interview with an immigration officer, if required for your case.",
      status: "upcoming",
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
  ],
  documents: [
    { id: "doc-1", name: "Passport (certified copy)", status: "approved", updatedAt: "2026-06-01" },
    { id: "doc-2", name: "Bank statements (last 6 months)", status: "approved", updatedAt: "2026-06-02" },
    { id: "doc-3", name: "Language test results (IELTS)", status: "in-review", updatedAt: "2026-07-18" },
    { id: "doc-4", name: "Educational Credential Assessment (ECA)", status: "in-review", updatedAt: "2026-07-20" },
    { id: "doc-5", name: "Police certificate", status: "required", updatedAt: null },
    { id: "doc-6", name: "Passport-style photos", status: "required", updatedAt: null },
  ],
  appointments: [
    { id: "apt-1", title: "Biometrics appointment — Montreal VAC", date: "2026-08-10T10:00:00", mode: "in-person", status: "upcoming" },
    { id: "apt-2", title: "Case follow-up with Giovanni Mariella", date: "2026-08-18T15:30:00", mode: "video", status: "upcoming" },
    { id: "apt-3", title: "Initial consultation", date: "2026-05-12T09:00:00", mode: "video", status: "completed" },
    { id: "apt-4", title: "Document review", date: "2026-06-02T13:00:00", mode: "phone", status: "completed" },
  ],
  messages: [
    { id: "msg-1", from: "agent", author: "Giovanni Mariella", content: "Hi! Your application has been submitted to IRCC. I'll let you know as soon as biometrics are confirmed.", date: "2026-06-20T11:05:00" },
    { id: "msg-2", from: "client", author: "You", content: "Thanks Giovanni, I'll book my biometrics slot this week.", date: "2026-06-20T14:22:00" },
    { id: "msg-3", from: "agent", author: "Giovanni Mariella", content: "Great. We're still missing your police certificate and photos — could you upload them as soon as possible?", date: "2026-07-20T09:40:00" },
  ],
  invoices: [
    { id: "inv-1", label: "Initial consultation fee", amount: 350, currency: "CAD", issuedAt: "2026-05-12", dueAt: "2026-05-19", status: "paid" },
    { id: "inv-2", label: "Representation fee — Express Entry", amount: 2200, currency: "CAD", issuedAt: "2026-06-02", dueAt: "2026-06-16", status: "paid" },
    { id: "inv-3", label: "Government fee — Right of Permanent Residence", amount: 515, currency: "CAD", issuedAt: "2026-07-25", dueAt: "2026-08-15", status: "due" },
  ],
};