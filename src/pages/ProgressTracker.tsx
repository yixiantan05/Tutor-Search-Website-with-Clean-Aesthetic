import React, { useState } from 'react';
import { ChevronLeftIcon, TrendingUp, FileText, Award, BookOpen } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Grade {
  exam: string;
  score: number;
}

interface TutorNote {
  date: string;
  message: string;
}

interface SubjectProgress {
  tutorName: string;
  subject: string;
  notes: TutorNote[];
  grades: Grade[];
}

const initialSubjects: SubjectProgress[] = [
  {
    tutorName: 'Mr. Tan',
    subject: 'Mathematics',
    notes: [
      { date: '2025-07-23', message: 'Completed a review of algebra and trigonometry. Student showed good understanding of core concepts.' },
      { date: '2025-08-23', message: 'Revised past-year papers for functions. Homework assigned: 10 questions from the functions worksheet.' },
    ],
    grades: [
      { exam: 'Quiz 1', score: 75 },
      { exam: 'Mid-Term', score: 80 },
      { exam: 'Quiz 2', score: 85 },
      { exam: 'Term 3', score: 88 },
      { exam: 'Quiz 3', score: 90 },
      { exam: 'Final Exam', score: 92 },
    ],
  },
  {
    tutorName: 'Ms. Lim',
    subject: 'Physics',
    notes: [
      { date: '2025-07-15', message: "Introduced Newton's Laws of Motion. Student grasps the concepts but needs more examples." },
      { date: '2025-08-15', message: 'Reviewed projectile motion. Recommended a few video resources for visual recap.' },
    ],
    grades: [
      { exam: 'Quiz 1', score: 68 },
      { exam: 'Mid-Term', score: 75 },
      { exam: 'Quiz 2', score: 78 },
      { exam: 'Term 3', score: 81 },
      { exam: 'Quiz 3', score: 85 },
      { exam: 'Final Exam', score: 88 },
    ],
  },
];

const ParentProgressViewer: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectProgress | null>(null);

  const getChartData = (grades: Grade[]) => ({
    labels: grades.map(g => g.exam),
    datasets: [
      {
        label: 'Score (%)',
        data: grades.map(g => g.score),
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.3,
        fill: true,
      },
    ],
  });

  const getChartOptions = (subjectName: string) => ({
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: `${subjectName} Performance`, font: { size: 16 }, color: '#4B5563' },
      tooltip: { callbacks: { label: (context: any) => `${context.dataset.label}: ${context.raw}%` } },
    },
    scales: { y: { min: 0, max: 100, ticks: { callback: (value: any) => `${value}%` } } },
  });

  if (selectedSubject) {
    return (
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center mb-6">
          <button
            onClick={() => setSelectedSubject(null)}
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ChevronLeftIcon size={28} />
          </button>
          <h2 className="flex-1 text-center text-3xl font-bold text-gray-800 dark:text-white">
            {selectedSubject.subject}
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto space-y-8">
          {/* Grades Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
              <TrendingUp className="mr-2 text-green-500" /> Performance Over Time
            </h3>
            {selectedSubject.grades.length > 0 ? (
              <Line data={getChartData(selectedSubject.grades)} options={getChartOptions(selectedSubject.subject)} />
            ) : (
              <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                <Award size={48} className="mx-auto mb-2" />
                <p>No grades recorded for this subject yet.</p>
              </div>
            )}
          </div>

          {/* Tutor Notes */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
              <FileText className="mr-2 text-blue-500" /> Tutor Notes
            </h3>
            {selectedSubject.notes.length > 0 ? (
              selectedSubject.notes.map((note, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-md p-4 border-l-4 border-blue-500 mb-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{note.date}</p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">"{note.message}"</p>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                <BookOpen size={48} className="mx-auto mb-2" />
                <p>No notes available for this subject yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Progress Tracker</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialSubjects.map((subject, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedSubject(subject)}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{subject.subject}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">with {subject.tutorName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentProgressViewer;
