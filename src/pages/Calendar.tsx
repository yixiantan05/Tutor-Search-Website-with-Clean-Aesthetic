import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, MapPin, CalendarCheck, Clock, User, BookOpen } from 'lucide-react';

interface LessonData {
    id: number;
    tutorId: number;
    tutorName: string;
    subject: string;
    date: string;
    time: string;
    online: boolean;
}

interface ConfirmedLesson {
    tutorName: string;
    subject: string;
    date: string;
    time: string;
    online: boolean;
}

interface CalendarProps {
    upcomingLessons: LessonData[];
}

const confirmedLessons: ConfirmedLesson[] = [
    {
        tutorName: 'Dr. Jennifer Miller',
        subject: 'Mathematics - Calculus',
        date: '2025-09-20',
        time: '4:00 PM - 5:30 PM',
        online: true,
    },
    {
        tutorName: 'Mr. David Chen',
        subject: 'Physics - Mechanics',
        date: '2025-09-22',
        time: '2:00 PM - 3:30 PM',
        online: false,
    },
    {
        tutorName: 'Ms. Alice Lim',
        subject: 'Chemistry - Organic Chemistry',
        date: '2025-09-25',
        time: '11:00 AM - 12:30 PM',
        online: true,
    },
];

const Calendar: React.FC<CalendarProps> = ({ upcomingLessons }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const renderCalendarHeader = () => {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return (
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                    className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h2>
                <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                    className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    <ChevronRightIcon className="h-5 w-5" />
                </button>
            </div>
        );
    };

    const renderCalendarDays = () => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return (
            <div className="grid grid-cols-7 mb-2">
                {days.map(day => (
                    <div
                        key={day}
                        className="text-center font-medium text-gray-500 dark:text-gray-400 text-sm py-2"
                    >
                        {day}
                    </div>
                ))}
            </div>
        );
    };

    const renderCalendarCells = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const firstDayOfWeek = firstDay.getDay();
        const daysInMonth = lastDay.getDate();
        const cells = [];
        const today = new Date();

        for (let i = 0; i < firstDayOfWeek; i++) {
            cells.push(<div key={`empty-${i}`} className="p-2 border border-gray-200 dark:border-gray-700"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isToday =
                today.getDate() === day &&
                today.getMonth() === month &&
                today.getFullYear() === year;

            // Get all lessons for this day
            const lessonsForDay = confirmedLessons.filter(lesson => {
                const lessonDate = new Date(lesson.date);
                return (
                    lessonDate.getDate() === day &&
                    lessonDate.getMonth() === month &&
                    lessonDate.getFullYear() === year
                );
            });

            cells.push(
                <div
                    key={`day-${day}`}
                    className={`p-2 border border-gray-200 dark:border-gray-700 min-h-[100px] flex flex-col 
                        ${isToday ? 'bg-yellow-200 dark:bg-yellow-700' : ''}`}
                >
                    <div className="font-medium text-gray-800 dark:text-white mb-1">{day}</div>
                    
                    <div className="space-y-1">
                        {lessonsForDay.map((lesson, idx) => (
                            <div key={idx} className="flex items-start text-xs text-gray-700 dark:text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 mt-1"></span>
                                <div className="flex flex-col">
                                    <span className="font-medium">{lesson.time}</span>
                                    <span>{lesson.tutorName}</span>
                                    <span className="flex items-center">
                                        <MapPin className="w-3 h-3 mr-1" />
                                        {lesson.online ? 'Online' : 'In-person'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        return <div className="grid grid-cols-7">{cells}</div>;
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                Your Sessions Calendar
            </h1>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {renderCalendarHeader()}
                {renderCalendarDays()}
                {renderCalendarCells()}
            </div>

            {/* Confirmed Lessons List */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Confirmed Lessons
                </h2>
                <div className="space-y-4">
                    {confirmedLessons.map((lesson, idx) => (
                        <div
                            key={idx}
                            className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
                        >
                            <div className="flex items-center mb-2">
                                <CalendarCheck className="w-5 h-5 text-green-500 mr-2" />
                                <span className="font-medium">{lesson.subject}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-1">
                                <User className="w-4 h-4 mr-2" /> {lesson.tutorName}
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-1">
                                <Clock className="w-4 h-4 mr-2" /> {lesson.date} - {lesson.time}
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                <MapPin className="w-4 h-4 mr-2" /> {lesson.online ? 'Online' : 'In-person'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
