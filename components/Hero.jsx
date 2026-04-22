"use client";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">
          From <span className="text-orange-500 text-3xl md:text-6xl">Bangladesh to the World</span> <br /> <span className="text-3xl md:text-5xl">Smarter Enterprise Technology</span>
        </h1>
        <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Betopia Limited architects, deploys, and manages AI-powered cloud and enterprise software platforms that help organizations operate with greater speed, security, and strategic clarity — wherever business takes them.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="group flex items-center justify-center gap-2 px-5 py-4 bg-linear-to-r from-orange-600 via-orange-500 to-orange-400 text-white rounded-full hover:from-orange-600 hover:via-orange-600 hover:to-orange-500 transition-all duration-300 w-full sm:w-auto md:text-sm font-semibold">
            Start Your Transformation
            <IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link href="/solutions" className="group flex items-center justify-center gap-2 px-5 py-4 bg-white text-black  rounded-full hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto md:text-sm font-semibold">
            Explore Our Solutions
            <IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
