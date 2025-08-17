import React, { useState } from 'react';

const Pricing = () => {
  const [expandedLevel, setExpandedLevel] = useState(null);
  const pricingLevels = [
    {
      name: 'Basic',
      description: 'Perfect for occasional help with homework',
      basePrice: 25,
      popular: false,
      features: [
        '1-on-1 tutoring sessions',
        'Homework assistance',
        'Basic progress reports',
      ],
      subjects: [
        {
          name: 'Mathematics',
          price: 25,
        },
        {
          name: 'English',
          price: 25,
        },
        {
          name: 'Science',
          price: 28,
        },
        {
          name: 'History',
          price: 23,
        },
        {
          name: 'Languages',
          price: 27,
        },
      ],
    },
    {
      name: 'Standard',
      description: 'Regular support for academic improvement',
      basePrice: 35,
      popular: true,
      features: [
        'All Basic features',
        'Custom learning plan',
        'Monthly progress assessments',
        'Access to practice materials',
      ],
      subjects: [
        {
          name: 'Mathematics',
          price: 35,
        },
        {
          name: 'English',
          price: 35,
        },
        {
          name: 'Science',
          price: 38,
        },
        {
          name: 'Physics',
          price: 40,
        },
        {
          name: 'Chemistry',
          price: 40,
        },
        {
          name: 'Biology',
          price: 37,
        },
        {
          name: 'History',
          price: 33,
        },
        {
          name: 'Languages',
          price: 37,
        },
        {
          name: 'Computer Science',
          price: 42,
        },
      ],
    },
    {
      name: 'Premium',
      description: 'Comprehensive academic excellence program',
      basePrice: 50,
      popular: false,
      features: [
        'All Standard features',
        'Advanced exam preparation',
        'Weekly progress reports',
        'Parent-teacher consultations',
      ],
      subjects: [
        {
          name: 'Mathematics',
          price: 50,
        },
        {
          name: 'English',
          price: 50,
        },
        {
          name: 'Science',
          price: 55,
        },
        {
          name: 'Physics',
          price: 60,
        },
        {
          name: 'Chemistry',
          price: 60,
        },
        {
          name: 'Biology',
          price: 55,
        },
        {
          name: 'History',
          price: 48,
        },
        {
          name: 'Languages',
          price: 52,
        },
        {
          name: 'Computer Science',
          price: 65,
        },
        {
          name: 'SAT/ACT Prep',
          price: 70,
        },
        {
          name: 'IB/AP Courses',
          price: 75,
        },
      ],
    },
  ];

  const toggleExpand = (index) => {
    if (expandedLevel === index) {
      setExpandedLevel(null);
    } else {
      setExpandedLevel(index);
    }
  };

  return (
    <main className="w-full bg-white dark:bg-gray-900">
      <section className="py-16 md:py-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Find the Right Tutor, at the Right Price
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Choose the right tutoring plan that fits your needs and
          budget.
        </p>

        {/* Primary Level Table */}
        <div className="max-w-xl mx-auto mb-16 overflow-x-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
            Primary Level
          </h2>
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-200">
                  Subject
                </th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-700 dark:text-gray-200 bg-blue-50 dark:bg-blue-900/30">
                  Price
                  <br />
                  <span className="font-normal text-xs">$/hour</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Mathematics
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $30
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  English
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $30
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Science
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $32
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Chinese
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $30
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Secondary Level Table */}
        <div className="max-w-xl mx-auto mb-16 overflow-x-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
            Secondary Level
          </h2>
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-200">
                  Subject
                </th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-700 dark:text-gray-200 bg-blue-50 dark:bg-blue-900/30">
                  Price
                  <br />
                  <span className="font-normal text-xs">$/hour</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Mathematics
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $35
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Accounting
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $35
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  English
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $35
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Chinese
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $40
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Physics
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $40
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Chemistry
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $40
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Biology
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $37
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Geography
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $33
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  History
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $33
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Literature
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $35
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* JC Level Table */}
        <div className="max-w-xl mx-auto mb-16 overflow-x-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
            JC Level
          </h2>
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-200">
                  Subject
                </th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-700 dark:text-gray-200 bg-blue-50 dark:bg-blue-900/30">
                  Price
                  <br />
                  <span className="font-normal text-xs">$/hour</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  General Paper (H1)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $40
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Chinese (H1)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $40
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Mathematics (H1)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $45
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Mathematics (H2)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $50
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Chemistry (H1)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $45
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Chemistry (H2)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $50
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Biology (H1)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $45
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Biology (H2)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $50
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Literature (H1)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $45
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Literature (H2)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $50
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Geography (H1)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $45
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Geography (H2)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $50
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  History (H1)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $45
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  History (H2)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $50
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Economics (H1)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $48
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Economics (H2)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $55
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Physics (H1)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $45
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                  Physics (H2)
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30">
                  $50
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
