import { useState } from 'react';
import { Sprout, Phone, MessageSquare, Menu, X, ShoppingBag } from 'lucide-react';
import { CONTACT_WHATSAPP, WHATSAPP_LINK } from '../data';

interface HeaderProps {
  currentView: 'home' | 'catalogue';
  setView: (view: 'home' | 'catalogue') => void;
  cartCount: number;
  onOpenCart: () => void;
}

export default function Header({ currentView, setView, cartCount, onOpenCart }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (view: 'home' | 'catalogue') => {
    setView(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand */}
          <div className="flex items-center space-x-3 cursor-pointer select-none" onClick={() => handleNav('home')}>
            <div className="bg-brand-600 text-white p-2.5 rounded-full shadow-md shadow-brand-600/10 flex items-center justify-center">
              <Sprout className="h-6 w-6" id="logo-icon" />
            </div>
            <div>
              <span className="text-xl font-serif font-bold tracking-tight text-brand-950 block leading-tight">
                THE EDEN LIFESTYLE
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-accent-500 block">
                Orchard & Nursery • Bulawayo
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest">
            <button
              id="nav-home"
              onClick={() => handleNav('home')}
              className={`transition-colors duration-200 cursor-pointer ${
                currentView === 'home' ? 'text-accent-500 border-b-2 border-accent-500 pb-1' : 'text-brand-950/70 hover:text-accent-500'
              }`}
            >
              Home
            </button>
            <button
              id="nav-catalogue"
              onClick={() => handleNav('catalogue')}
              className={`transition-colors duration-200 cursor-pointer ${
                currentView === 'catalogue' ? 'text-accent-500 border-b-2 border-accent-500 pb-1' : 'text-brand-950/70 hover:text-accent-500'
              }`}
            >
              Catalogue
            </button>
            <a
              id="nav-about"
              href="#about-section"
              onClick={(e) => {
                if (currentView !== 'home') {
                  e.preventDefault();
                  setView('home');
                  setTimeout(() => {
                    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="text-brand-950/70 hover:text-accent-500 transition-colors"
            >
              Our Mission
            </a>
            <a
              id="nav-services"
              href="#services-section"
              onClick={(e) => {
                if (currentView !== 'home') {
                  e.preventDefault();
                  setView('home');
                  setTimeout(() => {
                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="text-brand-950/70 hover:text-accent-500 transition-colors"
            >
              Services
            </a>
            <a
              id="nav-rates"
              href="#rates-section"
              onClick={(e) => {
                if (currentView !== 'home') {
                  e.preventDefault();
                  setView('home');
                  setTimeout(() => {
                    document.getElementById('rates-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="text-brand-950/70 hover:text-accent-500 transition-colors"
            >
              Laybye Plans
            </a>
          </nav>

          {/* Action Area */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Orchard Cart Trigger */}
            <button
              id="cart-trigger"
              onClick={onOpenCart}
              className="relative p-2 text-brand-950 hover:text-accent-500 hover:bg-brand-100 rounded-full transition-all duration-200 cursor-pointer"
              title="View my Custom Orchard Plan"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-[10px] font-extrabold w-5.5 h-5.5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct Dialing */}
            <a
              id="phone-link"
              href={`tel:${CONTACT_WHATSAPP}`}
              className="flex items-center space-x-1.5 text-xs font-bold text-brand-950 bg-brand-100 px-4 py-2 rounded-full border border-brand-200/40 hover:bg-brand-200/55 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-accent-500" />
              <span>Call Bulawayo</span>
            </a>

            {/* Main CTA */}
            <a
              id="header-cta"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md shadow-brand-600/10 hover:shadow-lg hover:shadow-brand-600/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageSquare className="h-4 w-4 mr-2 fill-current" />
              WhatsApp Contact
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Orchard Cart Trigger (Mobile) */}
            <button
              id="cart-trigger-mobile"
              onClick={onOpenCart}
              className="relative p-2 text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-colors"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-500 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-brand-600 hover:bg-brand-50 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div id="mobile-menu-drawer" className="md:hidden bg-white border-b border-brand-100 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <div className="space-y-1">
            <button
              id="mobile-nav-home"
              onClick={() => handleNav('home')}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                currentView === 'home' ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Home
            </button>
            <button
              id="mobile-nav-catalogue"
              onClick={() => handleNav('catalogue')}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                currentView === 'catalogue' ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              View Catalogue
            </button>
            <a
              id="mobile-nav-about"
              href="#about-section"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:bg-gray-50"
            >
              Our Mission & Vision
            </a>
            <a
              id="mobile-nav-services"
              href="#services-section"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:bg-gray-50"
            >
              Services Offered
            </a>
            <a
              id="mobile-nav-rates"
              href="#rates-section"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:bg-gray-50"
            >
              Laybye Installment Rates
            </a>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
            <a
              id="mobile-nav-phone"
              href={`tel:${CONTACT_WHATSAPP}`}
              className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Phone className="h-4 w-4 text-brand-600" />
              <span>Call Nursery: +263 77 292 4948</span>
            </a>

            <a
              id="mobile-nav-whatsapp"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold shadow-md transition-all duration-200"
            >
              <MessageSquare className="h-4 w-4 fill-current" />
              <span>Contact on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
