import React from "react";
import Button from "@/components/landing/button";

const CtaSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-blue-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Ready to take control?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who are saving more and stressing less.
            Start your 14-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="white"
              className="!text-blue-600 !font-bold"
              href="/dashboard"
            >
              Get Started Now
            </Button>
            <Button
              variant="ghost"
              className="!text-white border border-white/30 hover:bg-white/10"
            >
              Contact Sales
            </Button>
          </div>
          <p className="mt-6 text-sm text-blue-200 opacity-80">
            No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
