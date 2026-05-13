"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What is an RCIC?",
    answer:
      "A Regulated Canadian Immigration Consultant (RCIC) is an authorized immigration and citizenship representative, who is hired for their professional consultancy & immigration services. In addition, an RCIC provides you with a beneficial strategy for your best options.",
  },
  {
    question: "What is the ICCRC?",
    answer:
      "The Immigration Consultants of Canada Regulatory Council (ICCRC) is the national regulatory body that governs Regulated Canadian Immigration Consultants (RCICs) and International Student Immigration Advisors (ISIAs). It ensures that members meet professional standards and adhere to a code of professional ethics.",
  },
  {
    question: "Why hire an RCIC?",
    answer:
      "Hiring an RCIC ensures you receive professional, regulated immigration advice. RCICs are trained experts who understand the complexities of Canadian immigration law and can help you navigate the process efficiently, reducing errors and improving your chances of success.",
  },
  {
    question: "What is an authorised immigration consultant?",
    answer:
      "An authorised immigration consultant is a professional who is legally permitted to provide immigration advice and services. In Canada, this means being a member in good standing of the ICCRC or being a licensed lawyer or notary.",
  },
  {
    question: "What is an unauthorised representative?",
    answer:
      "An unauthorised representative is someone who charges fees or receives other consideration to offer immigration advice or services, but is not authorised to do so. Using unauthorised representatives is illegal and can seriously jeopardise your immigration application.",
  },
];

interface FAQAccordionProps {
  faqs?: FAQItem[];
  showTitle?: boolean;
}

export default function FAQAccordion({ faqs = defaultFaqs, showTitle = true }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-12">
      {showTitle && (
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-primary font-serif italic">
            FAQ&apos;s
          </h2>
          <div className="mt-3 mx-auto w-12 h-0.75 bg-red-600 rounded-full" />
        </div>
      )}

      <div className="flex flex-col divide-y divide-gray-200 border-t border-gray-200">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="bg-gray-50">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center gap-3 px-5 py-4 text-left cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                aria-expanded={isOpen}
              >
                <span className="text-primary shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-primary font-medium text-base">
                  {item.question}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2 bg-white border-t border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}