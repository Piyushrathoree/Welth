import React from "react";
import { Quote } from "lucide-react";

const TestimonialCard = ({ quote, author, role }) => (
  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-neutral-800/50 border border-slate-100 dark:border-neutral-800 hover:border-blue-200 dark:hover:border-blue-900 transition-colors">
    <Quote className="text-blue-200 dark:text-blue-900/50 mb-4" size={32} />
    <p className="text-slate-700 dark:text-neutral-300 mb-6 font-medium italic">
      &quot;{quote}&quot;
    </p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-neutral-800 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-xs font-bold bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
          {author.charAt(0)}
        </div>
      </div>
      <div>
        <p className="font-bold text-slate-900 dark:text-white text-sm">
          {author}
        </p>
        <p className="text-xs text-slate-500 dark:text-neutral-500">{role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
