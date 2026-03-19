import { HomeLanding } from "@/components/landing/home-landing";

type HomeProps = {
  searchParams: Promise<{ waitlist?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { waitlist } = await searchParams;
  return <HomeLanding waitlist={waitlist} />;
}
