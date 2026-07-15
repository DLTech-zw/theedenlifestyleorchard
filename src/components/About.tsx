import { Heart, Landmark, Sprout, ShieldCheck, PlayCircle } from 'lucide-react';
import { MISSION, VISION, SLOGAN, YOUTUBE_LINK } from '../data';

export default function About() {
  return (
    <section id="about-section" className="py-24 bg-white relative overflow-hidden">
      
      {/* Subtle organic decorations */}
      <div className="absolute top-1/2 left-0 -z-10 w-72 h-72 bg-brand-100/50 rounded-full blur-3xl opacity-60 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold text-accent-500 uppercase tracking-widest block mb-2">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-950 tracking-tight">
            The Eden Lifestyle Way
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-950/70 font-light">
            Rooted in Bulawayo, we believe that agriculture is the ultimate vehicle for wellness, 
            regional self-reliance, and generational prosperity.
          </p>
        </div>

        {/* Mission & Vision Cards Row */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-20">
          
          {/* Mission Card */}
          <div className="bg-[#FEFBF6] rounded-3xl p-8 sm:p-10 border border-brand-200/50 flex flex-col justify-between hover:border-accent-500/30 transition-colors">
            <div>
              <div className="bg-accent-500 text-white p-3 rounded-full w-fit shadow-md shadow-accent-500/10 mb-6">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-950 mb-4">
                Our Mission Statement
              </h3>
              <p className="text-sm sm:text-base text-brand-950 font-medium leading-relaxed font-serif italic border-l-2 border-accent-500 pl-4 py-1">
                "{MISSION}"
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-brand-200/40 text-xs text-accent-600 font-bold uppercase tracking-wider flex items-center">
              <ShieldCheck className="h-4.5 w-4.5 text-accent-500 mr-2" />
              Our Health & Our Wealth In God's Way
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-[#FEFBF6] rounded-3xl p-8 sm:p-10 border border-brand-200/50 flex flex-col justify-between hover:border-accent-500/30 transition-colors">
            <div>
              <div className="bg-accent-500 text-white p-3 rounded-full w-fit shadow-md shadow-accent-500/10 mb-6">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-950 mb-4">
                Our Strategic Vision
              </h3>
              <p className="text-sm sm:text-base text-brand-950/70 leading-relaxed font-light">
                {VISION}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-brand-200/40 text-xs text-accent-600 font-bold uppercase tracking-wider flex items-center">
              <Sprout className="h-4.5 w-4.5 text-accent-500 mr-2" />
              Regional Food & Financial Self-Reliance
            </div>
          </div>

        </div>

        {/* Video / Gallery Engagement Card */}
        <div className="bg-brand-950 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          
          {/* Subtle geometric grid background overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#C17D3C_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
          
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Visual Callout */}
            <div className="lg:col-span-7">
              <span className="text-[10px] font-bold text-accent-400 uppercase tracking-widest block mb-3">
                YouTube Channel Sinala
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight mb-4">
                Watch Our Nursery & Grafting Success Stories Live
              </h3>
              <p className="text-sm sm:text-base text-brand-100/80 leading-relaxed mb-6 font-light">
                Step inside our Bulawayo nursery! Follow our team as we share professional grafting methods, seedling care tutorials, drip irrigation setups, and success testimonials from regional farmers on our official YouTube channel, <strong className="text-white font-bold">Sinala</strong>.
              </p>
              
              <ul className="grid grid-cols-2 gap-4 mb-8 text-xs text-brand-200 font-light">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2" />
                  Grafting & Breeding Tutorials
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2" />
                  Farm Investment Models
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2" />
                  Regional Climate Insights
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2" />
                  Customer Orchard Walks
                </li>
              </ul>

              <a
                id="about-youtube-button"
                href={YOUTUBE_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-full transition-all duration-200 shadow-md text-xs uppercase tracking-widest"
              >
                <PlayCircle className="h-5 w-5 mr-2 text-white" />
                Subscribe to Sinala
              </a>
            </div>

            {/* Visual Photo (Right) */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border-2 border-brand-800 shadow-lg relative group">
                <img
                  src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80"
                  alt="Farmer checking organic trees"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-accent-400 tracking-wider">The Eden Nursery</span>
                    <span className="block text-sm font-serif font-bold text-white">Quality Can Never Be Substituted</span>
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
