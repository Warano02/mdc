"use client";

import { format } from "date-fns";
import { Video, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Appointment,
  AppointmentStatus,
  submission,
} from "@/mock-data/dossier";

const modeConfig: Record<Appointment["mode"], { label: string; icon: typeof Video }> = {
  video: { label: "Video call", icon: Video },
  "in-person": { label: "In person", icon: MapPin },
  phone: { label: "Phone", icon: Phone },
};

const statusConfig: Record<AppointmentStatus, { label: string; className: string }> = {
  upcoming: { label: "Upcoming", className: "bg-primary-50 text-primary" },
  completed: { label: "Completed", className: "bg-muted text-muted-foreground" },
  cancelled: { label: "Cancelled", className: "bg-[#feeeea] text-[#f65428]" },
};

export function AppointmentsView() {
  const upcoming = submission.appointments
    .filter((a) => a.status === "upcoming")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const past = submission.appointments
    .filter((a) => a.status !== "upcoming")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const renderAppointment = (apt: Appointment) => {
    const mode = modeConfig[apt.mode];
    const status = statusConfig[apt.status];
    const ModeIcon = mode.icon;
    return (
      <div
        key={apt.id}
        className="flex items-center justify-between gap-4 px-5 py-4 border-b border-border last:border-b-0"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted">
            <ModeIcon className="size-4 text-muted-foreground" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium truncate">{apt.title}</p>
            <p className="text-xs text-muted-foreground">
              {format(new Date(apt.date), "EEEE d MMMM yyyy 'at' HH:mm")} · {mode.label}
            </p>
          </div>
        </div>
        <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full shrink-0", status.className)}>
          {status.label}
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 w-full py-6 px-4.5">
      <div>
        <h1 className="text-lg font-semibold">Appointments</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Your appointments with {submission.agent.name}
        </p>
      </div>

      <div>
        <h2 className="text-sm font-medium text-muted-foreground mb-2">Upcoming</h2>
        <div className="rounded-2xl border border-border bg-background overflow-hidden">
          {upcoming.length > 0 ? (
            upcoming.map(renderAppointment)
          ) : (
            <p className="px-5 py-6 text-sm text-muted-foreground">
              No upcoming appointments.
            </p>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-medium text-muted-foreground mb-2">Past</h2>
        <div className="rounded-2xl border border-border bg-background overflow-hidden">
          {past.length > 0 ? (
            past.map(renderAppointment)
          ) : (
            <p className="px-5 py-6 text-sm text-muted-foreground">
              No past appointments.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}