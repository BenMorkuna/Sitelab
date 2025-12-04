'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="bg-[#1b1b1b] rounded-2xl border border-gray-800 hover:border-[#13aff0]/50 transition-all overflow-hidden"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full p-8 text-left flex items-center justify-between gap-4 group"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <h3
                className="text-xl font-bold text-white group-hover:text-[#13aff0] transition-colors"
                itemProp="name"
              >
                {item.question}
              </h3>
              <svg
                className={`w-6 h-6 text-[#13aff0] flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              id={`faq-answer-${index}`}
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
              style={{
                overflow: 'hidden',
              }}
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <div className="px-8 pb-8" itemProp="text">
                {typeof item.answer === 'string' ? (
                  <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                ) : (
                  item.answer
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
