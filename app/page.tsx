
import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { SecondHero } from "@/components/SecondHero";
import { ThirdHero } from "@/components/ThirdHero";
import { FourthHero } from "@/components/FourthHero";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <LogoCarousel />
      <SecondHero />
      <ThirdHero />
      <FourthHero />
      <TestimonialCarousel />
      <CTA />
    </div>
  );
}
