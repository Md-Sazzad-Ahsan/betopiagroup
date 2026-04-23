
"use client";

import { useState, useEffect, useRef } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(true);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO, TechCorp",
      quote: "Betopia's solutions transformed our entire infrastructure. The scalability and security they provided exceeded our expectations.",
      avatar: "/images/avatar1.png",
    },
    {
      name: "Michael Chen",
      title: "VP of Engineering, DataFlow",
      quote: "The cloud-native architecture and real-time scalability have been game-changers for our operations. Highly recommended.",
      avatar: "/images/avatar2.png",
    },
    {
      name: "Emily Rodriguez",
      title: "Director of IT, GlobalTech",
      quote: "Their 24/7 global managed support and strategic guidance helped us achieve seamless digital transformation.",
      avatar: "/images/avatar3.png",
    },
    {
      name: "David Kim",
      title: "CEO, InnovateLab",
      quote: "The industry-specific workflows and extensibility frameworks perfectly matched our business needs.",
      avatar: "/images/avatar4.png",
    },
    {
      name: "Lisa Thompson",
      title: "CFO, FinanceHub",
      quote: "Comprehensive enterprise-grade products that streamlined our financial operations and improved compliance.",
      avatar: "/images/avatar5.png",
    },
    {
      name: "James Wilson",
      title: "CTO, CloudScale",
      quote: "Strategic flight and co-sourcing services helped us scale rapidly while maintaining quality standards.",
      avatar: "/images/avatar6.png",
    },
  ];

  const cardsPerView = 3;
  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + cardsPerView);

  // For mobile, show only the first visible card
  const mobileTestimonial = testimonials[currentIndex];

  // Mobile navigation - goes through all testimonials
  const mobileNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  const mobilePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-hide arrows after 5 seconds
  useEffect(() => {
    const resetTimer = () => {
      setShowArrows(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setShowArrows(false);
      }, 5000);
    };

    resetTimer();

    const handleInteraction = () => {
      resetTimer();
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleInteraction);
      container.addEventListener('touchstart', handleInteraction);
      container.addEventListener('click', handleInteraction);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (container) {
        container.removeEventListener('mousemove', handleInteraction);
        container.removeEventListener('touchstart', handleInteraction);
        container.removeEventListener('click', handleInteraction);
      }
    };
  }, []);

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold mb-2 tracking-wider">• OUR SUCCESS STORIES •</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Measurable Results. <br className="sm:hidden"/>Enduring Partnerships
          </h2>
          <h3 className="text-sm md:text-base max-w-3xl mx-auto text-gray-600">
            The true measure of enterprise technology is not the technology itself — it is the business outcomes it delivers for the organizations that depend on it.
          </h3>
        </div>

        {/* Carousel Container */}
        <div className="relative" ref={containerRef}>
          
          {/* Desktop Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-2/5 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all duration-300 items-center justify-center md:flex hidden ${showArrows ? 'opacity-100' : 'opacity-0'}`}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-2/5 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all duration-300 items-center justify-center md:flex hidden ${showArrows ? 'opacity-100' : 'opacity-0'}`}
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Mobile View - Single Card */}
          <div className="md:hidden relative">
            {/* Mobile Navigation Arrows */}
            <button
              onClick={mobilePrev}
              className={`absolute left-0 top-2/5 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 rounded-full bg-white/80 text-gray-900 hover:bg-white transition-all duration-300 items-center justify-center flex shadow-lg ${showArrows ? 'opacity-100' : 'opacity-0'}`}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={mobileNext}
              className={`absolute right-0 top-2/5 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 rounded-full bg-white/80 text-gray-900 hover:bg-white transition-all duration-300 items-center justify-center flex shadow-lg ${showArrows ? 'opacity-100' : 'opacity-0'}`}
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
            
            <div className="bg-gray-50 rounded-2xl p-6 shadow-xl">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <FaStar key={starIndex} className="w-4 h-4 text-orange-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "{mobileTestimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-500 to-blue-500 flex items-center justify-center mr-4 shrink-0">
                  <span className="text-lg font-bold text-white">
                    {mobileTestimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-semibold text-gray-900 truncate">
                    {mobileTestimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs truncate">
                    {mobileTestimonial.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Pagination Counter */}
            <div className="flex justify-center mt-8">
              <span className="text-gray-600 text-sm">
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>
          </div>

          {/* Desktop View - Multiple Cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={currentIndex + index}
                className="bg-gray-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <FaStar key={starIndex} className="w-4 h-4 text-orange-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-4">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-500 to-blue-500 flex items-center justify-center mr-4 shrink-0">
                    <span className="text-lg font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-semibold text-gray-900 truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-xs truncate">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Pagination Dots */}
          <div className="hidden md:flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-orange-500 w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
