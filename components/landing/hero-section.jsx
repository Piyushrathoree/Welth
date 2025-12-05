import React from "react";
import { Star, ArrowRight } from "lucide-react";
import Button from "@/components/landing/button";
import DashboardMockup from "@/components/landing/dashboard-mockup";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-neutral-800 border border-blue-200 dark:border-neutral-700 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in-up">
          <Star size={12} fill="currentColor" /> New v2.0 is live
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-200">
          Master your money <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            with zero stress.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
          Track expenses, set smart budgets, and hit your financial goals faster
          with our AI-powered personal finance assistant.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 animate-fade-in-up animation-delay-600">
          <Button
            variant="primary"
            icon={ArrowRight}
            className="!px-8 !py-4 !text-lg"
            href="/dashboard"
          >
            Start for Free
          </Button>
          <Button variant="secondary" className="!px-8 !py-4 !text-lg">
            View Demo
          </Button>
        </div>

        <div className="animate-fade-in-up animation-delay-800">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
