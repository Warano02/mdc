"use client";

import { useState, type SubmitEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { dossier } from "@/mock-data/dossier";

export function ProfileView() {
  const [form, setForm] = useState({
    name: dossier.clientName,
    email: "",
    phone: "",
    nationality: "",
  });
  const [saved, setSaved] = useState(false);

  const set =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((p) => ({ ...p, [field]: e.target.value }));
      setSaved(false);
    };

  const handleSave = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaved(true);
  };

  return (
    <div className="flex flex-col gap-4 w-full py-6 px-4.5 max-w-xl">
      <div>
        <h1 className="text-lg font-semibold">Profile</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Manage your personal information
        </p>
      </div>

      <form onSubmit={handleSave} className="rounded-2xl border border-border bg-background p-5 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" value={form.name} onChange={set("name")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" placeholder="+1 000 000 0000" value={form.phone} onChange={set("phone")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="nationality">Nationality</Label>
          <Input id="nationality" value={form.nationality} onChange={set("nationality")} />
        </div>

        <Separator className="my-1" />

        <div className="flex items-center justify-between">
          {saved && (
            <span className="text-xs text-green-700">Changes saved</span>
          )}
          <Button type="submit" className="ml-auto">
            Save changes
          </Button>
        </div>
      </form>
    </div>
  );
}