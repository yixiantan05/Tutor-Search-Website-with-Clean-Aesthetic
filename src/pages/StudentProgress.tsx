import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

interface Student {
  id: number;
  name: string;
  parentName: string;
  subject: string;
  grades: number[];
  tests: string[];
  monthlyNotes: string[];
  lastUpdated: string;
}

const StudentProgress: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: 'Emily Johnson',
      parentName: 'Sarah Johnson',
      subject: 'Mathematics - Calculus',
      grades: [75, 82, 88, 92],
      tests: ['Quiz 1', 'Test 1', 'Mid-term', 'Quiz 2'],
      monthlyNotes: [
        'September: Emily is improving steadily in derivatives.',
        'October: Focused on integration techniques, showing good progress.',
      ],
      lastUpdated: '2023-10-15',
    },
    {
      id: 2,
      name: 'Michael Lee',
      parentName: 'David Lee',
      subject: 'Mathematics - Statistics',
      grades: [68, 72, 80],
      tests: ['Quiz 1', 'Project', 'Mid-term'],
      monthlyNotes: [
        'September: Michael struggled with probability concepts.',
        'October: Provided additional practice problems, showing improvement.',
      ],
      lastUpdated: '2023-10-10',
    },
  ]);

  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [newTestName, setNewTestName] = useState('');
  const [newGrade, setNewGrade] = useState<number | ''>('');
  const [newMonthlyNote, setNewMonthlyNote] = useState('');

  const handleAddProgress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudent || !newTestName || newGrade === '') return;

    const updatedStudents = students.map((student) => {
      if (student.id === selectedStudent.id) {
        return {
          ...student,
          tests: [...student.tests, newTestName],
          grades: [...student.grades, newGrade as number],
          lastUpdated: new Date().toISOString().split('T')[0],
        };
      }
      return student;
    });

    setStudents(updatedStudents);
    setSelectedStudent({
      ...selectedStudent,
      tests: [...selectedStudent.tests, newTestName],
      grades: [...selectedStudent.grades, newGrade as number],
      lastUpdated: new Date().toISOString().split('T')[0],
    });

    setNewTestName('');
    setNewGrade('');
  };

  const handleAddMonthlyNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudent || !newMonthlyNote) return;

    const updatedStudents = students.map((student) => {
      if (student.id === selectedStudent.id) {
        return {
          ...student,
          monthlyNotes: [...student.monthlyNotes, newMonthlyNote],
        };
      }
      return student;
    });

    setStudents(updatedStudents);
    setSelectedStudent({
      ...selectedStudent,
      monthlyNotes: [...selectedStudent.monthlyNotes, newMonthlyNote],
    });

    setNewMonthlyNote('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6 dark:text-white">
        Student Progress
      </h2>

      {!selectedStudent ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <div
              key={student.id}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
              onClick={() => setSelectedStudent(student)}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {student.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {student.subject}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-300 mt-2">
                Last updated: {student.lastUpdated}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4"
            onClick={() => setSelectedStudent(null)}
          >
            ← Back to all students
          </button>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            {selectedStudent.name} - {selectedStudent.subject}
          </h3>

          {/* Chart */}
          <div className="w-full h-64 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={selectedStudent.tests.map((test, idx) => ({
                  test,
                  grade: selectedStudent.grades[idx],
                }))}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="test" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="grade" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Add New Test/Grade */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Add New Test/Grade
            </h4>
            <form onSubmit={handleAddProgress} className="space-y-4">
              <input
                type="text"
                placeholder="Test/Assignment Name"
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                value={newTestName}
                onChange={(e) => setNewTestName(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Grade (%)"
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                style={{
                  // Hide the up/down arrows
                  MozAppearance: 'textfield',
                }}
                onKeyDown={(e) => e.preventDefault()} // optional: prevent arrow keys increment
                value={newGrade}
                onChange={(e) => setNewGrade(Number(e.target.value))}
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Test/Grade
              </button>
            </form>
          </div>

          {/* Monthly Notes */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Monthly Notes (visible to parent)
            </h4>
            <form onSubmit={handleAddMonthlyNote} className="space-y-4 mb-4">
              <textarea
                placeholder="Add monthly update..."
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                value={newMonthlyNote}
                onChange={(e) => setNewMonthlyNote(e.target.value)}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Add Note
              </button>
            </form>

            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {selectedStudent.monthlyNotes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProgress;
