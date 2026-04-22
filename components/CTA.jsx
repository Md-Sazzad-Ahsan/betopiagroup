import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

export function CTA() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1a1a1a] border border-white/20 rounded-2xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build the Enterprise Your Ambitions Demand?
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join 300+ organizations that trust Betopia to architect, secure, and scale their most critical technology platforms. Let's start with a conversation.
          </p>
          <Link href="/consultation" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Book a Consultation
            <RiArrowRightLine size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
