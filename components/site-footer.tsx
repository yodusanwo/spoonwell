import Link from "next/link";

const quickLinks = [
  { href: "/#our-story", label: "Our Story" },
  { href: "/#the-farm", label: "The Farm" },
  { href: "/#care-services", label: "Care & Services" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#waitlist", label: "Waitlist" },
  { href: "/#contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="footer-surface mt-auto max-w-full overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <Link href="/" className="footer-logo-pill">
              Spoonwell Living
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/90">
              A small, intimate residence where veterans receive dignified care
              from people who understand service — near Fort Benning, Georgia.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/70">
              Quick links
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/90 underline-offset-2 hover:text-white hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/70">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-white/90">
              <li>
                <a href="tel:+17045550100" className="hover:text-white">
                  (704) 555-0100
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@spoonwellliving.com"
                  className="break-words hover:text-white"
                >
                  hello@spoonwellliving.com
                </a>
              </li>
              <li className="max-w-xs leading-snug">
                767 Englewood Dr
                <br />
                Columbus, GA 31907
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/90 transition-colors hover:border-white hover:bg-white/10"
              >
                <span className="text-xs font-bold">f</span>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/90 transition-colors hover:border-white hover:bg-white/10"
              >
                <span className="text-xs font-bold">in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-sub">
        <div className="mx-auto flex max-w-6xl flex-col flex-wrap items-center justify-center gap-2 px-4 sm:flex-row sm:gap-6">
          <span>© {new Date().getFullYear()} Spoonwell Living. All rights reserved.</span>
          <span className="hidden sm:inline text-white/40" aria-hidden>
            |
          </span>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
