import React from "react";

const TimelineItem = ({ step, title, desc, icon: Icon, isLast }) => (
  <div className="relative flex gap-6 group">
    {/* Line */}
    {!isLast && (
      <div className="absolute left-[24px] top-12 bottom-[-48px] w-0.5 bg-slate-200 dark:bg-neutral-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors duration-500" />
    )}

    {/* Icon Bubble */}
    <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-neutral-800 border-2 border-slate-200 dark:border-neutral-700 flex items-center justify-center z-10 group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:scale-110 transition-all duration-300 shadow-sm">
      <Icon
        size={20}
        className="text-slate-400 dark:text-neutral-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
      />
    </div>

    {/* Content */}
    <div className="pb-12 pt-1">
      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1 block">
        Step {step}
      </span>
      <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-neutral-400 leading-relaxed max-w-md">
        {desc}
      </p>
    </div>
  </div>
);

export default TimelineItem;
