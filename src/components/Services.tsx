import * as Icons from 'lucide-react';
import { SERVICES, WHATSAPP_LINK } from '../data';

export default function Services() {
  
  // Helper to render Lucide icons dynamically from data config
  const renderIcon = (name: string) => {
    const LucideIcon = (Icons as any)[name];
    if (LucideIcon) {
      return <LucideIcon className="h-6 w-6 text-accent-500" />;
    }
    return <Icons.Sprout className="h-6 w-6 text-accent-500" />;
  };

  return (
    <section id="services-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold text-accent-500 uppercase tracking-widest block mb-2">
            Professional Assistance
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-950 tracking-tight">
            End-To-End Orchard Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-950/70 font-light">
            We don't just sell trees. We faithfully guide you through every step of your investment, 
            ensuring your orchard thrives for generations to come.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative bg-[#FEFBF6] hover:bg-white rounded-3xl p-8 border border-brand-200/50 hover:border-accent-500/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Price Row */}
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-white group-hover:bg-accent-100 p-4 rounded-full shadow-sm border border-brand-100 group-hover:border-accent-100 transition-colors">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="inline-flex items-center px-4 py-1.5 bg-accent-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {service.price}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-serif font-bold text-brand-950 mb-3 group-hover:text-accent-500 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-brand-950/70 leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Detailed bullet points */}
                <ul className="space-y-2.5 border-t border-brand-200/40 pt-4 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-xs text-brand-950/85">
                      <Icons.Check className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                id={`service-cta-${service.id}`}
                href={`${WHATSAPP_LINK}?text=Hello! I am interested in your ${encodeURIComponent(service.title)} service at Bulawayo.`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center w-full px-4 py-3 bg-white group-hover:bg-accent-500 text-brand-950 group-hover:text-white text-xs font-bold uppercase tracking-widest rounded-full border border-brand-200 group-hover:border-transparent transition-all duration-200 shadow-sm"
              >
                Inquire on WhatsApp
                <Icons.ArrowRight className="h-3.5 w-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Footnote statement */}
        <div className="mt-16 text-center bg-brand-100/40 border border-brand-200/40 p-6 rounded-2xl max-w-2xl mx-auto shadow-sm">
          <p className="text-sm text-brand-950 font-semibold flex items-center justify-center flex-wrap gap-2">
            <span className="bg-accent-500 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md">Bonus</span>
            💡 Our Planting Guide & initial consulting are <span className="text-accent-500 font-extrabold">100% FREE</span> when you buy any of our premium fruit trees.
          </p>
        </div>

      </div>
    </section>
  );
}
