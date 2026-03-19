import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-stone-900">
        Contact
      </h1>
      <p className="mb-6 leading-relaxed text-stone-600">
        Phone, email, and inquiry form can live here. The main waitlist signup
        stays on the{" "}
        <Link href="/#waitlist" className="link-brand">
          home page
        </Link>{" "}
        unless you want a duplicate form.
      </p>
    </main>
  );
}
