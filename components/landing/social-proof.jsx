import React from "react";

const SocialProof = () => {
  return (
    <div className="py-10 bg-slate-50 dark:bg-neutral-900 border-y border-slate-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-slate-500 dark:text-neutral-500 uppercase tracking-widest mb-6">
          Trusted by Multiple Smart Savers
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {["Acme Corp", "GlobalBank", "TechFlow", "Stripe", "Vercel"].map(
            (brand) => (
              <span
                key={brand}
                className="text-xl font-bold font-serif text-slate-400 dark:text-neutral-500 cursor-default hover:text-slate-600 dark:hover:text-neutral-300 transition-colors"
              >
                {brand}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
