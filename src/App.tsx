import { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import LaybyePlans from './components/LaybyePlans';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CatalogueView from './components/CatalogueView';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setView] = useState<'home' | 'catalogue'>('home');
  const [cart, setCart] = useState<Record<string, number>>({});

  // Sync cart from/to localStorage for client persistence
  useEffect(() => {
    try {
      const stored = localStorage.getItem('eden_orchard_cart');
      if (stored) {
        setCart(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
    }
  }, []);

  const saveCart = (newCart: Record<string, number>) => {
    setCart(newCart);
    try {
      localStorage.setItem('eden_orchard_cart', JSON.stringify(newCart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  };

  // Helper selectors
  const cartCount = useMemo(() => {
    return Object.values(cart).reduce((sum: number, qty: number) => sum + qty, 0);
  }, [cart]);

  // Cart operations
  const handleAddToCart = (id: string) => {
    const qty = cart[id] || 0;
    const newCart = { ...cart, [id]: qty + 1 };
    saveCart(newCart);
  };

  const handleRemoveFromCart = (id: string) => {
    const qty = cart[id] || 0;
    if (qty <= 1) {
      const newCart = { ...cart };
      delete newCart[id];
      saveCart(newCart);
    } else {
      const newCart = { ...cart, [id]: qty - 1 };
      saveCart(newCart);
    }
  };

  const handleUpdateQuantity = (id: string, qty: number) => {
    const newCart = { ...cart };
    if (qty <= 0) {
      delete newCart[id];
    } else {
      newCart[id] = qty;
    }
    saveCart(newCart);
  };

  const handleClearCart = () => {
    saveCart({});
  };

  // Trigger when they click the Cart bag in the Header
  const handleOpenCart = () => {
    setView('catalogue');
    setTimeout(() => {
      const element = document.getElementById('cart-submit-quote') || document.getElementById('catalogue-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* Premium Header */}
      <Header
        currentView={currentView}
        setView={setView}
        cartCount={cartCount}
        onOpenCart={handleOpenCart}
      />

      {/* Main Container with subtle route transition */}
      <main className="flex-grow animate-fadeIn">
        {currentView === 'home' ? (
          <div>
            {/* Hero Section */}
            <Hero
              onExploreCatalogue={() => {
                setView('catalogue');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onViewLaybye={() => {
                const element = document.getElementById('rates-section');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Core Services Section */}
            <Services />

            {/* About / Mission Section */}
            <About />

            {/* Laybye Account rates & Calculator */}
            <LaybyePlans />

            {/* Testimonials */}
            <Testimonials />
          </div>
        ) : (
          /* Interactive Botanical Catalogue & Planner View */
          <div className="animate-slideUp">
            {/* Breadcrumb / Back button on top of catalogue */}
            <div className="bg-brand-50/30 border-b border-brand-100/60 py-4.5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                  onClick={() => {
                    setView('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center text-xs font-bold text-brand-700 hover:text-brand-900 group cursor-pointer"
                >
                  <span className="mr-1.5 transition-transform duration-200 group-hover:-translate-x-1">←</span>
                  Back to Nursery Overview
                </button>
              </div>
            </div>

            <CatalogueView
              cart={cart}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
              onClearCart={handleClearCart}
            />
          </div>
        )}
      </main>

      {/* Comprehensive Footer */}
      <Footer setView={setView} />
    </div>
  );
}
