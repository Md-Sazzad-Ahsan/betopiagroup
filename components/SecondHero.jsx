export function SecondHero() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-base md:text-md text-gray-600 max-w-xl mx-auto">
            Betopia delivers cloud-native, AI-powered platforms combining global standards with unmatched speed and ownership.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Combined Image and Text Block - Top */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-stretch">
            <div className="md:w-3/5 flex items-center justify-center p-1">
              <img
                src="/images/SecondHero.png"
                alt="Cloud and Security Solutions"
                className="w-full h-auto object-contain rounded-t-xl md:rounded-t-none md:rounded-l-xl"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Delivering secure, cloud-native, and AI-powered software platforms
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Delivering secure, scalable, and cloud-native software platforms designed for modern digital businesses. Our solutions ensure high availability, performance optimization, and seamless deployment across evolving infrastructure environments.
              </p>
            </div>
          </div>

          {/* Text Block - Bottom Left */}
          <div className="bg-white rounded-xl shadow-lg p-5 md:p-8 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Expertise in Cloud, AI, Cybersecurity, and enterprise-grade products
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Empowering organizations with AI-driven technologies and enterprise-grade software solutions. We combine intelligent automation, advanced analytics, and secure architectures to drive smarter business operations.
            </p>
          </div>

          {/* Text Block - Bottom Right */}
          <div className="bg-white rounded-xl shadow-lg p-5 md:p-8 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Vendor-neutral solutions across Microsoft Azure, AWS, and Google Cloud
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Providing vendor-neutral solutions across Microsoft Azure, AWS, and Google Cloud with strong cybersecurity foundations. Our approach ensures flexibility, resilience, and secure infrastructure for mission-critical systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
