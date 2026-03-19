import Image from "next/image";
import {
  HouseHeart,
  Mail,
  MapPin,
  Medal,
  Phone,
  Sprout,
} from "lucide-react";
import { FeatureIconWell } from "@/components/landing/feature-icon-well";
import { WaitlistInterestForm } from "@/components/landing/waitlist-interest-form";

const CONTACT_ADDRESS = "767 Englewood Dr, Columbus, GA 31907";

/** Opens in the Google Maps app on many phones, or the browser. */
const CONTACT_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_ADDRESS)}`;

type Props = {
  waitlist?: string;
};

function AmberRule() {
  return (
    <div className="section-amber-announcement border-x-0 text-[13px]">
      Spoonwell Living is accepting inquiries for upcoming availability.
    </div>
  );
}

export function HomeLanding({ waitlist }: Props) {
  return (
    <div className="w-full min-w-0 max-w-full flex-1 overflow-x-hidden">
      {/* 01 Hero — full-bleed soft brand gradient behind content + image */}
      <section className="hero-section-gradient w-full">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="hero-text-overlay">
              <p className="eyebrow mb-3">Near Fort Benning, Georgia</p>
              <h1 className="font-cursive heading-display mb-5 text-4xl leading-tight sm:text-5xl">
                Where veterans find the care they&apos;ve earned.
              </h1>
              <p className="text-lg leading-relaxed text-white">
                A small, intimate residence with 24/7 licensed nursing support —
                built and led by people who understand military life and the
                transition to civilian care.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#waitlist" className="btn-primary uppercase tracking-wide">
                  Join the waitlist
                </a>
                <a href="#our-story" className="btn-secondary border-white/80 bg-white/20 text-white hover:bg-white/30 uppercase tracking-wide">
                  Our story
                </a>
              </div>
            </div>
            <div className="relative min-h-[280px] w-full overflow-hidden rounded-lg border border-stone-200/80 bg-stone-200 lg:min-h-[340px]">
              <Image
                src="/istockphoto-1074625272-1024x1024.jpg"
                alt="Veteran in uniform, back view, walking toward a house — homecoming and transition to civilian life"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02 Trust / stats */}
      <section
        aria-label="At a glance"
        className="section-the-farm-bg w-full"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="stats-trust-outer">
            <div className="stats-trust-grid min-w-0">
              <div className="stats-trust-card">
                <div className="stats-trust-number">8</div>
                <p className="stats-trust-label">Residents maximum</p>
              </div>
              <div className="stats-trust-card">
                <div className="stats-trust-number">&lt; 10 min</div>
                <p className="stats-trust-label">From the VA hospital</p>
              </div>
              <div className="stats-trust-card">
                <span className="stats-trust-badge">Veteran-owned</span>
                <p className="stats-trust-label">Under 24/7 RN + LPN care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Farm */}
      <section id="the-farm" className="scroll-mt-28 section-the-farm-bg">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[260px] w-full overflow-hidden rounded-lg border border-stone-200/80 bg-stone-200/80 lg:min-h-[300px]">
            <Image
              src="/istockphoto-1446076400-1024x1024.jpg"
              alt="The farm — residence and grounds, room to breathe"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow mb-2">The farm</p>
            <h2 className="heading-cursive heading-display mb-4 text-3xl sm:text-4xl">
              Room to breathe — with care close by.
            </h2>
            <p className="leading-relaxed text-stone-600">
              Our home is designed for a small number of residents so every
              person is known by name. Shared spaces encourage community;
              private suites respect dignity and rest.
            </p>
          </div>
        </div>
      </section>

      <AmberRule />

      {/* 03 Our story */}
      <section id="our-story" className="scroll-mt-28">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[300px] w-full overflow-hidden rounded-lg border border-stone-200/80 bg-stone-200/80 lg:sticky lg:top-28 lg:min-h-[360px]">
            <Image
              src="/istockphoto-1167593183-1024x1024.jpg"
              alt="Husband and wife team in their garden — veterans who built Spoonwell"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow mb-2">Our story</p>
            <h2 className="heading-cursive heading-display mb-6 text-3xl sm:text-4xl">
              We built the place we wished existed.
            </h2>
            <p className="mb-4 leading-relaxed text-stone-600">
              We are a husband and wife team — both U.S. Army veterans, both
              living with service-connected disabilities. Our time in uniform
              shaped everything about who we are. And so did what came after.
            </p>
            <p className="mb-4 leading-relaxed text-stone-600">
              Like many veterans, we know firsthand what it feels like to be
              chewed up, spit out, and forgotten the moment you&apos;re no
              longer on active duty. That feeling — of having given everything
              and then being left behind — is something no veteran should ever
              carry alone.
            </p>
            <p className="mb-4 leading-relaxed text-stone-600">
              That&apos;s why we created Spoonwell.
            </p>
            <p className="mb-4 leading-relaxed text-stone-600">
              We wanted to build the kind of place we would have wanted for
              ourselves, or for our fellow soldiers. A home where veterans are
              truly seen, respected, and cared for — by people who understand
              the culture, the sacrifices, and the challenges that come with
              life after service.
            </p>
            <blockquote className="pull-quote">
              <p className="pull-quote-text leading-snug">
                At Spoonwell, we are not just caregivers. We are veterans
                caring for veterans.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 04 What sets us apart */}
      <section id="care-services" className="scroll-mt-28">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="eyebrow mb-2 text-center">What sets us apart</p>
          <h2 className="heading-cursive heading-display mb-12 text-center text-3xl sm:text-4xl">
            Small. Intimate. Veteran-centered.
          </h2>
          <div className="grid min-w-0 gap-8 md:grid-cols-3">
            <article className="min-w-0 rounded-lg border border-stone-200 bg-brand-cream/80 p-6 shadow-sm">
              <FeatureIconWell icon={HouseHeart} tone="blue" />
              <div className="feature-card-accent-blue mb-4" />
              <h3 className="card-heading-blue text-lg">Community</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                With only 6 residents, Spoonwell feels like a household — not a
                facility. Eat together. Look out for one another. The way it
                works in the military.
              </p>
            </article>
            <article className="min-w-0 rounded-lg border border-stone-200 bg-brand-cream/80 p-6 shadow-sm">
              <FeatureIconWell icon={Sprout} tone="forest" />
              <div className="feature-card-accent-forest mb-4" />
              <h3 className="card-heading-forest text-lg">
                Fresh food &amp; gardening
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                We grow food on-site and prepare meals from fresh, wholesome
                ingredients. Residents welcome to participate in the on-site
                garden.
              </p>
            </article>
            <article className="min-w-0 rounded-lg border border-stone-200 bg-brand-cream/80 p-6 shadow-sm">
              <FeatureIconWell icon={Medal} tone="amber" />
              <div className="feature-card-accent-amber mb-4" />
              <h3 className="card-heading-amber text-lg">
                Veteran-centered care
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                We speak the language. We understand the culture. No one here
                needs to explain their service or their struggles.
              </p>
            </article>
          </div>
        </div>
      </section>

      <AmberRule />

      {/* 05 Gallery — top row: feature 50% + portrait pair; bottom row: 3 equal */}
      <section id="gallery" className="scroll-mt-28">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="heading-cursive heading-display mb-10 text-center text-3xl uppercase tracking-wide text-brand-amber sm:text-4xl">
            Life at Spoonwell
          </h2>
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-12">
            {/* Top row: Feature (50%), Garden (25%), Common Area (25%) */}
            <div className="relative min-h-0 w-full overflow-hidden rounded-lg border border-stone-300 bg-stone-200/80 aspect-[2/1] sm:col-span-6 sm:aspect-auto">
              <Image
                src="/9b267b2cce8137d0325549a10e145f47-cc_ft_768.webp"
                alt="Life at Spoonwell — feature"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative min-h-0 w-full overflow-hidden rounded-lg border border-stone-300 bg-stone-200/80 sm:col-span-3 sm:aspect-[3/4]">
              <Image
                src="/9ec85ff40f8b4af4b74298633d6ca50d.jpg"
                alt="Garden — Life at Spoonwell"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>
            <div className="relative min-h-0 w-full overflow-hidden rounded-lg border border-stone-300 bg-stone-200/80 sm:col-span-3 sm:aspect-[3/4]">
              <Image
                src="/design-reference/istockphoto-1503235032-1024x1024.jpg"
                alt="Support and care — Life at Spoonwell"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>
            {/* Bottom row: 3 equal landscape */}
            <div className="relative min-h-0 w-full overflow-hidden rounded-lg border border-stone-300 bg-stone-200/80 sm:col-span-4 sm:aspect-[4/3]">
              <Image
                src="/istockphoto-184926319-1024x1024.jpg"
                alt="Garden path and flowers — Life at Spoonwell"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative min-h-0 w-full overflow-hidden rounded-lg border border-stone-300 bg-stone-200/80 sm:col-span-4 sm:aspect-[4/3]">
              <Image
                src="/istockphoto-1303495846-1024x1024.jpg"
                alt="Support and care outdoors — Life at Spoonwell"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative min-h-0 w-full overflow-hidden rounded-lg border border-stone-300 bg-stone-200/80 sm:col-span-4 sm:aspect-[4/3]">
              <Image
                src="/istockphoto-2214959320-1024x1024.jpg"
                alt="Care close by — Life at Spoonwell"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      <WaitlistInterestForm waitlist={waitlist} />

      <AmberRule />

      {/* 07 Contact */}
      <section id="contact" className="scroll-mt-28">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="min-w-0">
              <p className="eyebrow mb-2">Get in touch</p>
              <h2 className="heading-display mb-6 text-3xl sm:text-4xl">
                Visit us in person
              </h2>
              <p className="mb-6 leading-relaxed text-stone-600">
                We respond personally to every inquiry. Call, email, or stop by
                during scheduled visits.
              </p>
              <ul className="space-y-4 text-stone-700">
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDF4E8] text-brand-forest">
                    <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <span className="font-semibold text-brand-forest">Phone</span>
                    <br />
                    <a href="tel:+17045550100" className="link-brand">
                      (704) 555-0100
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDF4E8] text-brand-forest">
                    <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <span className="font-semibold text-brand-forest">Email</span>
                    <br />
                    <a
                      href="mailto:hello@spoonwellliving.com"
                      className="link-brand break-words"
                    >
                      hello@spoonwellliving.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDF4E8] text-brand-forest">
                    <MapPin className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <span className="font-semibold text-brand-forest">Address</span>
                    <br />
                    <span className="text-stone-700">{CONTACT_ADDRESS}</span>
                  </div>
                </li>
              </ul>
              <p className="mt-6">
                <a
                  href={CONTACT_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-brand inline-flex items-center gap-2 text-sm"
                >
                  <MapPin className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  Open in Google Maps
                </a>
              </p>
            </div>
            <div className="min-w-0 max-w-full">
              <a
                href={CONTACT_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] w-full max-w-full overflow-hidden rounded-lg border border-stone-300 bg-stone-100 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                aria-label="Open location in Google Maps (static map preview)"
              >
                <Image
                  src="/GoogleMap.png"
                  alt={`Map preview: Spoonwell Living at ${CONTACT_ADDRESS}`}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/55 to-transparent px-3 pb-2 pt-10 text-center text-xs font-medium text-white"
                  aria-hidden
                >
                  Tap for directions
                </span>
              </a>
              <p className="mt-2 text-center text-xs leading-snug text-stone-500 sm:text-left">
                Static map image — opens Google Maps in your browser or Maps app.
                No pop-up embed; works reliably on phones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
