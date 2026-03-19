import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Care Services",
};

export default function CareServicesPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-stone-900">
        Care services
      </h1>
      <p className="leading-relaxed text-stone-600">
        Outline levels of care, staffing, and what families can expect.
      </p>
    </main>
  );
}
