import { useState, useMemo } from 'react';
import { Search, Filter, Plus, Minus, MessageSquare, ClipboardList, Trash2, Sprout, ArrowRight, Star } from 'lucide-react';
import { CATALOGUE_ITEMS, CONTACT_WHATSAPP, WHATSAPP_LINK } from '../data';
import { CatalogueItem } from '../types';

interface CatalogueViewProps {
  cart: Record<string, number>;
  onAddToCart: (id: string) => void;
  onRemoveFromCart: (id: string) => void;
  onUpdateQuantity: (id: string, qty: number) => void;
  onClearCart: () => void;
}

const CATEGORY_TABS = [
  { id: 'all', label: 'All Plants' },
  { id: 'grafted', label: '🍊 Grafted & Exotic' },
  { id: 'nongrafted', label: '🌳 Non-Grafted' },
  { id: 'indigenous', label: '🇿🇼 Indigenous Trees' },
  { id: 'shade', label: '⛱️ Shade Trees' },
  { id: 'herbs', label: '🌿 Herbs & Rept-Repellent' },
  { id: 'ornamental', label: '🌺 Ornamentals & Roses' }
];

export default function CatalogueView({
  cart,
  onAddToCart,
  onRemoveFromCart,
  onUpdateQuantity,
  onClearCart
}: CatalogueViewProps) {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');

  // Filter items dynamically based on search and category tab
  const filteredItems = useMemo(() => {
    return CATALOGUE_ITEMS.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeTab === 'all' || item.category === activeTab;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeTab]);

  // Aggregate cart details
  const cartDetails = useMemo(() => {
    const list = [];
    let totalCount = 0;
    for (const [id, quantity] of Object.entries(cart)) {
      if (quantity <= 0) continue;
      const item = CATALOGUE_ITEMS.find((p) => p.id === id);
      if (item) {
        list.push({ item, quantity });
        totalCount += quantity;
      }
    }
    return { list, totalCount };
  }, [cart]);

  // Determine Laybye Package Eligibility based on tree total count
  const laybyeRecommendation = useMemo(() => {
    const count = cartDetails.totalCount;
    if (count <= 0) return null;
    if (count < 25) {
      return {
        nextMilestone: 25,
        difference: 25 - count,
        msg: `Add ${25 - count} more trees to qualify for our 6-Month installment plan!`
      };
    } else if (count >= 25 && count < 50) {
      return {
        qualified: 25,
        nextMilestone: 50,
        difference: 50 - count,
        msg: `Nice! You qualify for the 25 Trees Package ($45/mo). Add ${50 - count} more trees to reach the 50 Trees Package!`
      };
    } else if (count >= 50 && count < 75) {
      return {
        qualified: 50,
        nextMilestone: 75,
        difference: 75 - count,
        msg: `Great! You qualify for the 50 Trees Package ($45/mo or $75/mo). Add ${75 - count} more trees for the 75 Trees Package!`
      };
    } else if (count >= 75 && count < 100) {
      return {
        qualified: 75,
        nextMilestone: 100,
        difference: 100 - count,
        msg: `Superb! You qualify for our 75 Trees Package ($60/mo or $100/mo). Add ${100 - count} more trees to unlock the maximum 100 Trees Package!`
      };
    } else {
      return {
        qualified: 100,
        msg: `Outstanding! You qualify for our top-tier 100 Trees Package ($70/mo or $115/mo). You are ready to build a massive commercial orchard!`
      };
    }
  }, [cartDetails.totalCount]);

  // Compose dynamic WhatsApp inquiry with list of seedlings
  const handleSendWhatsAppQuote = () => {
    if (cartDetails.list.length === 0) return;

    let itemsStr = cartDetails.list
      .map((entry) => `• ${entry.item.emoji} ${entry.item.name} x${entry.quantity}`)
      .join('\n');

    let totalTrees = cartDetails.totalCount;
    let laybyeStatus = '';
    if (laybyeRecommendation?.qualified) {
      laybyeStatus = `\n\nI am interested in securing a Laybye Account Package for this plan (${totalTrees} trees qualify for the ${laybyeRecommendation.qualified} level).`;
    }

    const fullMessage = `Hello The Eden Lifestyle! I have built a custom orchard plan on your website. Here is my target list of plants:

${itemsStr}

Total Trees: ${totalTrees} trees ${laybyeStatus}

Please send me a quotation, advise on availability, and guide me on the next steps at Bulawayo!`;

    const encodedMsg = encodeURIComponent(fullMessage);
    window.open(`${WHATSAPP_LINK}?text=${encodedMsg}`, '_blank');
  };

  return (
    <div id="catalogue-section" className="py-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-extrabold text-accent-500 uppercase tracking-widest block mb-2">
            The Eden Collection
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-950 tracking-tight">
            Botanical Catalogue & Orchard Builder
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-950/70 font-light">
            Search our comprehensive registry of premium grafted exotics, hardy indigenous, shade trees, herbs, and ornamentals. Add plants to draft your custom orchard investment plan!
          </p>
        </div>

        {/* Catalog layout split: Items grid on left, live planner panel on right */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Filter and Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Search and Filters toolbar */}
            <div className="bg-[#FEFBF6] p-4 rounded-3xl border border-brand-200/50 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
              
              {/* Search Bar */}
              <div className="relative w-full md:max-w-xs">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-950/40" />
                <input
                  type="text"
                  placeholder="Search over 80 species..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-brand-200 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 text-brand-950"
                />
              </div>

              {/* Status Info */}
              <div className="text-xs font-semibold text-brand-950/60">
                Found <span className="text-accent-500 font-extrabold">{filteredItems.length}</span> plants matching criteria
              </div>
            </div>

            {/* Category horizontal scrolling tab selectors */}
            <div className="overflow-x-auto pb-2 flex space-x-2 scrollbar-none">
              {CATEGORY_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-accent-500 text-white shadow-md'
                      : 'bg-brand-100 hover:bg-brand-200/50 text-brand-950'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Catalogue Items Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredItems.length === 0 ? (
                <div className="col-span-full py-16 text-center bg-white rounded-3xl border border-dashed border-brand-200">
                  <Sprout className="h-10 w-10 text-brand-300 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-brand-950/70">No plants found matching "{search}"</p>
                  <button
                    onClick={() => { setSearch(''); setActiveTab('all'); }}
                    className="mt-3 text-xs font-bold text-accent-500 hover:underline"
                  >
                    Reset all filters
                  </button>
                </div>
              ) : (
                filteredItems.map((item) => {
                  const currentQty = cart[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      id={`item-card-${item.id}`}
                      className={`bg-white rounded-3xl p-5 border transition-all duration-200 ${
                        currentQty > 0
                          ? 'border-accent-500 shadow-md bg-brand-50/15'
                          : 'border-brand-200/50 hover:border-accent-500/40'
                      }`}
                    >
                      {/* Emoji & Label Header */}
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-4xl select-none">{item.emoji}</span>
                        
                        {/* Category specific badges */}
                        {item.category === 'grafted' && (
                          <span className="text-[9px] font-bold text-accent-600 bg-accent-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Grafted / Exotic
                          </span>
                        )}
                        {item.category === 'indigenous' && (
                          <span className="text-[9px] font-bold text-brand-700 bg-brand-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Indigenous
                          </span>
                        )}
                        {item.category === 'nongrafted' && (
                          <span className="text-[9px] font-bold text-brand-950/60 bg-brand-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Non-Grafted
                          </span>
                        )}
                        {item.category === 'herbs' && (
                          <span className="text-[9px] font-bold text-teal-700 bg-teal-100/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Herb / Repellent
                          </span>
                        )}
                      </div>

                      {/* Plant Name */}
                      <h4 className="text-sm font-serif font-bold text-brand-950 mb-4 tracking-tight min-h-[36px] flex items-center">
                        {item.name}
                      </h4>

                      {/* Action Quantity Controls */}
                      {currentQty > 0 ? (
                        <div className="flex items-center justify-between bg-brand-100/80 border border-brand-200/40 rounded-full p-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, currentQty - 1)}
                            className="p-1 rounded-full hover:bg-brand-200 text-brand-950 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="text-xs font-bold text-brand-950 font-sans">
                            {currentQty}
                          </span>
                          <button
                            onClick={() => onAddToCart(item.id)}
                            className="p-1 rounded-full hover:bg-brand-200 text-brand-950 transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => onAddToCart(item.id)}
                          className="w-full py-2.5 bg-brand-100 hover:bg-accent-500 text-brand-950 hover:text-white border border-brand-200/40 hover:border-transparent rounded-full text-[10px] uppercase tracking-wider font-bold transition-all duration-200 flex items-center justify-center space-x-1 cursor-pointer"
                        >
                          <Plus className="h-3.5 w-3.5 mr-1" />
                          Add to Orchard
                        </button>
                      )}

                    </div>
                  );
                })
              )}
            </div>

          </div>

          {/* Right Column: Sticky Orchard Planner Drawer (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-brand-950 text-white rounded-[2rem] p-6 shadow-xl border border-brand-900 relative overflow-hidden">
              
              {/* Background accent block */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500/20 rounded-full blur-2xl -z-10" />

              {/* Title */}
              <div className="flex items-center space-x-2.5 mb-6 pb-4 border-b border-brand-900">
                <ClipboardList className="h-5 w-5 text-accent-400" />
                <h3 className="text-lg font-serif font-bold tracking-tight">
                  My Custom Orchard Plan
                </h3>
              </div>

              {/* Empty Plan State */}
              {cartDetails.list.length === 0 ? (
                <div className="py-12 text-center">
                  <div className="h-12 w-12 bg-brand-900 rounded-full flex items-center justify-center mx-auto mb-4 text-accent-400">
                    <Sprout className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-bold text-brand-200">Your plan is empty</p>
                  <p className="text-xs text-brand-300/60 mt-1 max-w-xs mx-auto leading-relaxed">
                    Browse the botanical list on the left and tap "Add to Orchard" to draft your species.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Selected items list font-light */}
                  <div className="max-h-[220px] overflow-y-auto space-y-2 pr-1 scrollbar-thin">
                    {cartDetails.list.map((entry) => (
                      <div
                        key={entry.item.id}
                        className="flex items-center justify-between bg-brand-900/60 p-2.5 rounded-xl border border-brand-900/40 text-xs"
                      >
                        <div className="flex items-center space-x-2 min-w-0">
                          <span className="text-xl select-none flex-shrink-0">{entry.item.emoji}</span>
                          <span className="font-bold truncate text-brand-100">{entry.item.name}</span>
                        </div>

                        <div className="flex items-center space-x-2.5 flex-shrink-0">
                          {/* Decrement */}
                          <button
                            onClick={() => onUpdateQuantity(entry.item.id, entry.quantity - 1)}
                            className="p-1 hover:bg-brand-800 text-brand-300 rounded-md"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          
                          {/* Qty Count */}
                          <span className="font-mono font-extrabold text-white text-xs">{entry.quantity}</span>
                          
                          {/* Increment */}
                          <button
                            onClick={() => onAddToCart(entry.item.id)}
                            className="p-1 hover:bg-brand-800 text-brand-300 rounded-md"
                          >
                            <Plus className="h-3 w-3" />
                          </button>

                          {/* Delete */}
                          <button
                            onClick={() => onUpdateQuantity(entry.item.id, 0)}
                            className="p-1 hover:bg-red-950/80 text-red-400 rounded-md ml-1"
                            title="Remove species"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Cart Action Block */}
                  <div className="pt-4 border-t border-brand-900">
                    
                    {/* Sum Metrics */}
                    <div className="flex justify-between items-center text-sm mb-4">
                      <span className="text-brand-300 font-semibold">Total Planned Trees:</span>
                      <span className="text-xl font-serif font-bold text-accent-400">
                        {cartDetails.totalCount}
                      </span>
                    </div>

                    {/* Laybye Milestone Indicator */}
                    {laybyeRecommendation && (
                      <div className="bg-brand-900/80 border border-brand-800/80 p-4 rounded-2xl text-[11px] leading-relaxed text-brand-200 mb-6 flex items-start gap-2">
                        <Star className="h-4 w-4 text-accent-400 fill-current flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-white mb-0.5">Laybye Account Check</p>
                          <p className="text-brand-300/90">{laybyeRecommendation.msg}</p>
                        </div>
                      </div>
                    )}

                    {/* Submit Plan Button */}
                    <button
                      id="cart-submit-quote"
                      onClick={handleSendWhatsAppQuote}
                      className="w-full py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-full transition-all duration-200 flex items-center justify-center space-x-2 text-xs uppercase tracking-widest cursor-pointer shadow-lg shadow-accent-500/20"
                    >
                      <MessageSquare className="h-4.5 w-4.5 fill-current" />
                      <span>Submit Plan to WhatsApp</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    {/* Reset Button */}
                    <button
                      id="cart-clear"
                      onClick={onClearCart}
                      className="w-full mt-3 py-2 border border-brand-900 hover:bg-brand-900/40 text-brand-400 hover:text-white rounded-full text-[10px] font-bold tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      Clear Orchard Plan
                    </button>

                  </div>
                </div>
              )}

              {/* Subtitle Guarantee */}
              <div className="mt-6 text-center">
                <span className="text-[9px] uppercase tracking-widest text-brand-400 font-bold">
                  Quality Guaranteed by The Eden Nursery
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
