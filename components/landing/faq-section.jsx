import React from "react";
import FaqItem from "@/components/landing/faq-item";

const FaqSection = () => {
  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-neutral-900 border-t border-slate-100 dark:border-neutral-800"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4 text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-neutral-400">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="space-y-2">
          <FaqItem
            question="Is my financial data secure?"
            answer="Absolutely. We use bank-level 256-bit encryption and never sell your data. We use Plaid to connect to your accounts, meaning we never see or store your login credentials."
          />
          <FaqItem
            question="Can I track crypto and stocks?"
            answer="Yes! Welth supports over 10,000 financial institutions, including major stock brokers and crypto exchanges like Coinbase and Binance."
          />
          <FaqItem
            question="Is there a free version available?"
            answer="Yes, the Starter plan is completely free and allows you to track unlimited manual transactions and connect one bank account."
          />
          <FaqItem
            question="Does it work on mobile?"
            answer="Welth is a fully responsive web app that works perfectly on desktop, tablet, and mobile devices. We also have native iOS and Android apps coming soon."
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
