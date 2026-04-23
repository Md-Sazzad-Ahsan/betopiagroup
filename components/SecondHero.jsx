export function SecondHero() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        {/* Beyond Connectivity Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
          {/* Left - Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start text-blue-600 text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              BEYOND CONNECTIVITY
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              Betopia is a collective of visionary engineers and strategists dedicated to architecting the next generation of digital infrastructure. We bridge the gap between complex technological potential and seamless business execution.
            </p>
          </div>
          
          {/* Right - Image with Overlay Card */}
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
            <img 
              src="/images/SecondHero.png" 
              alt="Global Connectivity" 
              className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
            />
            {/* Global Deployments Card */}
            <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 bg-white rounded-xl shadow-lg p-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">150+</p>
                  <p className="text-xs text-gray-600">Global Deployments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Core Pillars Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Pillars
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across multiple domains, ensuring comprehensive solutions for your digital transformation journey.
            </p>
          </div>

          {/* Three Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Cloud-Native Platforms */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6 lg:p-8 h-full flex flex-col">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                  <svg className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  Cloud-Native Platforms
                </h3>
                <p className="text-gray-600 leading-relaxed grow">
                  Delivering secure, scalable, and cloud-native software platforms designed for modern digital businesses with high availability and performance optimization.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-blue-500 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - AI & Cybersecurity */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6 lg:p-8 h-full flex flex-col">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                  <svg className="w-7 h-7 text-purple-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  AI & Cybersecurity
                </h3>
                <p className="text-gray-600 leading-relaxed grow">
                  Empowering organizations with AI-driven technologies and enterprise-grade software solutions combining intelligent automation and secure architectures.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-purple-500 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Multi-Cloud Solutions */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6 lg:p-8 h-full flex flex-col">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
                  <svg className="w-7 h-7 text-green-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  Multi-Cloud Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed grow">
                  Providing vendor-neutral solutions across Microsoft Azure, AWS, and Google Cloud with strong cybersecurity foundations for mission-critical systems.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-green-500 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
