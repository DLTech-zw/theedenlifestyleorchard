import { useState } from 'react';
import { Calendar, DollarSign, Sprout, ShieldCheck, ArrowRight, TrendingUp, Calculator } from 'lucide-react';
import { LAYBYE_PACKAGES, WHATSAPP_LINK } from '../data';

export default function LaybyePlans() {
  const [duration, setDuration] = useState<6 | 12>(12);
  const [selectedTrees, setSelectedTrees] = useState<number>(75);

  const activePackages = LAYBYE_PACKAGES.filter((p) => p.durationMonths === duration);

  // Finding matched installment price for calculation
  const currentPackage = LAYBYE_PACKAGES.find(
    (p) => p.durationMonths === duration && p.trees === selectedTrees
  );

  // Fallback if combination doesn't exist (e.g. 12 months with 25 trees is not in rates, so fallback to 50 or similar)
  const monthlyRate = currentPackage ? currentPackage.pricePerMonth : 45;
  const totalCost = monthlyRate * duration;

  // Agricultural Projections (Avocados/Mangoes as base model)
  const fruitYieldPerTreeYearly = 300; // avg adult tree
  const marketPricePerFruit = 0.50; // USD in region
  const yearlyOrchardRevenue = selectedTrees * fruitYieldPerTreeYearly * marketPricePerFruit;

  return (
    <section id="rates-section" className="py-24 bg-brand-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold text-accent-500 uppercase tracking-widest block mb-2">
            Flexible Installment Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-950 tracking-tight">
            Affordable Laybye & Accounts
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-950/70 font-light">
            Build your high-yield retirement orchard without straining your budget. Pay slowly over 6 or 12 months, and collect your hardened, top-grade seedlings upon completion.
          </p>

          {/* Plan Switcher Toggle */}
          <div className="mt-8 inline-flex p-1 bg-white border border-brand-200 rounded-full shadow-sm">
            <button
              onClick={() => {
                setDuration(12);
                if (selectedTrees === 25) setSelectedTrees(50); // 12m doesn't have 25 trees package
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                duration === 12
                  ? 'bg-accent-500 text-white shadow-md'
                  : 'text-brand-950/70 hover:text-accent-500'
              }`}
            >
              12 Months
            </button>
            <button
              onClick={() => setDuration(6)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                duration === 6
                  ? 'bg-accent-500 text-white shadow-md'
                  : 'text-brand-950/70 hover:text-accent-500'
              }`}
            >
              6 Months
            </button>
          </div>
        </div>

        {/* Rate Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {activePackages.map((pkg) => {
            const isSelected = selectedTrees === pkg.trees;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedTrees(pkg.trees)}
                id={`laybye-card-${pkg.id}`}
                className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-accent-500 shadow-xl ring-2 ring-accent-500/10 -translate-y-1'
                    : 'border-brand-200/60 hover:border-accent-500/40 shadow-sm'
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-500 text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  {/* Tree Badge Count */}
                  <div className="flex items-center space-x-2.5 mb-6">
                    <div className={`p-2.5 rounded-full ${isSelected ? 'bg-accent-100 text-accent-700' : 'bg-brand-100 text-brand-700'}`}>
                      <Sprout className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-extrabold text-brand-950/50 uppercase tracking-wider">Seedlings</span>
                      <span className="block text-2xl font-serif font-bold text-brand-950">{pkg.trees} Trees</span>
                    </div>
                  </div>

                  {/* Monthly Pricing Display */}
                  <div className="mb-6 pt-4 border-t border-brand-200/40">
                    <span className="text-brand-950/50 text-[10px] font-extrabold block uppercase tracking-wider mb-1">Monthly Cost</span>
                    <div className="flex items-baseline text-brand-950">
                      <span className="text-4xl font-serif font-bold tracking-tight">${pkg.pricePerMonth}</span>
                      <span className="text-brand-950/60 text-xs font-semibold ml-1">/ month</span>
                    </div>
                  </div>

                  {/* Benefit Items List */}
                  <ul className="space-y-3 mb-8 text-xs text-brand-950/80">
                    <li className="flex items-center">
                      <ShieldCheck className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                      <span>Free Consultancy Included</span>
                    </li>
                    <li className="flex items-center">
                      <ShieldCheck className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                      <span>Free Custom Planting Guide</span>
                    </li>
                    <li className="flex items-center">
                      <ShieldCheck className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                      <span>Exotic & Indigenous Varieties</span>
                    </li>
                    <li className="flex items-center">
                      <ShieldCheck className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                      <span>Hardened & Grafted Seedlings</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-center py-2 px-3 bg-brand-100 rounded-xl mb-4">
                    <span className="text-[10px] font-extrabold text-brand-950/80 block uppercase tracking-wider">
                      Total: ${pkg.pricePerMonth * duration} over {duration} mos
                    </span>
                  </div>

                  <a
                    id={`laybye-cta-${pkg.id}`}
                    href={`${WHATSAPP_LINK}?text=Hello! I want to secure the Laybye Account Package: ${pkg.trees} Trees on the ${duration}-Month plan ($${pkg.pricePerMonth}/month) at Bulawayo.`}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center w-full px-4 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-200 ${
                      isSelected
                        ? 'bg-accent-500 hover:bg-accent-600 text-white shadow-md'
                        : 'bg-brand-100 hover:bg-brand-200/50 text-brand-950'
                    }`}
                  >
                    Secure Plan
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Estimator / ROI Simulator */}
        <div className="bg-white rounded-3xl border border-brand-200/60 p-8 sm:p-12 shadow-md">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Estimator Controls (Left) */}
            <div className="lg:col-span-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-accent-100 text-accent-700 p-2.5 rounded-full">
                  <Calculator className="h-6 w-6 text-accent-500" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-950">
                  Orchard Profit Estimator
                </h3>
              </div>
              <p className="text-sm text-brand-950/70 leading-relaxed mb-8 font-light">
                Fruit trees are living investments. Select your target tree count to see how affordable the laybye accounts are, and simulate your potential generational retirement returns.
              </p>

              {/* Slider / Select Selector */}
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-extrabold text-brand-950/60 uppercase tracking-widest block mb-3">
                    Step 1: Choose Your Tree Investment Goal
                  </label>
                  <div className="grid grid-cols-4 gap-2.5">
                    {[25, 50, 75, 100].map((t) => {
                      // 25 trees is only on 6m
                      const isDisabled = duration === 12 && t === 25;
                      return (
                        <button
                          key={t}
                          onClick={() => !isDisabled && setSelectedTrees(t)}
                          disabled={isDisabled}
                          className={`py-3 rounded-full text-xs font-bold transition-all ${
                            isDisabled
                              ? 'bg-[#FEFBF6] text-brand-950/30 border-brand-200/40 cursor-not-allowed'
                              : selectedTrees === t
                              ? 'bg-accent-500 text-white border-transparent shadow-md'
                              : 'bg-white text-brand-950 border-brand-200 hover:border-accent-500/50'
                          }`}
                        >
                          {t} Trees
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-extrabold text-brand-950/60 uppercase tracking-widest block mb-2">
                    Step 2: Choose Installment Length
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex-1 flex items-center p-3 border border-brand-200 rounded-full cursor-pointer bg-white hover:bg-brand-50">
                      <input
                        type="radio"
                        name="est_duration"
                        checked={duration === 12}
                        onChange={() => {
                          setDuration(12);
                          if (selectedTrees === 25) setSelectedTrees(50);
                        }}
                        className="text-accent-500 focus:ring-accent-500 h-4 w-4"
                      />
                      <span className="ml-2.5 text-xs uppercase tracking-wider font-semibold text-brand-950">12 Months</span>
                    </label>
                    <label className="flex-1 flex items-center p-3 border border-brand-200 rounded-full cursor-pointer bg-white hover:bg-brand-50">
                      <input
                        type="radio"
                        name="est_duration"
                        checked={duration === 6}
                        onChange={() => setDuration(6)}
                        className="text-accent-500 focus:ring-accent-500 h-4 w-4"
                      />
                      <span className="ml-2.5 text-xs uppercase tracking-wider font-semibold text-brand-950">6 Months</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Projections View (Right) */}
            <div className="lg:col-span-6 bg-[#FEFBF6] p-8 rounded-3xl border border-brand-200/50">
              <span className="text-[10px] font-extrabold text-accent-500 uppercase tracking-widest block mb-4">
                Estimated Projections
              </span>

              <div className="space-y-6">
                {/* Monthly Installment */}
                <div className="flex justify-between items-center pb-4 border-b border-brand-200/40">
                  <span className="text-xs font-bold text-brand-950/70">Monthly Payment:</span>
                  <span className="text-2xl font-serif font-bold text-brand-950">${monthlyRate} / mo</span>
                </div>

                {/* Total Investment */}
                <div className="flex justify-between items-center pb-4 border-b border-brand-200/40">
                  <span className="text-xs font-bold text-brand-950/70">Total Account Cost:</span>
                  <span className="text-lg font-serif font-bold text-brand-950">${totalCost} total</span>
                </div>

                {/* Estimated Bearing Age */}
                <div className="flex justify-between items-center pb-4 border-b border-brand-200/40">
                  <span className="text-xs font-bold text-brand-950/70">Harvest / Bearing Age:</span>
                  <span className="text-xs font-bold text-accent-700 bg-accent-100 px-3 py-1 rounded-full">
                    3 - 4 Years (Grafted)
                  </span>
                </div>

                {/* Potential Harvest ROI */}
                <div className="bg-white p-6 rounded-2xl border border-brand-200/50 shadow-sm">
                  <div className="flex items-center space-x-2 text-accent-600 mb-2">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">Generational Yield Potential</span>
                  </div>
                  <p className="text-xs text-brand-950/70 leading-relaxed font-light">
                    Once mature, an orchard of <strong className="text-brand-950 font-bold">{selectedTrees} Grafted Trees</strong> (like Avocados & Mangoes) can yield up to <strong className="text-brand-950 font-bold">{selectedTrees * fruitYieldPerTreeYearly} fruits</strong> annually. At regional market rates, this offers potential sustainable returns of up to:
                  </p>
                  <div className="mt-3 text-3xl font-serif font-bold text-accent-500">
                    ${yearlyOrchardRevenue.toLocaleString()} / Year
                  </div>
                  <span className="text-[9px] text-brand-950/40 block mt-1">
                    *Estimated calculations are based on standard botanical models under optimal management & drip irrigation.
                  </span>
                </div>
              </div>

              {/* Main Estimator CTA */}
              <a
                id="estimator-whatsapp-cta"
                href={`${WHATSAPP_LINK}?text=Hello! I just used your online Orchard Estimator for ${selectedTrees} Trees. Let's discuss suitable varieties, planting site planning, and starting my laybye account.`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center w-full px-6 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-full shadow-lg shadow-accent-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-xs uppercase tracking-widest"
              >
                Inquire & Start My Orchard Plan
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
