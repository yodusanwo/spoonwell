import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Home",
};

export default function TheHomePage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-stone-900">
        The home
      </h1>
      <p className="leading-relaxed text-stone-600">
        Describe the residence, capacity (e.g. six residents), amenities, and daily
        life — aligned with wireframe &quot;The Home&quot; section.
      </p>
    </main>
  );
}
