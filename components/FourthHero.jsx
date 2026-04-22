import { 
  RiFileListLine, 
  RiGroupLine, 
  RiBarChartLine, 
  RiThumbUpLine, 
  RiSettings3Line, 
  RiShieldCheckLine 
} from "react-icons/ri";

export function FourthHero() {
  const cards = [
    {
      icon: RiFileListLine,
      title: "Structured Project & Delivery Governance",
      description: "Every engagement operates under a defined delivery framework — with sprint reviews, milestone accountability, SLA dashboards, and executive-level reporting.",
    },
    {
      icon: RiGroupLine,
      title: "Cross-Functional Team Collaboration",
      description: "Built-in collaboration tools, role-based communication channels, and document management that align stakeholders across complex programmes.",
    },
    {
      icon: RiBarChartLine,
      title: "Real-Time Operational Intelligence",
      description: "Live performance dashboards, KPI tracking, and anomaly alerts that give leadership immediate visibility into business operations.",
    },
    {
      icon: RiThumbUpLine,
      title: "Intuitive Enterprise UX",
      description: "Interfaces built for business users — reducing training time, minimizing error rates, and driving faster adoption across every organizational level.",
    },
    {
      icon: RiSettings3Line,
      title: "Adaptive Workflow Configuration",
      description: "Highly configurable workflow engines that accommodate your unique operational processes without custom development.",
    },
    {
      icon: RiShieldCheckLine,
      title: "Enterprise Security Architecture",
      description: "Zero-trust principles, end-to-end encryption, role-based access, and full audit logging embedded at the platform level.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Enterprise Software Engineered for Real-World Complexity
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of enterprise-grade solutions addresses the most challenging business problems with scalable, secure, and innovative technology platforms.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-[#1a1a1a] border border-gray-800 rounded-xl p-8 sm:p-6 hover:bg-[#252525] hover:border-orange-500 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-start">
                <div className="shrink-0 mb-8">
                  <card.icon size={32} className="text-orange-500 group-hover:text-orange-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-md leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
