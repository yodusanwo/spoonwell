import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
};

export default function OurStoryPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-stone-900">
        Our story
      </h1>
      <p className="leading-relaxed text-stone-600">
        Content from your wireframe section 04 goes here — veteran-owned narrative,
        photography, and values.
      </p>
    </main>
  );
}
