import { submitInterestForm } from "@/lib/actions/waitlist";

const RELATIONSHIPS = [
  { value: "myself", label: "Myself" },
  { value: "family_member", label: "Family Member" },
  { value: "caregiver_advocate", label: "Caregiver / Advocate" },
  { value: "other", label: "Other" },
] as const;

const BRANCHES = [
  "Army",
  "Navy",
  "Air Force",
  "Marines",
  "Coast Guard",
  "Space Force",
] as const;

const TIMELINES = [
  { value: "immediately", label: "Immediately" },
  { value: "within_3_months", label: "Within 3 months" },
  { value: "within_6_months", label: "Within 6 months" },
  { value: "planning_ahead", label: "Planning Ahead" },
] as const;

const SOURCES = [
  { value: "referral", label: "Referral" },
  { value: "google_search", label: "Google / Search" },
  { value: "social_media", label: "Social Media" },
  { value: "va_provider", label: "VA / Provider" },
  { value: "fort_benning", label: "Fort Benning" },
  { value: "other", label: "Other" },
] as const;

type Props = {
  waitlist?: string;
};

export function WaitlistInterestForm({ waitlist }: Props) {
  return (
    <section
      id="waitlist"
      className="scroll-mt-28 waitlist-section-bg border-t border-stone-200/80 px-4 py-16 sm:px-6"
    >
      <div className="mx-auto min-w-0 max-w-4xl">
        <div className="mb-10 text-center">
          <p className="eyebrow mb-2">
            Limited availability — 6 residents maximum
          </p>
          <h2 className="heading-display mb-3 text-3xl sm:text-4xl">
            Join the Waitlist
          </h2>
          <p className="text-sm leading-relaxed text-stone-600">
            Complete the form below and we&apos;ll be in touch personally within
            2–3 business days.
          </p>
        </div>

        {waitlist === "thanks" && (
          <div className="notice-box mx-auto mb-8 max-w-2xl" role="status">
            <p className="notice-box-heading mb-1">Thank you</p>
            <p className="text-sm text-stone-700">
              We received your interest form and will reach out personally.
            </p>
          </div>
        )}
        {waitlist === "invalid" && (
          <div className="notice-box mx-auto mb-8 max-w-2xl" role="alert">
            <p className="notice-box-heading mb-1">Email required</p>
            <p className="text-sm text-stone-700">
              Please enter a valid email address so we can respond.
            </p>
          </div>
        )}

        <form
          action={submitInterestForm}
          className="min-w-0 space-y-6 rounded-xl border border-stone-200 bg-white/95 p-6 shadow-sm sm:p-8 md:p-10"
        >
          {/* Row 1: Full Name | Email */}
          <div className="grid min-w-0 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="form-label">
                Full name (prospective resident) <span className="text-red-600">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                autoComplete="name"
                className="field-white"
                placeholder="First and last name"
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                Email address <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="field-white"
                placeholder="email@example.com"
              />
            </div>
          </div>

          {/* Row 2: Phone | Relationship + tags */}
          <div className="grid min-w-0 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="form-label">
                Phone number <span className="text-red-600">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="field-white"
                placeholder="Best number to reach you"
              />
            </div>
            <div>
              <label className="form-label">
                Relationship to resident <span className="text-red-600">*</span>
              </label>
              <div className="mt-1 flex flex-wrap gap-2">
                {RELATIONSHIPS.map(({ value, label }) => (
                  <label key={value} className="form-tag-forest">
                    <input
                      type="radio"
                      name="relationship"
                      value={value}
                      required
                      className="sr-only"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: Branch + tags | Years of service */}
          <div className="grid min-w-0 gap-6 sm:grid-cols-2">
            <div>
              <label className="form-label">Branch of service</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {BRANCHES.map((b) => (
                  <label key={b} className="form-tag-forest">
                    <input
                      type="checkbox"
                      name="branch"
                      value={b}
                      className="sr-only"
                    />
                    {b}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="yearsOfService" className="form-label">
                Approximate years of service
              </label>
              <input
                id="yearsOfService"
                name="yearsOfService"
                type="text"
                className="field-white"
                placeholder="e.g. 2005–2012"
              />
            </div>
          </div>

          {/* Row 4 full width: Type of care needed */}
          <div className="sm:col-span-2">
            <label htmlFor="careNeeded" className="form-label">
              Type of care needed <span className="text-red-600">*</span>
            </label>
            <textarea
              id="careNeeded"
              name="careNeeded"
              required
              className="field-textarea mt-1"
              placeholder="e.g. memory care, mobility assistance, medication management, companionship..."
              rows={3}
            />
          </div>

          {/* Row 5: Anticipated timeline + tags | How did you hear + tags */}
          <div className="grid min-w-0 gap-6 sm:grid-cols-2">
            <div>
              <label className="form-label">
                Anticipated timeline <span className="text-red-600">*</span>
              </label>
              <div className="mt-1 flex flex-wrap gap-2">
                {TIMELINES.map(({ value, label }) => (
                  <label key={value} className="form-tag-forest">
                    <input
                      type="radio"
                      name="timeline"
                      value={value}
                      required
                      className="sr-only"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="form-label">
                How did you hear about Spoonwell?
              </label>
              <div className="mt-1 flex flex-wrap gap-2">
                {SOURCES.map(({ value, label }) => (
                  <label key={value} className="form-tag-forest">
                    <input
                      type="radio"
                      name="referralSource"
                      value={value}
                      className="sr-only"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Row 6 full width: Additional notes */}
          <div className="sm:col-span-2">
            <label htmlFor="additionalNotes" className="form-label">
              Additional notes
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              className="field-textarea mt-1"
              placeholder="Anything else you'd like us to know..."
              rows={3}
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="btn-primary w-full max-w-full px-6 py-3 text-sm font-bold uppercase tracking-wide sm:w-auto sm:min-w-[240px] sm:px-10"
            >
              Submit interest form
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
