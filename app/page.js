"use client";
import React from "react";

import HeroSection from "@/components/landing/hero-section";
import SocialProof from "@/components/landing/social-proof";
import FeaturesSection from "@/components/landing/features-section";
import TestimonialsSection from "@/components/landing/testimonials-section";
import HowItWorksSection from "@/components/landing/how-it-works-section";
import FaqSection from "@/components/landing/faq-section";
import CtaSection from "@/components/landing/cta-section";
import Footer from "@/components/landing/footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-slate-900 dark:text-white transition-colors duration-300 font-sans overflow-x-hidden">
      <HeroSection />
      <SocialProof />
      <FeaturesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
