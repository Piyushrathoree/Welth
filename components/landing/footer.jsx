import React from "react";
import { Wallet } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-100 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Wallet className="text-white w-4 h-4" />
            </div>
            <span className="font-serif font-bold text-lg text-slate-900 dark:text-white">
              Welth
            </span>
          </div>
          <p className="text-slate-500 dark:text-neutral-500 text-sm">
            Making personal finance simple, smart, and secure for everyone.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-slate-900 dark:text-white">
            Product
          </h4>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-neutral-500">
            <li>
              <a href="#" className="hover:text-blue-600">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Security
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-slate-900 dark:text-white">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-neutral-500">
            <li>
              <a href="#" className="hover:text-blue-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-slate-900 dark:text-white">
            Legal
          </h4>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-neutral-500">
            <li>
              <a href="#" className="hover:text-blue-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 dark:border-neutral-800 text-center text-sm text-slate-400 dark:text-neutral-600">
        © 2025 Welth Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
