"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

// Define a type for the FAQ item
type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What services does your agency offer?",
    answer:
      "We provide full-service solutions including branding, UI/UX design, frontend development, digital marketing, and ongoing product support.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project duration depends on the scope, but typically ranges from 2 to 6 weeks for most websites and marketing campaigns.",
  },
  {
    question: "Do you work with startups or large enterprises?",
    answer:
      "Yes! We tailor our process to fit both early-stage startups and established enterprises.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing — fixed packages, hourly rates, and retainer models depending on project needs.",
  },
];

const Faq: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0f172a] to-[#1e293b] py-20 px-6 text-white overflow-hidden">
      {/* Animated Glow Effects */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />

      <div className="max-w-4xl mx-auto text-center mb-14 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Still curious? We’re here to help. Explore common queries below.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="max-w-2xl mx-auto space-y-6 relative z-10"
      >
        {faqData.map((faq, index) => (
          <AccordionItem
            key={`faq-item-${index}`}
            value={`item-${index}`}
            className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold text-white hover:text-blue-400">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-gray-300 text-sm">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
