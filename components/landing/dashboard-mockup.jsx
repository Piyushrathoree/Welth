import React from "react";
import { TrendingUp } from "lucide-react";

const DashboardMockup = () => (
  <div className="relative mx-auto max-w-5xl transform perspective-1000 group">
    <div className="relative rounded-2xl bg-neutral-900 p-2 shadow-2xl transition-all duration-500 hover:rotate-0 md:rotate-x-6 md:rotate-y-0 md:translate-y-0 border border-neutral-800">
      {/* Browser Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-neutral-800 rounded-t-xl border-b border-neutral-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto px-3 py-1 bg-neutral-900 rounded-md text-[10px] text-neutral-500 font-mono">
          welth.ai/dashboard
        </div>
      </div>

      {/* Mock Content Image/Structure */}
      <div className="bg-neutral-900 rounded-b-xl overflow-hidden relative aspect-[16/9]">
        {/* Abstract representation of the dashboard */}
        <div className="absolute inset-0 p-6 grid grid-cols-4 gap-4">
          {/* Sidebar */}
          <div className="hidden md:block col-span-1 bg-neutral-800/50 rounded-xl border border-neutral-800 p-4 space-y-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg mb-6 opacity-80" />
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-2 w-2/3 bg-neutral-800 rounded-full" />
            ))}
          </div>
          {/* Main Area */}
          <div className="col-span-4 md:col-span-3 space-y-4">
            <div className="flex justify-between">
              <div className="h-8 w-1/3 bg-neutral-800 rounded-lg" />
              <div className="h-8 w-24 bg-blue-600/20 rounded-lg" />
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-24 bg-neutral-800 rounded-xl border border-neutral-800 p-4 relative overflow-hidden group/stat hover:border-blue-500/50 transition-colors"
                >
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
                  <div className="h-full flex flex-col justify-center">
                    <div className="w-8 h-2 bg-neutral-700 rounded mb-2 group-hover/stat:bg-blue-900/50 transition-colors" />
                    <div className="w-16 h-4 bg-neutral-600 rounded group-hover/stat:bg-blue-600/50 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
            {/* Chart Area */}
            <div className="h-48 bg-neutral-800 rounded-xl border border-neutral-800 relative flex items-end justify-around px-6 pb-6 pt-12">
              {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                <div
                  key={i}
                  className="w-8 bg-blue-600/30 rounded-t-sm hover:bg-blue-500 transition-colors duration-300"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements for 3D effect */}
        <div className="absolute top-1/4 -right-12 md:-right-16 bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-2xl border border-slate-200 dark:border-neutral-700 animate-float">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-neutral-500">
                Net Profit
              </p>
              <p className="font-bold text-slate-900 dark:text-white">
                +₹1,240.50
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Glow behind dashboard */}
    <div className="absolute -inset-4 bg-blue-600/20 blur-3xl -z-10 rounded-[3rem]" />
  </div>
);

export default DashboardMockup;
