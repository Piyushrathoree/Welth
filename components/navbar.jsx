"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Wallet, Menu, X } from "lucide-react";
import Button from "@/components/landing/button";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? " backdrop-blur-md  border-slate-200 dark:border-neutral-800 bg-transparent py-5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Wallet className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight">
              Welth
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <SignedOut>
            <a
              href="#features"
              className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Stories
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              How it Works
            </a>
          </SignedOut>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <AnimatedThemeToggler />

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="ghost">Sign In</Button>
            </SignInButton>
            <Link
              href="/dashboard"
              className="relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-1"
            >
              Get Started
            </Link>
          </SignedOut>

          <SignedIn>
            <Button variant="ghost" href="/dashboard">
              Dashboard
            </Button>
            <Link
              href="/transaction/create"
              className="relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-1"
            >
              <span className="hidden lg:inline">Add Transaction</span>
            </Link>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>

        <button
          className="md:hidden dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-neutral-900 border-b border-slate-200 dark:border-neutral-800 p-4 flex flex-col gap-4 shadow-xl">
          <SignedOut>
            <a
              href="#features"
              className="block py-2 font-medium dark:text-neutral-200"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="block py-2 font-medium dark:text-neutral-200"
            >
              Stories
            </a>
            <a
              href="#how-it-works"
              className="block py-2 font-medium dark:text-neutral-200"
            >
              How it Works
            </a>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="secondary" className="w-full">
                Sign In
              </Button>
            </SignInButton>
            <Button variant="primary" className="w-full" href="/dashboard">
              Get Started
            </Button>
          </SignedOut>

          <SignedIn>
            <Button
              variant="primary"
              className="w-full"
              href="/transaction/create"
            >
              Add Transaction
            </Button>
            <Button variant="ghost" className="w-full" href="/dashboard">
              Dashboard
            </Button>
            <div className="flex justify-center pt-2">
              <UserButton />
            </div>
          </SignedIn>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
