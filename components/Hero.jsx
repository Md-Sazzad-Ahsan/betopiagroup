"use client";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      id="hero"
    >
      {/* Background Image */}
      <Image
        src="/images/OfficeBG.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        aria-hidden="true"
      />

      {/* Dark overlay — fades from dark on left to clear on right */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.65)_40%,transparent_55%)]"
        aria-hidden="true"
      />

      {/* Blur overlay — full blur on mobile, fading blur on desktop */}
      <div
        className="absolute inset-0 backdrop-blur-2xl lg:mask-[linear-gradient(to_right,black_0%,transparent_45%)] lg:[-webkit-mask-image:linear-gradient(to_right,black_0%,transparent_45%)]"
        aria-hidden="true"
      />

      {/* Texture overlay — dot pattern on mobile only (after blur) */}
      <div
        className="absolute inset-0 opacity-20 lg:hidden"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 2px)`,
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full min-h-screen flex items-start md:items-center">
        <div className="w-full lg:w-1/2 px-5 sm:px-8 md:px-16 lg:px-20 xl:px-24 py-24 mt-24 sm:mt-0 sm:pt-24 sm:pb-32 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 leading-[1.1] tracking-tight">
            From{" "}
            <span className="text-orange-500">
              Bangladesh
              <br className="block sm:hidden" />
              {" "}to the World
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8 leading-tight tracking-wide">
            Smarter Enterprise Technology
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-12 leading-[1.6] sm:leading-[1.7] font-light">
            Betopia Limited architects, deploys, and manages AI-powered cloud
            and enterprise software platforms that help organizations operate
            with greater speed, security, and strategic clarity — wherever
            business takes them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-linear-to-r from-orange-600 via-orange-500 to-orange-400 text-white rounded-full hover:from-orange-600 hover:via-orange-600 hover:to-orange-500 hover:scale-105 transition-all duration-300 w-full sm:w-auto text-sm font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
              id="hero-cta-primary"
            >
              Start Your Transformation
              <IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/solutions"
              className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto text-sm font-semibold"
              id="hero-cta-secondary"
            >
              Explore Our Solutions
              <IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
