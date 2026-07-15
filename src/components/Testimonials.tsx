import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="py-24 bg-brand-50/20 border-y border-brand-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold text-accent-500 uppercase tracking-widest block mb-2">
            Farmer Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-950 tracking-tight">
            Success Stories From Our Region
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-950/70 font-light">
            Read how other investors and smallholders are establishing financial security and creating generational wealth the Eden Lifestyle way.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="bg-white rounded-3xl p-8 border border-brand-200/50 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon decorative */}
                <Quote className="absolute top-6 right-8 h-8 w-8 text-accent-100 fill-current opacity-60" />

                {/* Rating stars */}
                <div className="flex items-center space-x-1 mb-6 text-accent-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-accent-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm text-brand-950/80 leading-relaxed italic mb-8 font-serif">
                  "{t.content}"
                </p>
              </div>

              {/* Author info */}
              <div className="border-t border-brand-200/40 pt-5 flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-accent-100 text-accent-700 font-bold flex items-center justify-center text-xs tracking-wider uppercase select-none">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-950 block">
                    {t.name}
                  </h4>
                  <span className="block text-[10px] text-brand-950/50 font-bold uppercase tracking-wider">
                    {t.role} • <strong className="text-accent-500">{t.location}</strong>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="text-xs text-brand-950/60 font-medium">
            We are proud to serve Bulawayo, Matopo, Lupane, Gwanda, Gweru, and the entire Matabeleland region. Join our community of prosperous lifestyle farmers today!
          </p>
        </div>

      </div>
    </section>
  );
}
