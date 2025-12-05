import React from "react";
import { Zap, Link as LinkIcon, Target, Smartphone, Menu } from "lucide-react";
import TimelineItem from "@/components/landing/timeline-item";

const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-neutral-800 border border-blue-200 dark:border-neutral-700 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={12} fill="currentColor" /> Easy Setup
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-slate-900 dark:text-white leading-tight">
              From chaos to clarity <br /> in minutes.
            </h2>
            <p className="text-slate-600 dark:text-neutral-400 text-lg mb-12">
              We've streamlined the entire process so you can stop worrying
              about setup and start focusing on your future.
            </p>

            <div className="space-y-4">
              <TimelineItem
                step="1"
                title="Create your accounts"
                desc=""
                icon={LinkIcon}
              />
              <TimelineItem
                step="2"
                title="Set your goals"
                desc="Tell us what you're saving for—a home, a car, or retirement—and we'll build a custom plan."
                icon={Target}
              />
              <TimelineItem
                step="3"
                title="Track & Optimize"
                desc="Get real-time insights and AI-powered recommendations to cut costs and boost savings."
                icon={Smartphone}
                isLast={true}
              />
            </div>
          </div>

          {/* Right Visuals (Abstract Phone/App Mockup) */}
          <div className="relative h-[600px] bg-slate-50 dark:bg-neutral-900 rounded-3xl border border-slate-200 dark:border-neutral-800 p-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            {/* Decorative Circles */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl"></div>

            {/* Phone Mockup */}
            <div className="relative w-[300px] h-[580px] bg-black rounded-[3rem] border-8 border-neutral-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-xl z-20"></div>
              {/* Screen Content */}
              <div className="w-full h-full bg-neutral-900 pt-12 px-4 space-y-4">
                <div className="flex justify-between items-center text-white mb-6">
                  <Menu size={20} />
                  <span className="font-bold">Dashboard</span>
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-2xl text-white shadow-lg">
                  <p className="text-sm opacity-80">Total Balance</p>
                  <p className="text-2xl font-bold">$24,500.00</p>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-neutral-800 p-3 rounded-xl flex items-center gap-3"
                    >
                      <div className="w-10 h-10 bg-neutral-700 rounded-full"></div>
                      <div className="flex-1 h-2 bg-neutral-700 rounded"></div>
                      <div className="w-12 h-2 bg-neutral-700 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
