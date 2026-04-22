
import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { SecondHero } from "@/components/SecondHero";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <LogoCarousel />
      <SecondHero />
    </div>
  );
}
