"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-black dark:via-neutral-900 dark:to-black"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700 rounded-full blur-xl opacity-30 animate-float"></div>
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-neutral-300 to-neutral-400 dark:from-neutral-700 dark:to-neutral-600 rounded-full blur-xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700 rounded-full blur-xl opacity-25 animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex mt-2 items-center gap-2 px-4 py-2 rounded-full glass dark:glass-dark mb-8 animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              AI-Powered Financial Intelligence
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
            Master Your
            <span className="block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-transparent">
              Financial Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the future of personal finance with AI-driven insights,
            intelligent budgeting, and real-time analytics that adapt to your
            lifestyle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-all duration-300 group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-2 border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-500 dark:text-neutral-400 mb-12">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Bank-level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Real-time Sync</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image-wrapper mt-8 mb-20">
            <div ref={imageRef} className="hero-image relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-700">
                <Image
                  src="/banner.jpeg"
                  width={1280}
                  height={720}
                  alt="AI Finance Platform Dashboard"
                  className="w-full h-auto"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating stats cards */}
              <div className="absolute -top-4 -left-4 glass dark:glass-dark rounded-xl p-4 animate-float">
                <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                  ₹2.4M
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400">
                  Total Assets
                </div>
              </div>
              <div
                className="absolute -bottom-4 -right-4 glass dark:glass-dark rounded-xl p-4 animate-float"
                style={{ animationDelay: "3s" }}
              >
                <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                  +23%
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400">
                  This Month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
