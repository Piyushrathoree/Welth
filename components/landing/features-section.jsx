import React from "react";
import { PieChart, Zap, TrendingUp, Shield, Users, Globe } from "lucide-react";
import FeatureCard from "@/components/landing/feature-card";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-slate-900 dark:text-white">
            Everything you need to grow
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Stop using spreadsheets. Welth gives you powerful tools to manage
            your wealth in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={PieChart}
            title="Smart Budgeting"
            desc="Set custom budgets for categories like Food, Rent, and Fun. We'll alert you before you overspend."
          />
          <FeatureCard
            icon={Zap}
            title="Instant Transaction Sync"
            desc="Connect your bank accounts securely. We categorize your transactions automatically using AI."
          />
          <FeatureCard
            icon={TrendingUp}
            title="Investment Tracking"
            desc="Watch your net worth grow. Track stocks, crypto, and real estate assets in real-time."
          />
          <FeatureCard
            icon={Shield}
            title="Bank-Grade Security"
            desc="Your data is encrypted with 256-bit AES. We never sell your personal information."
          />
          <FeatureCard
            icon={Users}
            title="Family Sharing"
            desc="Manage household finances together. Share budgets and goals with your partner effortlessly."
          />
          <FeatureCard
            icon={Globe}
            title="Multi-Currency"
            desc="Travel often? We support over 120 currencies with real-time exchange rate conversion."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
