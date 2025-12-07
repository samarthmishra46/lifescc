import { Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Will the results look natural?',
    answer: 'Yes. Your hairline is designed scientifically based on your age, face shape and natural growth pattern to ensure seamless, natural results.'
  },
  {
    question: 'Is the transplant painful or surgical?',
    answer: 'The FUE procedure is minimally invasive, comfortable and performed under local anaesthesia with no visible scarring.'
  },
  {
    question: 'When will I see results?',
    answer: 'Early growth starts in 3 to 4 months, with full density visible between 9 to 12 months depending on your case.'
  },
  {
    question: 'Do women also get these treatments?',
    answer: 'Absolutely. LIFESCC treats both male and female hair-loss conditions with customised solutions.'
  },
  {
    question: 'Are there non-surgical options?',
    answer: 'Yes. For early-stage hair fall, stem-cell therapy, PRP and medical treatments work extremely well without surgery.'
  },
  {
    question: 'How long do the results last?',
    answer: 'Transplanted hair is permanent. Regrowth programs stay effective with proper scalp care and follow-ups.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">Get answers to common questions about hair restoration at LIFESCC</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-emerald-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900 text-lg pr-8">{faq.question}</span>
                <Plus
                  className={`w-6 h-6 text-emerald-600 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Have more questions? We're here to help!</p>
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/30">
            Talk to a Hair Specialist
          </button>
        </div>
      </div>
    </section>
  );
}
