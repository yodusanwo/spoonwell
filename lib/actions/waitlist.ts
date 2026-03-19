"use server";

import { redirect } from "next/navigation";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/** Waitlist form — required: fullName, email, phone, relationship, careNeeded, timeline. */
export async function submitInterestForm(formData: FormData) {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const relationship = String(formData.get("relationship") ?? "").trim();
  const yearsOfService = String(formData.get("yearsOfService") ?? "").trim();
  const careNeeded = String(formData.get("careNeeded") ?? "").trim();
  const timeline = String(formData.get("timeline") ?? "").trim();
  const referralSource = String(formData.get("referralSource") ?? "").trim();
  const additionalNotes = String(formData.get("additionalNotes") ?? "").trim();
  const branches = formData.getAll("branch").map(String);

  if (!email || !isValidEmail(email)) {
    redirect("/?waitlist=invalid#waitlist");
  }

  // TODO: persist (database, email provider, CRM)
  void fullName;
  void phone;
  void relationship;
  void yearsOfService;
  void careNeeded;
  void timeline;
  void referralSource;
  void additionalNotes;
  void branches;

  redirect("/?waitlist=thanks#waitlist");
}
