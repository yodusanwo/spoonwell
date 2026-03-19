"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#our-story", label: "Our Story" },
  { href: "/#the-farm", label: "The Farm" },
  { href: "/#care-services", label: "Care & Services" },
  { href: "/#contact", label: "Contact" },
] as const;

export function SiteNav() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 max-w-full overflow-x-hidden border-b border-stone-200/80 border-t-[3px] border-t-brand-blue backdrop-blur-sm">
      <div className="relative z-50 bg-white/95 pt-[env(safe-area-inset-top)]">
        {/* Mobile: full-screen overlay menu so links are never cut off or blocked */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-[100] flex flex-col bg-white pt-[env(safe-area-inset-top)] md:hidden"
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex flex-none items-center justify-between border-b border-stone-200 px-4 py-3">
              <span className="text-sm font-semibold text-stone-700">Menu</span>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-md text-stone-600 hover:bg-stone-100"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-6 w-6" strokeWidth={1.75} />
              </button>
            </div>
            <nav
              className="flex flex-1 flex-col gap-1 overflow-auto px-4 py-6"
              aria-label="Mobile primary"
            >
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-lg px-4 py-3.5 text-base font-medium text-stone-800 active:bg-stone-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/#waitlist"
                className="btn-primary mt-4 min-h-12 w-full justify-center py-3.5 text-xs font-bold uppercase tracking-wide"
                onClick={() => setMenuOpen(false)}
              >
                Join the waitlist
              </Link>
            </nav>
          </div>
        )}
        <div className="relative z-50 mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6">
          <Link
            href="/"
            className="relative z-50 flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            aria-label="Spoonwell Living — home"
          >
            <Image
              src="/spoonwell_logo_HQ.png"
              alt="Spoonwell Living"
              width={648}
              height={756}
              className="h-14 w-auto object-contain sm:h-[162px]"
              unoptimized
              priority
            />
          </Link>

          <nav
            className="relative z-50 hidden flex-1 items-center justify-center gap-1 md:flex lg:gap-5"
            aria-label="Primary"
          >
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className="nav-link whitespace-nowrap">
                {label}
              </Link>
            ))}
          </nav>

          <div className="relative z-50 flex shrink-0 items-center gap-2">
            <Link
              href="/#waitlist"
              className="btn-primary hidden min-h-11 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wide md:inline-flex"
              onClick={() => setMenuOpen(false)}
            >
              Join the waitlist
            </Link>

            <button
              type="button"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-stone-200 bg-white text-stone-800 md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <X className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        </div>

      <div className="section-amber-announcement px-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] text-[13px] leading-snug">
        <span className="sm:hidden">
          {onHome
            ? "Limited availability — join the waitlist for updates & tours."
            : "Veteran-centered care near Fort Benning."}
        </span>
        <span className="hidden sm:inline">
          {onHome
            ? "Limited availability — join the waitlist to receive updates and tour invitations."
            : "Spoonwell Living — veteran-centered residential care near Fort Benning."}
        </span>
      </div>
    </header>
  );
}
