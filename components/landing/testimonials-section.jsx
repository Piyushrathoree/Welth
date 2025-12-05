import React from "react";
import TestimonialCard from "@/components/landing/testimonial-card";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-neutral-900 border-y border-slate-100 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-slate-900 dark:text-white">
            Loved by users everywhere
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here is what our community has
            to say about their journey to financial freedom.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Welth completely changed how I look at my finances. I finally have clarity on where my money is going."
            author="Sarah Jenkins"
            role="Freelance Designer"
          />
          <TestimonialCard
            quote="The AI insights are spooky accurate. It predicted a budget overrun before it happened and saved me ₹200."
            author="Michael Chen"
            role="Software Engineer"
          />
          <TestimonialCard
            quote="Best investment tracker I've used. The interface is gorgeous and it handles my crypto wallet perfectly."
            author="Elena Rodriguez"
            role="Digital Marketer"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
