import React, { useState } from 'react';
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const TutorCalendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [upcomingLessons, setUpcomingLessons] = useState([
        {
            id: 1,
            studentName: 'Emily Johnson',
            parentName: 'Sarah Johnson',
            subject: 'Mathematics - Calculus',
            date: '2025-09-20',
            time: '4:00 PM - 5:30 PM',
            online: true,
        },
        {
            id: 2,
            studentName: 'Michael Lee',
            parentName: 'David Lee',
            subject: 'Mathematics - Statistics',
            date: '2025-09-22',
            time: '3:30 PM - 5:00 PM',
            online: false,
        },
        {
            id: 3,
            studentName: 'Emma Wilson',
            parentName: 'Jennifer Wilson',
            subject: 'Mathematics - Algebra',
            date: '2025-09-25',
            time: '5:00 PM - 6:30 PM',
            online: true,
        },
        {
            id: 4,
            studentName: 'Noah Garcia',
            parentName: 'Robert Garcia',
            subject: 'Mathematics - Calculus',
            date: '2025-09-28',
            time: '4:00 PM - 5:30 PM',
            online: true,
        },
    ]);

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
                <h2 className="text-xl font-semibold">
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

        for (let i = 0; i < firstDayOfWeek; i++) {
            cells.push(
                <div key={`empty-${i}`} className="p-2 border border-gray-200 dark:border-gray-700"></div>
            );
        }

        const lessonDates = {};
        upcomingLessons.forEach(lesson => {
            const date = new Date(lesson.date);
            if (date.getMonth() === month && date.getFullYear() === year) {
                if (!lessonDates[date.getDate()]) {
                    lessonDates[date.getDate()] = [];
                }
                lessonDates[date.getDate()].push(lesson);
            }
        });

        for (let day = 1; day <= daysInMonth; day++) {
            const hasLesson = lessonDates[day];
            cells.push(
                <div
                    key={`day-${day}`}
                    className={`p-2 border border-gray-200 dark:border-gray-700 min-h-[100px] ${hasLesson ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                >
                    <div className="font-medium">{day}</div>
                    {hasLesson && (
                        <div className="mt-1 space-y-1">
                            {lessonDates[day].map((lesson, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-start text-[10px] bg-blue-100 dark:bg-blue-800 rounded px-1 py-0.5"
                                >
                                    <div className="flex items-center w-full">
                                        <span
                                            className={`h-2 w-2 rounded-full mr-1 ${lesson.online ? 'bg-blue-500' : 'bg-green-500'}`}
                                        ></span>
                                        <span className="font-semibold">{lesson.time}</span>
                                    </div>
                                    <div className="w-full text-gray-700 dark:text-gray-300">
                                        {lesson.studentName}
                                    </div>
                                    <div className="w-full text-gray-500 italic">
                                        ({lesson.online ? 'Online' : 'In Person'})
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            );
        }
        return <div className="grid grid-cols-7">{cells}</div>;
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6 dark:text-white">
                Lesson Calendar
            </h2>
            {renderCalendarHeader()}
            {renderCalendarDays()}
            {renderCalendarCells()}
            <div className="mt-8">
                <h3 className="text-lg font-medium mb-4 dark:text-white">
                    Upcoming Lessons
                </h3>
                <div className="space-y-4">
                    {upcomingLessons.map(lesson => (
                        <div
                            key={lesson.id}
                            className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800"
                        >
                            <div className="mr-4 text-center bg-white dark:bg-gray-700 rounded-md p-2 shadow-sm">
                                <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                    {new Date(lesson.date).toLocaleString('default', { month: 'short' })}
                                </div>
                                <div className="text-xl font-bold text-gray-800 dark:text-white">
                                    {new Date(lesson.date).getDate()}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="font-medium text-gray-800 dark:text-white">
                                    {lesson.subject}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Student: {lesson.studentName}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Parent: {lesson.parentName}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Time: {lesson.time}
                                </div>
                                <div className="mt-2">
                                    <span
                                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${lesson.online
                                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                                            : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                                            }`}
                                    >
                                        {lesson.online ? 'Online' : 'In Person'}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TutorCalendar;
