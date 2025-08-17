import React from 'react';

const FreeTestPapers = () => {
  const testPapersByLevel = [{
    levelName: 'Primary Level',
    subjects: [{
      name: 'Primary English',
      papers: [{
        title: 'English P3 Past Year Paper',
        level: 'P3',
        downloadLink: '#'
      }, {
        title: 'English P4 Past Year Paper',
        level: 'P4',
        downloadLink: '#'
      }, {
        title: 'English P5 Past Year Paper',
        level: 'P5',
        downloadLink: '#'
      }, {
        title: 'English P6 Past Year Paper',
        level: 'P6',
        downloadLink: '#'
      }]
    }, {
      name: 'Primary Mathematics',
      papers: [{
        title: 'Mathematics P3 Past Year Paper',
        level: 'P3',
        downloadLink: '#'
      }, {
        title: 'Mathematics P4 Past Year Paper',
        level: 'P4',
        downloadLink: '#'
      }, {
        title: 'Mathematics P5 Past Year Paper',
        level: 'P5',
        downloadLink: '#'
      }, {
        title: 'Mathematics P6 Past Year Paper',
        level: 'P6',
        downloadLink: '#'
      }]
    }, {
      name: 'Primary Science',
      papers: [{
        title: 'Science P3 Past Year Paper',
        level: 'P3',
        downloadLink: '#'
      }, {
        title: 'Science P4 Past Year Paper',
        level: 'P4',
        downloadLink: '#'
      }, {
        title: 'Science P5 Past Year Paper',
        level: 'P5',
        downloadLink: '#'
      }, {
        title: 'Science P6 Past Year Paper',
        level: 'P6',
        downloadLink: '#'
      }]
    }]
  }, {
    levelName: 'Secondary Level',
    subjects: [{
      name: 'Secondary English',
      papers: [{
        title: 'English Sec 1 Past Year Paper',
        level: 'Sec 1',
        downloadLink: '#'
      }, {
        title: 'English Sec 2 Past Year Paper',
        level: 'Sec 2',
        downloadLink: '#'
      }, {
        title: 'English Sec 3 Past Year Paper',
        level: 'Sec 3',
        downloadLink: '#'
      }, {
        title: 'English Sec 4 Past Year Paper',
        level: 'Sec 4',
        downloadLink: '#'
      }]
    }, {
      name: 'Secondary Mathematics',
      papers: [{
        title: 'Mathematics Sec 1 Past Year Paper',
        level: 'Sec 1',
        downloadLink: '#'
      }, {
        title: 'Mathematics Sec 2 Past Year Paper',
        level: 'Sec 2',
        downloadLink: '#'
      }, {
        title: 'E-Mathematics Sec 3 Past Year Paper',
        level: 'Sec 3',
        downloadLink: '#'
      }, {
        title: 'A-Mathematics Sec 3 Past Year Paper',
        level: 'Sec 3',
        downloadLink: '#'
      }, {
        title: 'E-Mathematics Sec 4 Past Year Paper',
        level: 'Sec 4',
        downloadLink: '#'
      }, {
        title: 'A-Mathematics Sec 4 Past Year Paper',
        level: 'Sec 4',
        downloadLink: '#'
      }]
    }, {
      name: 'Chemistry',
      papers: [{
        title: 'Chemistry Sec 1 Past Year Paper',
        level: 'Sec 1',
        downloadLink: '#'
      }, {
        title: 'Chemistry Sec 2 Past Year Paper',
        level: 'Sec 2',
        downloadLink: '#'
      }, {
        title: 'Chemistry Sec 3 Past Year Paper',
        level: 'Sec 3',
        downloadLink: '#'
      }, {
        title: 'Chemistry Sec 4 Past Year Paper',
        level: 'Sec 4',
        downloadLink: '#'
      }]
    }, {
      name: 'Biology',
      papers: [{
        title: 'Biology Sec 1 Past Year Paper',
        level: 'Sec 1',
        downloadLink: '#'
      }, {
        title: 'Biology Sec 2 Past Year Paper',
        level: 'Sec 2',
        downloadLink: '#'
      }, {
        title: 'Biology Sec 3 Past Year Paper',
        level: 'Sec 3',
        downloadLink: '#'
      }, {
        title: 'Biology Sec 4 Past Year Paper',
        level: 'Sec 4',
        downloadLink: '#'
      }]
    }, {
      name: 'Physics',
      papers: [{
        title: 'Physics Sec 1 Past Year Paper',
        level: 'Sec 1',
        downloadLink: '#'
      }, {
        title: 'Physics Sec 2 Past Year Paper',
        level: 'Sec 2',
        downloadLink: '#'
      }, {
        title: 'Physics Sec 3 Past Year Paper',
        level: 'Sec 3',
        downloadLink: '#'
      }, {
        title: 'Physics Sec 4 Past Year Paper',
        level: 'Sec 4',
        downloadLink: '#'
      }]
    }, {
      name: 'Geography',
      papers: [{
        title: 'Geography Sec 1 Past Year Paper',
        level: 'Sec 1',
        downloadLink: '#'
      }, {
        title: 'Geography Sec 2 Past Year Paper',
        level: 'Sec 2',
        downloadLink: '#'
      }, {
        title: 'Geography Sec 3 Past Year Paper',
        level: 'Sec 3',
        downloadLink: '#'
      }, {
        title: 'Geography Sec 4 Past Year Paper',
        level: 'Sec 4',
        downloadLink: '#'
      }]
    }, {
      name: 'History',
      papers: [{
        title: 'History Sec 1 Past Year Paper',
        level: 'Sec 1',
        downloadLink: '#'
      }, {
        title: 'History Sec 2 Past Year Paper',
        level: 'Sec 2',
        downloadLink: '#'
      }, {
        title: 'History Sec 3 Past Year Paper',
        level: 'Sec 3',
        downloadLink: '#'
      }, {
        title: 'History Sec 4 Past Year Paper',
        level: 'Sec 4',
        downloadLink: '#'
      }]
    }, {
      name: 'Literature',
      papers: [{
        title: 'Literature Sec 1 Past Year Paper',
        level: 'Sec 1',
        downloadLink: '#'
      }, {
        title: 'Literature Sec 2 Past Year Paper',
        level: 'Sec 2',
        downloadLink: '#'
      }, {
        title: 'Literature Sec 3 Past Year Paper',
        level: 'Sec 3',
        downloadLink: '#'
      }, {
        title: 'Literature Sec 4 Past Year Paper',
        level: 'Sec 4',
        downloadLink: '#'
      }]
    }, {
      name: 'Chinese',
      papers: [{
        title: 'Chinese Sec 1 Past Year Paper',
        level: 'Sec 1',
        downloadLink: '#'
      }, {
        title: 'Chinese Sec 2 Past Year Paper',
        level: 'Sec 2',
        downloadLink: '#'
      }, {
        title: 'Chinese Sec 3 Past Year Paper',
        level: 'Sec 3',
        downloadLink: '#'
      }, {
        title: 'Chinese Sec 4 Past Year Paper',
        level: 'Sec 4',
        downloadLink: '#'
      }]
    }, {
      name: 'Principles of Accounting',
      papers: [{
        title: 'Principles of Accounting Sec 3 Past Year Paper',
        level: 'Sec 3',
        downloadLink: '#'
      }, {
        title: 'Principles of Accounting Sec 4 Past Year Paper',
        level: 'Sec 4',
        downloadLink: '#'
      }]
    }]
  }, {
    levelName: 'Junior College (JC) Level',
    subjects: [{
      name: 'General Paper (GP)',
      papers: [{
        title: 'General Paper J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }, {
        title: 'General Paper J2 Past Year Paper',
        level: 'J2',
        downloadLink: '#'
      }]
    }, {
      name: 'H1 Mathematics',
      papers: [{
        title: 'H1 Mathematics J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }, {
        title: 'H1 Mathematics J2 Past Year Paper',
        level: 'J2',
        downloadLink: '#'
      }]
    }, {
      name: 'H2 Mathematics',
      papers: [{
        title: 'H2 Mathematics J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }, {
        title: 'H2 Mathematics J2 Past Year Paper',
        level: 'J2',
        downloadLink: '#'
      }]
    }, {
      name: 'H1 Chemistry',
      papers: [{
        title: 'H1 Chemistry J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }, {
        title: 'H1 Chemistry J2 Past Year Paper',
        level: 'J2',
        downloadLink: '#'
      }]
    }, {
      name: 'H2 Chemistry',
      papers: [{
        title: 'H2 Chemistry J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }, {
        title: 'H2 Chemistry J2 Past Year Paper',
        level: 'J2',
        downloadLink: '#'
      }]
    }, {
      name: 'H1 Physics',
      papers: [{
        title: 'H1 Physics J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }, {
        title: 'H2 Physics J2 Past Year Paper',
        level: 'J2',
        downloadLink: '#'
      }]
    }, {
      name: 'H2 Physics',
      papers: [{
        title: 'H2 Physics J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }, {
        title: 'H2 Physics J2 Past Year Paper',
        level: 'J2',
        downloadLink: '#'
      }]
    }, {
      name: 'H1 Economics',
      papers: [{
        title: 'H1 Economics J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }, {
        title: 'H1 Economics J2 Past Year Paper',
        level: 'J2',
        downloadLink: '#'
      }]
    }, {
      name: 'H2 Economics',
      papers: [{
        title: 'H2 Economics J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }, {
        title: 'H2 Economics J2 Past Year Paper',
        level: 'J2',
        downloadLink: '#'
      }]
    }, {
      name: 'H1 Literature',
      papers: [{
        title: 'H1 Literature J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }, {
        title: 'H1 Literature J2 Past Year Paper',
        level: 'J2',
        downloadLink: '#'
      }]
    }, {
      name: 'H2 Literature',
      papers: [{
        title: 'H2 Literature J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }, {
        title: 'H2 Literature J2 Past Year Paper',
        level: 'J2',
        downloadLink: '#'
      }]
    }, {
      name: 'H1 Geography',
      papers: [{
        title: 'H1 Geography J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }, {
        title: 'H1 Geography J2 Past Year Paper',
        level: 'J2',
        downloadLink: '#'
      }]
    }, {
      name: 'H2 Geography',
      papers: [{
        title: 'H2 Geography J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }, {
        title: 'H2 Geography J2 Past Year Paper',
        level: 'J2',
        downloadLink: '#'
      }]
    }, {
      name: 'H1 History',
      papers: [{
        title: 'H1 History J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }, {
        title: 'H1 History J2 Past Year Paper',
        level: 'J2',
        downloadLink: '#'
      }]
    }, {
      name: 'H2 History',
      papers: [{
        title: 'H2 History J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }, {
        title: 'H2 History J2 Past Year Paper',
        level: 'J2',
        downloadLink: '#'
      }]
    }, {
      name: 'H1 Chinese',
      papers: [{
        title: 'H1 Chinese J1 Past Year Paper',
        level: 'J1',
        downloadLink: '#'
      }]
    }]
  }];

  const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019];

  return (
    <main className="w-full bg-white dark:bg-gray-900">
      <section className="py-16 md:py-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Your Free Resource for Exam Success
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Sharpen your skills with past papers, model answers, and marking schemes.
        </p>

        <div className="max-w-4xl mx-auto">
          {testPapersByLevel.map((level, levelIndex) => (
            <details key={levelIndex} className="mb-6 rounded-lg shadow-md overflow-hidden bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700">
              <summary className="flex justify-between items-center px-6 py-4 cursor-pointer focus:outline-none bg-white dark:bg-gray-900">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {level.levelName}
                </h2>
                <svg className="w-6 h-6 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 details-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <div className="p-6">
                {level.subjects.map((subject, subjectIndex) => (
                  <div key={subjectIndex} className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{subject.name}</h3>
                    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-800">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              Test Paper
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              Level
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-[150px]">
                              Select
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          {subject.papers.map((paper, paperIndex) => (
                            <tr key={paperIndex} className={paperIndex % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-700'}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">
                                {paper.title}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                                {paper.level}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                                <details className="group inline-block">
                                  <summary className="flex items-center justify-end gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-colors duration-200">
                                    <span>Select Year</span>
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                  </summary>
                                  <div className="absolute top-0 left-full mt-0 ml-2 w-32 bg-white dark:bg-gray-900 rounded-md shadow-lg py-1 z-10 border border-gray-200 dark:border-gray-700">
                                    {years.map((year, yearIndex) => (
                                      <a
                                        key={yearIndex}
                                        href={`#download-paper-${paper.title.replace(/\s/g, '-')}-${year}`}
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                                      >
                                        {year}
                                      </a>
                                    ))}
                                  </div>
                                </details>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FreeTestPapers;
