import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { SectionTitle, Card } from '../ui';
import faqData from '../../data/faq.json';
import { type FAQItem } from '../../types';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);
  const faqs: FAQItem[] = faqData as FAQItem[];

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-container border-t border-slate-100 dark:border-slate-800/80">
      <SectionTitle
        badge="Clarifying Doubts"
        title="Frequently Asked Questions"
        subtitle="Common questions from aspiring programmers, college students, and placement candidates considering our Data Structures & Algorithms mentorship."
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div key={faq.id} className="transition-all duration-200">
              <Card
                hoverEffect={false}
                className={`overflow-hidden border transition-all ${
                  isOpen
                    ? 'border-primary/60 dark:border-primary-light/50 shadow-md bg-white dark:bg-slate-800/95'
                    : 'border-slate-200 dark:border-slate-700/70 bg-white dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[48px]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-primary dark:text-primary-light' : 'text-slate-400'}`} />
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`p-1.5 rounded-full border transition-transform duration-300 ${
                    isOpen ? 'bg-indigo-50 dark:bg-slate-700 text-primary border-indigo-200 dark:border-slate-600 rotate-180' : 'bg-slate-50 dark:bg-slate-900 text-slate-400 border-slate-200 dark:border-slate-700'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 pt-0 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-body leading-relaxed border-t border-slate-100 dark:border-slate-700/50 mt-1">
                        {faq.category && (
                          <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold uppercase rounded-full bg-slate-100 dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 mb-2.5 border border-slate-200 dark:border-slate-700">
                            {faq.category}
                          </span>
                        )}
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center max-w-xl mx-auto p-6 rounded-card bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center justify-center gap-1.5">
          <Sparkles className="w-4 h-4 text-emerald-500" /> Still have a unique question about your learning roadmap?
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Ask our interactive <strong className="text-primary dark:text-primary-light">AI DSA Mentor</strong> at the bottom right corner, or message Shyam directly via WhatsApp!
        </p>
      </div>
    </section>
  );
};
