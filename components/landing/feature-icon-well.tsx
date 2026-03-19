import type { LucideIcon } from "lucide-react";

const tones = {
  blue: "bg-[#EBF4FB] text-brand-blue",
  forest: "bg-[#EDF4E8] text-brand-forest",
  amber: "bg-[#FBF3E3] text-brand-amber",
} as const;

type Tone = keyof typeof tones;

export function FeatureIconWell({
  icon: Icon,
  tone,
}: {
  icon: LucideIcon;
  tone: Tone;
}) {
  return (
    <div
      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16 ${tones[tone]}`}
      aria-hidden
    >
      <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.5} />
    </div>
  );
}
