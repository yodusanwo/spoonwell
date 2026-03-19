import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteNav />
      <div className="flex min-w-0 max-w-full flex-1 flex-col overflow-x-hidden">
        {children}
      </div>
      <SiteFooter />
    </>
  );
}
