import Link from "next/link";
import { FaBox, FaStar, FaGlobe } from "react-icons/fa";

// Helper component to render the content side of each section
function SectionContent({ section }) {
  return (
    <div>
      {/* Icon */}
      <div className="mb-4">{section.icon}</div>
      
      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
        {section.title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-300 leading-relaxed mb-6">
        {section.description}
      </p>
      
      {/* Bullet Points */}
      <ul className="space-y-3 mb-6">
        {section.bulletPoints.map((point, idx) => (
          <li key={idx} className="flex items-center text-gray-300">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
            {point}
          </li>
        ))}
      </ul>
      
      {/* Link */}
      <Link 
        href={section.linkHref} 
        className="text-orange-500 font-semibold hover:text-orange-400 transition-colors inline-flex items-center"
      >
        {section.linkText}
      </Link>
    </div>
  );
}

// Helper component to render the image side of each section
function SectionImage({ section }) {
  return (
    <img
      src={section.image}
      alt={section.imageAlt}
      className="w-full h-auto rounded-lg shadow-xl"
    />
  );
}

export function ThirdHero() {
  // Data for each section
  const sections = [
    {
      title: "Products",
      icon: <FaBox className="w-6 h-6 text-blue-500" />,
      description: "Our products offer comprehensive services for data preservation, security, and compliance across your enterprise infrastructure.",
      bulletPoints: ["Cutting Edge technology integration", "Comprehensive suite of enterprice grade product design"],
      linkText: "Explore our Products >",
      linkHref: "/products",
      image: "/images/Card1.png",
      imageAlt: "Enterprise Analytics Dashboard",
      imageFirst: true,
    },
    {
      title: "Services",
      icon: <FaStar className="w-6 h-6 text-blue-500" />,
      description: "Our global advisory teams provide expert guidance and digital transformation strategies tailored to your business needs.",
      bulletPoints: ["Enterprice grade software development", "Cloud Migration and AI Implementation"],
      linkText: "Learn about Services >",
      linkHref: "/services",
      image: "/images/Card2.png",
      imageAlt: "Global Support Network",
      imageFirst: false,
    },
    {
      title: "Solutions",
      icon: <FaGlobe className="w-6 h-6 text-blue-500" />,
      description: "Vertical-specific frameworks designed for various industries, ensuring optimal performance and seamless integration.",
      bulletPoints: ["Cloud-Native Architecture", "Real-time Scalability"],
      linkText: "Discover Solutions >",
      linkHref: "/solution",
      image: "/images/Card3.png",
      imageAlt: "Global Solutions Network",
      imageFirst: true,
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold mb-2 tracking-wider">• OUR OFFERINGS •</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            One Ecosystem. Every Enterprise Capability.
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Integrating global organizations to a unified architecture designed for security, scalability, and seamless integration across every functional unit.
          </p>
        </div>

        {/* All Sections */}
        <div className="space-y-16">
          {sections.map((section, index) => {
            // On mobile, image always comes first (order-1)
            // On desktop (lg), order depends on imageFirst property
            const imageOrder = section.imageFirst ? "lg:order-1" : "lg:order-2";
            const contentOrder = section.imageFirst ? "lg:order-2" : "lg:order-1";
            
            return (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Image Column - always first on mobile */}
                <div className={`order-1 ${imageOrder}`}>
                  <SectionImage section={section} />
                </div>
                
                {/* Content Column - always second on mobile */}
                <div className={`order-2 ${contentOrder}`}>
                  <SectionContent section={section} />
                </div>
                
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
