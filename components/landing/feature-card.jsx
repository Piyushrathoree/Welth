import React from "react";

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="relative p-6 rounded-2xl border border-slate-100 dark:border-neutral-800 bg-white dark:bg-neutral-800/50 overflow-hidden group hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
    {/* Hover Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10">
      <div className="w-12 h-12 bg-blue-50 dark:bg-neutral-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
        <Icon
          className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300"
          size={24}
        />
      </div>
      <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 dark:text-neutral-400 leading-relaxed group-hover:text-slate-600 dark:group-hover:text-neutral-300 transition-colors">
        {desc}
      </p>
    </div>
  </div>
);

export default FeatureCard;
