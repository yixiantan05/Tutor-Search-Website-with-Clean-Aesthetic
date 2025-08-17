import React from 'react';

const FAQ = () => {
  const faqs = [{
    category: "For Parents",
    items: [{
      question: 'How does the matching process work?',
      answer: "We pair you with a tutor based on your requirements. You’ll receive profiles to choose from, and lessons can start as soon as you confirm."
    }, {
      question: 'How are tutors screened?',
      answer: 'Every tutor undergoes qualification checks and identity verification (optionally via Singpass).'
    }, {
      question: 'What subjects and levels are available?',
      answer: 'We cover most subjects from Primary to JC.'
    }, {
      question: 'How are lessons conducted?',
      answer: 'Either online or in-person, depending on your choice and the tutor’s availability.'
    }, {
      question: 'How do I pay for lessons?',
      answer: 'Payments can be made via PayNow, bank transfer, or credit card in the website.'
    }, {
      question: 'What if my child misses a lesson?',
      answer: 'Notify your tutor early and a make-up classes can be arranged.'
    }, {
      question: 'Is my data safe?',
      answer: 'Yes. We are PDPA-compliant and store data securely.'
    }]
  }, {
    category: "Questions for Tutors",
    items: [{
      question: 'How do I sign up?',
      answer: 'Fill in our online form, upload documents, and complete verification.'
    }, {
      question: 'How will I get students?',
      answer: 'Our algorithm recommends you to parents looking for your expertise.'
    }, {
      question: 'What are the fees?',
      answer: 'We only take a commission for the first month’s lessons with each new student.'
    }, {
      question: 'Can I set my own rates?',
      answer: 'Yes, and you can update them anytime.'
    }, {
      question: 'What if a student cancels a lesson?',
      answer: 'We recommend a 24-hour notice policy, but you can set your own rules.'
    }, {
      question: 'How do I get paid?',
      answer: 'Payments are transferred via PayNow or bank transfer after lessons are completed.'
    }, {
      question: 'Can I teach online only?',
      answer: 'Yes. Many tutors choose to teach only online.'
    }]
  }];

  return (
    <main className="w-full bg-white dark:bg-gray-900">
      <section className="py-16 md:py-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-centere text-gray-800 dark:text-white mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Find answers to common questions about our tutoring services.
        </p>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faqGroup, groupIndex) => (
            <div key={groupIndex} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {faqGroup.category}
              </h2>
              {faqGroup.items.map((faq, index) => (
                <details key={index} className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                  <summary className="flex justify-between items-center w-full text-left font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors cursor-pointer">
                    <span className="text-lg">{faq.question}</span>
                    <svg className="w-5 h-5 details-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </summary>
                  <div className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</div>
                </details>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FAQ;
