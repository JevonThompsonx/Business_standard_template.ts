import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqItems: FAQItem[] = [
    {
      question: 'What should I wear to a yoga class?',
      answer: 'Wear comfortable, breathable clothing that allows for movement. Yoga is typically practiced barefoot.',
    },
    {
      question: 'Do I need to bring my own mat?',
      answer: 'We provide mats for beginners, but regular practitioners may prefer to bring their own for hygiene and comfort.',
    },
    {
      question: 'How often should I practice yoga?',
      answer: 'Start with 2-3 times per week and gradually increase as you feel comfortable. Consistency is more important than duration.',
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extralight text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-8">
          {faqItems.map((faq, index) => (
            <AccordionItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ faq }: { faq: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-700 hover:text-gray-900">
          {faq.question}
        </span>
        <span className="ml-6 h-7 flex items-center">
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
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
        </span>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-500 pb-6">{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQSection;