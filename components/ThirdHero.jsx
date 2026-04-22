import Link from "next/link";

export function ThirdHero() {
  const cards = [
    {
      image: "/images/Card1.png",
      title: "Products",
      description: "Explore our comprehensive suite of enterprise-grade products designed to accelerate your digital transformation.",
      href: "/products",
    },
    {
      image: "/images/Card2.png",
      title: "Services",
      description: "Leverage our expert services for cloud migration, AI implementation, and enterprise software development.",
      href: "/services",
    },
    {
      image: "/images/Card3.png",
      title: "Solutions",
      description: "Discover tailored solutions that address your unique business challenges with cutting-edge technology.",
      href: "/solution",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold mb-2 tracking-wider">• OUR OFFERINGS •</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            One Ecosystem. Every Enterprise Capability
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Betopia combines proprietary software products, specialized services, and multi-cloud solutions into a unified
            technology ecosystem — engineered to simplify complexity and accelerate enterprise growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Link key={index} href={card.href} className="group">
              <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed grow">
                    {card.description}
                  </p>
                  <div className="mt-4 text-orange-500 font-semibold group-hover:text-orange-400 transition-colors">
                    Learn More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
