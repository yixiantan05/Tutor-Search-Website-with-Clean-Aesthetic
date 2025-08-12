import React, { useState } from 'react';
const Pricing = () => {
  const [expandedLevel, setExpandedLevel] = useState(null);
  const pricingLevels = [{
    name: 'Basic',
    description: 'Perfect for occasional help with homework',
    basePrice: 25,
    popular: false,
    features: ['1-on-1 tutoring sessions', 'Homework assistance', 'Basic progress reports'],
    subjects: [{
      name: 'Mathematics',
      price: 25
    }, {
      name: 'English',
      price: 25
    }, {
      name: 'Science',
      price: 28
    }, {
      name: 'History',
      price: 23
    }, {
      name: 'Languages',
      price: 27
    }]
  }, {
    name: 'Standard',
    description: 'Regular support for academic improvement',
    basePrice: 35,
    popular: true,
    features: ['All Basic features', 'Custom learning plan', 'Monthly progress assessments', 'Access to practice materials'],
    subjects: [{
      name: 'Mathematics',
      price: 35
    }, {
      name: 'English',
      price: 35
    }, {
      name: 'Science',
      price: 38
    }, {
      name: 'Physics',
      price: 40
    }, {
      name: 'Chemistry',
      price: 40
    }, {
      name: 'Biology',
      price: 37
    }, {
      name: 'History',
      price: 33
    }, {
      name: 'Languages',
      price: 37
    }, {
      name: 'Computer Science',
      price: 42
    }]
  }, {
    name: 'Premium',
    description: 'Comprehensive academic excellence program',
    basePrice: 50,
    popular: false,
    features: ['All Standard features', 'Advanced exam preparation', 'Weekly progress reports', 'Parent-teacher consultations'],
    subjects: [{
      name: 'Mathematics',
      price: 50
    }, {
      name: 'English',
      price: 50
    }, {
      name: 'Science',
      price: 55
    }, {
      name: 'Physics',
      price: 60
    }, {
      name: 'Chemistry',
      price: 60
    }, {
      name: 'Biology',
      price: 55
    }, {
      name: 'History',
      price: 48
    }, {
      name: 'Languages',
      price: 52
    }, {
      name: 'Computer Science',
      price: 65
    }, {
      name: 'SAT/ACT Prep',
      price: 70
    }, {
      name: 'IB/AP Courses',
      price: 75
    }]
  }];
  const toggleExpand = index => {
    if (expandedLevel === index) {
      setExpandedLevel(null);
    } else {
      setExpandedLevel(index);
    }
  };
  return <main className="w-full bg-white dark:bg-gray-900">
      <section className="py-16 md:py-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Choose the right tutoring plan that fits your child's needs and
          budget.
        </p>
        {/* Subject-based pricing table */}
        <div className="max-w-5xl mx-auto mb-16 overflow-x-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Pricing by Subject & Level
          </h2>
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-200">
                  Subject
                </th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-700 dark:text-gray-200">
                  Basic
                  <br />
                  <span className="font-normal text-xs">$/hour</span>
                </th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-700 dark:text-gray-200 bg-blue-50 dark:bg-blue-900/30">
                  Standard
                  <br />
                  <span className="font-normal text-xs">$/hour</span>
                </th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-700 dark:text-gray-200">
                  Premium
                  <br />
                  <span className="font-normal text-xs">$/hour</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {/* Mathematics */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Mathematics
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  $25
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $35
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  $50
                </td>
              </tr>
              {/* Physics */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Physics
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $40
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  $60
                </td>
              </tr>
              {/* Chemistry */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Chemistry
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $40
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  $60
                </td>
              </tr>
              {/* Biology */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Biology
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $37
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  $55
                </td>
              </tr>
              {/* English */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  English
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  $25
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $35
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  $50
                </td>
              </tr>
              {/* History */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  History
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  $23
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $33
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  $48
                </td>
              </tr>
              {/* Languages */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Languages
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  $27
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $37
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  $52
                </td>
              </tr>
              {/* Computer Science */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Computer Science
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $42
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  $65
                </td>
              </tr>
              {/* SAT/ACT Prep */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  SAT/ACT Prep
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  -
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  $70
                </td>
              </tr>
              {/* IB/AP Courses */}
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  IB/AP Courses
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  -
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                  $75
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pricing packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingLevels.map((level, index) => <div key={level.name} className={`bg-white dark:bg-gray-800 border ${level.popular ? 'border-2 border-blue-600' : 'border-gray-200 dark:border-gray-700'} rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow ${level.popular ? 'shadow-md' : ''}`}>
              {level.popular && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>}
              <div className={level.popular ? 'relative' : ''}>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {level.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {level.description}
                </p>
                <p className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                  ${level.basePrice}{' '}
                  <span className="text-lg text-gray-600 dark:text-gray-400 font-normal">
                    /hour
                  </span>
                </p>
                <ul className="mb-8 space-y-3">
                  {level.features.map((feature, idx) => <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>)}
                </ul>
                <button onClick={() => toggleExpand(index)} className="w-full py-2 mb-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex justify-between items-center px-4">
                  <span>View Subject Pricing</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${expandedLevel === index ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {expandedLevel === index && <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-4 mb-6">
                    <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Subject-specific pricing:
                    </h4>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {level.subjects.map((subject, idx) => <div key={idx} className="flex justify-between items-center text-sm py-1 border-b border-gray-200 dark:border-gray-600">
                          <span className="dark:text-gray-300">
                            {subject.name}
                          </span>
                          <span className="font-medium dark:text-white">
                            ${subject.price}/hour
                          </span>
                        </div>)}
                    </div>
                  </div>}
                <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>)}
        </div>
      </section>
    </main>;
};
export default Pricing;