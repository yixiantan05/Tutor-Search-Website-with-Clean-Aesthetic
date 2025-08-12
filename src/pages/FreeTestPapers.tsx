import React from 'react';
const FreeTestPapers = () => {
  const subjects = [{
    name: 'Mathematics',
    papers: [{
      title: 'Algebra Practice Test',
      level: 'Grades 8-9',
      pages: 12,
      downloadLink: '#'
    }, {
      title: 'Geometry Assessment',
      level: 'Grades 9-10',
      pages: 15,
      downloadLink: '#'
    }, {
      title: 'Calculus Fundamentals',
      level: 'Grades 11-12',
      pages: 18,
      downloadLink: '#'
    }]
  }, {
    name: 'Science',
    papers: [{
      title: 'Biology Cell Structure',
      level: 'Grades 7-8',
      pages: 10,
      downloadLink: '#'
    }, {
      title: 'Chemistry Elements Quiz',
      level: 'Grades 9-10',
      pages: 14,
      downloadLink: '#'
    }, {
      title: 'Physics Forces & Motion',
      level: 'Grades 10-11',
      pages: 16,
      downloadLink: '#'
    }]
  }, {
    name: 'English',
    papers: [{
      title: 'Reading Comprehension',
      level: 'Grades 6-7',
      pages: 8,
      downloadLink: '#'
    }, {
      title: 'Essay Writing Guide',
      level: 'Grades 8-9',
      pages: 11,
      downloadLink: '#'
    }, {
      title: 'Literary Analysis Practice',
      level: 'Grades 10-12',
      pages: 13,
      downloadLink: '#'
    }]
  }, {
    name: 'History',
    papers: [{
      title: 'World History Timeline Test',
      level: 'Grades 8-9',
      pages: 12,
      downloadLink: '#'
    }, {
      title: 'Civil Rights Movement Quiz',
      level: 'Grades 10-11',
      pages: 9,
      downloadLink: '#'
    }, {
      title: 'Ancient Civilizations Review',
      level: 'Grades 7-8',
      pages: 14,
      downloadLink: '#'
    }]
  }];
  return <main className="w-full bg-white">
      <section className="py-16 md:py-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          Free Test Papers
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Access our collection of free test papers to help your child practice
          and prepare for exams.
        </p>
        <div className="max-w-4xl mx-auto">
          {subjects.map((subject, index) => <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {subject.name}
              </h2>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Test Paper
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Level
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pages
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {subject.papers.map((paper, paperIndex) => <tr key={paperIndex} className={paperIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {paper.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {paper.level}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {paper.pages}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href={paper.downloadLink} className="text-blue-600 hover:text-blue-800">
                            Download PDF
                          </a>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>)}
        </div>
      </section>
    </main>;
};
export default FreeTestPapers;