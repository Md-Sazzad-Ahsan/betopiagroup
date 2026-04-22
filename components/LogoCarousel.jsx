"use client";

import { useState, useEffect, useRef } from "react";

const logos = [
  { name: "Microsoft", src: "/logo/Microsoft.png" },
  { name: "AWS", src: "/logo/AWS.png" },
  { name: "Google Cloud", src: "/logo/GoogleCloud.png" },
  { name: "Oracle", src: "/logo/Oracle.png" },
  { name: "Deloitte", src: "/logo/Deloitte.png" },
  { name: "SAP", src: "/logo/SAP.png" },
  { name: "Accenture", src: "/logo/Accenture_logo.svg" },
];

export function LogoCarousel() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 0.5;

    const scroll = () => {
      if (!isPaused) {
        scrollAmount += speed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm lg:text-md font-semibold text-center text-gray-500 mb-12">
          Partnering with the world's leading technology platforms
        </h2>
        
        <div 
          ref={scrollRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-12 sm:gap-20 lg:gap-32 items-center">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="shrink-0 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 sm:h-10 lg:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
