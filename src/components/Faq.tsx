import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(1); // Second item open by default

  const faqData = [
    {
      question: "What industries have you worked in as a product designer?",
      answer: "I've worked in the tech, e-commerce, and healthcare industries, focusing on user-centric digital product design."
    },
    {
      question: "Can I download your resume/CV for information?",
      answer: "Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and design achievements."
    },
    {
      question: "Are you available for freelance design work?",
      answer: "Yes, I'm currently available for freelance design projects and always open to new collaborations."

    },
    {
      question: "What tools do you use for your design work?",
      answer: "I primarily use Figma, Adobe XD, Illustrator, and Photoshop for my design work."

    },
    {
      question: "How do I navigate through your portfolio projects?",
      answer:"You can navigate through my portfolio projects by scrolling or clicking on each project thumbnail to view detailed case studies."

    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-green-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className='text-4xl font-bold text-white'> <span className='text-orange-400'>-</span>FAQs</h1>
          <h1 className="text-5xl font-bold text-white mb-4">
            Questions? <span className="text-yellow-500">LOOK HERE!</span>
          </h1>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-green-700 rounded-lg overflow-hidden shadow-lg">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-green-800 transition-colors duration-200"
              >
                <span className="text-white text-lg font-medium pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-white" />
                  ) : (
                    <Plus className="w-6 h-6 text-white" />
                  )}
                </div>
              </button>
              
              {openIndex === index && faq.answer && (
                <div className="px-6 pb-5">
                  <div className="bg-yellow-400 rounded-lg p-4">
                    <p className="text-slate-800 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}