import { Sprout, Phone, MessageSquare, Youtube, MapPin } from 'lucide-react';
import { CONTACT_WHATSAPP, WHATSAPP_LINK, YOUTUBE_LINK, SLOGAN, MOTTO } from '../data';

interface FooterProps {
  setView: (view: 'home' | 'catalogue') => void;
}

export default function Footer({ setView }: FooterProps) {
  const handleNav = (view: 'home' | 'catalogue') => {
    setView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-brand-950 text-white pt-16 pb-12 relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 -z-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-brand-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer select-none" onClick={() => handleNav('home')}>
              <div className="bg-accent-500 text-white p-2 rounded-xl flex items-center justify-center">
                <Sprout className="h-5 w-5" />
              </div>
              <span className="text-sm font-serif font-bold tracking-wider text-white">THE EDEN LIFESTYLE</span>
            </div>
            
            <p className="text-xs text-brand-200/80 leading-relaxed max-w-sm font-light">
              {MOTTO}
            </p>

            <p className="text-xs italic font-serif text-accent-400">
              "{SLOGAN}"
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-accent-400">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="text-brand-200 hover:text-accent-400 cursor-pointer transition-colors font-light">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('catalogue')} className="text-brand-200 hover:text-accent-400 cursor-pointer transition-colors font-light">
                  Plant Catalogue
                </button>
              </li>
              <li>
                <a href="#about-section" className="text-brand-200 hover:text-accent-400 transition-colors font-light">
                  Mission Statement
                </a>
              </li>
              <li>
                <a href="#services-section" className="text-brand-200 hover:text-accent-400 transition-colors font-light">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#rates-section" className="text-brand-200 hover:text-accent-400 transition-colors font-light">
                  Laybye Account Rates
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-accent-400">Contact & Address</h4>
            
            <ul className="space-y-3 text-xs">
              <li className="flex items-start text-brand-200 font-light">
                <MapPin className="h-4 w-4 text-accent-500 mr-2.5 flex-shrink-0 mt-0.5" />
                <span>Bulawayo, Matabeleland, Zimbabwe</span>
              </li>

              <li className="flex items-center text-brand-200 font-light">
                <Phone className="h-4 w-4 text-accent-500 mr-2.5 flex-shrink-0" />
                <a href={`tel:${CONTACT_WHATSAPP}`} className="hover:text-accent-400 transition-colors">
                  +263 77 292 4948
                </a>
              </li>

              <li className="flex items-center text-brand-200 font-light">
                <MessageSquare className="h-4 w-4 text-accent-500 mr-2.5 flex-shrink-0" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-accent-400 transition-colors">
                  WhatsApp: +263 77 292 4948
                </a>
              </li>
            </ul>

            {/* Social Icons row */}
            <div className="flex space-x-3 pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-900 hover:bg-accent-500 hover:text-white text-brand-300 p-2.5 rounded-xl transition-all duration-200"
                title="Connect on WhatsApp"
              >
                <MessageSquare className="h-4 w-4 fill-current" />
              </a>
              <a
                href={YOUTUBE_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-900 hover:bg-accent-500 hover:text-white text-brand-300 p-2.5 rounded-xl transition-all duration-200"
                title="Watch Sinala on YouTube"
              >
                <Youtube className="h-4 w-4 fill-current" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower Footer (Copyright) */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-brand-300/60 space-y-3 sm:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} The Eden Lifestyle Orchard & Nursery. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            <span>Our Health & Our Wealth In God's Way</span>
            <span>•</span>
            <span>Bulawayo, Zimbabwe</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
