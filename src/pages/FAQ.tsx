import React, { useState } from 'react';
const FAQ = () => {
  const faqs = [{
    question: 'How do you match tutors with students?',
    answer: "We match tutors based on the student's academic needs, learning style, personality, and schedule. We carefully screen all our tutors to ensure they have the necessary qualifications and experience to provide effective instruction."
  }, {
    question: 'Where do tutoring sessions take place?',
    answer: 'We offer both online tutoring through our secure platform and in-person tutoring options depending on your location and preference. Our online platform includes video conferencing, shared whiteboard, and document sharing capabilities.'
  }, {
    question: 'How much does tutoring cost?',
    answer: 'Our tutoring rates vary based on the subject, level of instruction, and tutor experience. We offer different packages to accommodate various budgets. Please visit our Pricing page for detailed information on our current rates.'
  }, {
    question: 'How often should my child meet with a tutor?',
    answer: "The frequency of sessions depends on your child's needs and goals. Some students benefit from weekly sessions, while others may need more intensive support with 2-3 sessions per week. Your tutor will recommend an optimal schedule after the initial assessment."
  }, {
    question: 'What subjects do you offer tutoring in?',
    answer: 'We offer tutoring in a wide range of subjects including Mathematics, Science, English, History, Foreign Languages, Test Preparation, and more. Our tutors specialize in various grade levels from elementary school through college.'
  }, {
    question: "Can I change tutors if it's not a good fit?",
    answer: "Absolutely! We want your child to have the best possible experience. If you feel the current tutor isn't the right match, we'll work with you to find a more suitable tutor at no additional cost."
  }, {
    question: 'Do you offer any guarantees?',
    answer: "We're confident in our tutors' abilities to help your child improve academically. We offer a satisfaction guarantee for the first session – if you're not satisfied, the session is free and we'll work to find a better match."
  }, {
    question: "How do I track my child's progress?",
    answer: "Depending on your chosen plan, you'll receive regular progress reports. These reports outline areas of improvement, ongoing challenges, and recommendations for continued growth. You can also schedule check-in meetings with tutors."
  }];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <main className="w-full bg-white">
      <section className="py-16 md:py-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Find answers to common questions about our tutoring services.
        </p>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-blue-600 focus:outline-none transition-colors" onClick={() => toggleFAQ(index)}>
                <span className="text-lg">{faq.question}</span>
                <svg className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`mt-2 text-gray-600 ${openIndex === index ? 'block' : 'hidden'}`}>
                {faq.answer}
              </div>
            </div>)}
        </div>
      </section>
    </main>;
};
export default FAQ;