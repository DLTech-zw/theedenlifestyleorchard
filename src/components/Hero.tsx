import { MessageSquare, ArrowRight, Youtube, Star, TrendingUp, Award, MapPin } from 'lucide-react';
import { MOTTO, SLOGAN, YOUTUBE_LINK, WHATSAPP_LINK } from '../data';

interface HeroProps {
  onExploreCatalogue: () => void;
  onViewLaybye: () => void;
}

export default function Hero({ onExploreCatalogue, onViewLaybye }: HeroProps) {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-brand-100 via-brand-50 to-transparent pt-8 pb-16 lg:pt-16 lg:pb-24">
      
      {/* Background organic design patterns */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-brand-200/50 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-accent-100 rounded-full blur-3xl opacity-30 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Location & Star Rating Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-4 py-1.5 bg-brand-500 text-white text-[10px] font-bold tracking-widest rounded-full uppercase">
                <MapPin className="h-3.5 w-3.5 mr-1 text-accent-100" />
                Bulawayo Nursery
              </span>
              <div className="flex items-center space-x-1 text-accent-600 bg-accent-100 border border-accent-200/50 px-4 py-1.5 rounded-full text-xs font-bold">
                <div className="flex">
                  <Star className="h-3 w-3 fill-current text-accent-500" />
                  <Star className="h-3 w-3 fill-current text-accent-500" />
                  <Star className="h-3 w-3 fill-current text-accent-500" />
                  <Star className="h-3 w-3 fill-current text-accent-500" />
                  <Star className="h-3 w-3 fill-current text-accent-500" />
                </div>
                <span className="text-brand-950 font-medium">100% Quality Rate</span>
              </div>
            </div>

            {/* Main Headline (The Motto) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-serif font-bold text-brand-950 tracking-tight leading-[1.12]">
              Unlock Your <span className="text-brand-600 underline decoration-wavy decoration-accent-400 underline-offset-6">Financial Freedom</span> Through Generational Wealth
            </h1>

            {/* Sub-Header Detail */}
            <p className="mt-6 text-lg sm:text-xl text-brand-950/70 leading-relaxed max-w-2xl font-light">
              We are Bulawayo's leading supplier of all fruit tree varieties, offering top-grade 
              <span className="font-semibold text-brand-950"> grafted & non-grafted exotic and indigenous trees</span> designed for high-yielding commercial and residential farm investments.
            </p>

            {/* Quality Slogan Callout */}
            <div className="mt-8 border-l-4 border-accent-500 bg-accent-50 p-5 rounded-r-2xl max-w-xl shadow-sm border-y border-r border-accent-100">
              <blockquote className="text-sm italic font-serif font-medium text-brand-950 leading-relaxed">
                "{SLOGAN}"
              </blockquote>
              <cite className="text-[10px] uppercase tracking-widest font-extrabold text-accent-600 mt-2.5 block">
                — THE EDEN LIFESTYLE GUARANTEE
              </cite>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-primary-cta"
                onClick={onExploreCatalogue}
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-full shadow-lg shadow-accent-500/20 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5 transition-all duration-200 text-sm uppercase tracking-widest cursor-pointer"
              >
                Explore Catalogue
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onViewLaybye}
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-brand-100 text-brand-950 font-bold rounded-full border border-brand-200 hover:border-brand-300 shadow-sm transition-all duration-200 text-sm uppercase tracking-widest cursor-pointer"
              >
                Laybye Calculator
              </button>
            </div>

            {/* YouTube Channel Promotion */}
            <div className="mt-8 pt-6 border-t border-brand-200/40 flex items-center">
              <a
                id="hero-youtube-link"
                href={YOUTUBE_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-3 text-sm text-brand-950/80 hover:text-red-600 font-semibold group transition-colors"
              >
                <div className="bg-red-50 text-red-600 p-2.5 rounded-full group-hover:bg-red-100 transition-colors">
                  <Youtube className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <span className="block font-bold text-brand-950 group-hover:text-red-600 transition-colors">
                    Watch "Sinala" on YouTube
                  </span>
                  <span className="block text-xs font-normal text-brand-950/60">
                    See our success stories, grafting guides & tree varieties
                  </span>
                </div>
              </a>
            </div>

          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              
              {/* Outer Decorative Circle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/10 to-brand-500/5 rounded-3xl -rotate-3 transform scale-105 -z-10" />

              {/* Main Image Container */}
              <div className="overflow-hidden rounded-3xl shadow-2xl bg-white border border-brand-200 p-3">
                <img
                  id="hero-main-image"
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80"
                  alt="Lush Citrus and Fruit Tree Nursery"
                  className="rounded-2xl w-full h-[320px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Quality Badge 1 */}
              <div className="absolute -top-5 -right-5 bg-white p-4 rounded-2xl shadow-xl border border-brand-100 flex items-center space-x-3 animate-bounce" style={{ animationDuration: '6s' }}>
                <div className="bg-accent-100 text-accent-700 p-2 rounded-xl">
                  <TrendingUp className="h-5 w-5 text-accent-500" />
                </div>
                <div>
                  <span className="block text-[10px] font-extrabold text-accent-500 uppercase tracking-wider">Compound Return</span>
                  <span className="block text-sm font-bold text-brand-950">High Yield Assets</span>
                </div>
              </div>

              {/* Floating Quality Badge 2 */}
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-xl border border-brand-100 flex items-center space-x-3">
                <div className="bg-brand-100 text-brand-700 p-2 rounded-xl">
                  <Award className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <span className="block text-[10px] font-extrabold text-brand-500 uppercase tracking-wider">Premium Grade</span>
                  <span className="block text-sm font-bold text-brand-950">Grafted Seedlings</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
