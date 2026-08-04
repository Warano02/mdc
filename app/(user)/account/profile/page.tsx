import type { Metadata } from "next";
import { ProfileView } from "./view";

export const metadata: Metadata = {
  title: "Profile | MDC Canada",
  description: "Manage your personal information and contact details.",
};

export default function ProfilePage() {
  return <ProfileView />;
}