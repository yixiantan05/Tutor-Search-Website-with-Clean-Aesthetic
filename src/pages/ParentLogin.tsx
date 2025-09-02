import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, StarIcon, FilterIcon, CalendarIcon, MessageSquareIcon, TrendingUpIcon, ChevronLeftIcon, ChevronRightIcon, PlusCircle, Trash2 } from 'lucide-react';
import ParentProfile from './ParentProfile';
import ProgressTracker from './ProgressTracker';
import Messages from './Messages';
import Calendar from './Calendar';

// Define types for the form data
interface ChildData {
    childName: string;
    childAcademicLevel: string;
}

interface ParentProfileData {
    name: string;
    email: string;
    phone: string;
    image: string;
    children: ChildData[];
}

const ParentLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState('tutors');
    const [activeFilters, setActiveFilters] = useState({
        subjects: [],
        traits: [],
        priceRange: [20, 50],
        location: [],
        gradeRange: [],
        teachingStyle: [],
        tutorBackground: []
    });
    const [tutors, setTutors] = useState([{
        id: 1,
        name: 'Dr. Jennifer Miller',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        subjects: ['Mathematics', 'Physics'],
        rating: 4.9,
        reviews: 124,
        hourlyRate: 45,
        traits: ['Patient', 'Encouraging', 'Knowledgeable'],
        teachingStyle: ['Interactive', 'Problem-based', 'Concept-focused'],
        tutorBackground: ['PhD', 'University Professor'],
        description: 'PhD in Mathematics with 8 years of teaching experience. Specializing in advanced calculus and physics for high school and college students. I use a hands-on approach to problem-solving, ensuring students fully grasp difficult concepts. My goal is to build confidence and critical thinking skills.',
        location: 'New York, NY',
        grades: [9, 10, 11, 12],
        availability: [{
            day: 'Monday',
            slots: ['3:00 PM - 5:00 PM', '7:00 PM - 9:00 PM']
        }, {
            day: 'Wednesday',
            slots: ['4:00 PM - 6:00 PM']
        }, {
            day: 'Friday',
            slots: ['3:00 PM - 7:00 PM']
        }]
    }, {
        id: 2,
        name: 'Michael Chen, M.Ed',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        subjects: ['English Literature', 'Writing'],
        rating: 4.8,
        reviews: 98,
        hourlyRate: 40,
        traits: ['Creative', 'Supportive', 'Engaging'],
        teachingStyle: ['Storytelling', 'Socratic method', 'Essay-focused'],
        tutorBackground: ['Published Author', 'Certified Teacher'],
        description: "Master's in Education with a focus on English Literature. I'm a published author who helps students improve their writing skills and literary analysis. My method involves a personalized approach to help each student find their unique voice and express themselves clearly and effectively.",
        location: 'Boston, MA',
        grades: [6, 7, 8, 9, 10, 11, 12],
        availability: [{
            day: 'Tuesday',
            slots: ['4:00 PM - 8:00 PM']
        }, {
            day: 'Thursday',
            slots: ['4:00 PM - 8:00 PM']
        }, {
            day: 'Saturday',
            slots: ['10:00 AM - 2:00 PM']
        }]
    }, {
        id: 3,
        name: 'Sarah Rodriguez',
        image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        subjects: ['Chemistry', 'Biology'],
        rating: 4.7,
        reviews: 86,
        hourlyRate: 38,
        traits: ['Thorough', 'Patient', 'Organized'],
        teachingStyle: ['Hands-on', 'Visual aids', 'Exam prep'],
        tutorBackground: ['Biochemistry Graduate', 'Certified Teacher'],
        description: 'Biochemistry graduate with teaching certification. I specialize in making complex science concepts accessible to middle and high school students. I use a lot of visual aids and hands-on experiments (virtual or in-person) to make sure the subject matter is not just memorized, but truly understood.',
        location: 'Chicago, IL',
        grades: [6, 7, 8, 9, 10, 11, 12],
        availability: [{
            day: 'Monday',
            slots: ['3:30 PM - 6:30 PM']
        }, {
            day: 'Wednesday',
            slots: ['3:30 PM - 6:30 PM']
        }, {
            day: 'Thursday',
            slots: ['3:30 PM - 6:30 PM']
        }]
    }, {
        id: 4,
        name: 'David Thompson',
        image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        subjects: ['Computer Science', 'Mathematics'],
        rating: 4.9,
        reviews: 112,
        hourlyRate: 50,
        traits: ['Analytical', 'Encouraging', 'Tech-savvy'],
        teachingStyle: ['Project-based', 'Practical application', 'Coding exercises'],
        tutorBackground: ['Software Engineer', 'Industry Professional'],
        description: 'As a software engineer and educator with over 10 years of experience, I teach programming, algorithms, and advanced math to students of all levels. My approach is project-based, so students can apply what they learn in real-world scenarios and build a portfolio of their work.',
        location: 'San Francisco, CA',
        grades: [9, 10, 11, 12],
        availability: [{
            day: 'Tuesday',
            slots: ['6:00 PM - 9:00 PM']
        }, {
            day: 'Thursday',
            slots: ['6:00 PM - 9:00 PM']
        }, {
            day: 'Sunday',
            slots: ['1:00 PM - 5:00 PM']
        }]
    }, {
        id: 5,
        name: 'Emily Johnson',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        subjects: ['History', 'Social Studies'],
        rating: 4.6,
        reviews: 73,
        hourlyRate: 35,
        traits: ['Passionate', 'Engaging', 'Knowledgeable'],
        teachingStyle: ['Narrative', 'Discussion-based', 'Historical analysis'],
        tutorBackground: ['History Major', 'Certified Teacher'],
        description: 'History major with teaching certification. I make historical events come alive through storytelling and interactive learning. My goal is to help students not just memorize dates and names, but understand the context and impact of historical events, fostering a love for the subject.',
        location: 'Austin, TX',
        grades: [5, 6, 7, 8, 9, 10],
        availability: [{
            day: 'Monday',
            slots: ['4:00 PM - 7:00 PM']
        }, {
            day: 'Wednesday',
            slots: ['4:00 PM - 7:00 PM']
        }, {
            day: 'Friday',
            slots: ['4:00 PM - 6:00 PM']
        }]
    }, {
        id: 6,
        name: 'Robert Kim',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        subjects: ['Spanish', 'French'],
        rating: 4.8,
        reviews: 91,
        hourlyRate: 42,
        traits: ['Patient', 'Cultural knowledge', 'Conversational'],
        teachingStyle: ['Immersion', 'Conversational', 'Grammar drills'],
        tutorBackground: ['Linguist', 'Multilingual'],
        description: 'Multilingual educator with experience teaching Spanish and French at all levels. My lessons focus on practical conversation skills and cultural context. I believe the best way to learn a language is to speak it, so our sessions will be highly interactive and fun!',
        location: 'Miami, FL',
        grades: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        availability: [{
            day: 'Tuesday',
            slots: ['3:00 PM - 7:00 PM']
        }, {
            day: 'Thursday',
            slots: ['3:00 PM - 7:00 PM']
        }, {
            day: 'Saturday',
            slots: ['9:00 AM - 1:00 PM']
        }]
    }]);
    const [selectedTutor, setSelectedTutor] = useState(null);
    const [chatView, setChatView] = useState(false);
    const [calendarView, setCalendarView] = useState(false);
    const [parentProfile, setParentProfile] = useState<ParentProfileData>({
        name: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        email: 'sarah.johnson@example.com',
        phone: '+1-555-123-4567',
        children: [
            { childName: 'Emily Johnson', childAcademicLevel: 'Secondary (S1-S4/5)' },
            { childName: 'Leo Johnson', childAcademicLevel: 'Primary (P1-P6)' }
        ]
    });
    const [recentMessages, setRecentMessages] = useState([{
        tutorId: 1,
        tutorName: 'Dr. Jennifer Miller',
        tutorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        lastMessage: "I'm available this Thursday at 4pm if that works for you?",
        timestamp: '2:15 PM',
        unread: true
    }, {
        tutorId: 3,
        tutorName: 'Sarah Rodriguez',
        tutorImage: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        lastMessage: "Great! I'll prepare some special materials for our next session.",
        timestamp: 'Yesterday',
        unread: false
    }]);
    const [upcomingLessons, setUpcomingLessons] = useState([{
        id: 1,
        tutorId: 1,
        tutorName: 'Dr. Jennifer Miller',
        subject: 'Mathematics - Calculus',
        date: '2023-09-20',
        time: '4:00 PM - 5:30 PM',
        online: true
    }, {
        id: 2,
        tutorId: 3,
        tutorName: 'Sarah Rodriguez',
        subject: 'Chemistry - Organic Chemistry',
        date: '2023-09-22',
        time: '3:30 PM - 5:00 PM',
        online: false
    }, {
        id: 3,
        tutorId: 1,
        tutorName: 'Dr. Jennifer Miller',
        subject: 'Mathematics - Calculus',
        date: '2023-09-25',
        time: '5:00 PM - 6:30 PM',
        online: true
    }]);
    const [studentProgress, setStudentProgress] = useState([{
        id: 1,
        name: 'Emily Johnson',
        tutorName: 'Dr. Jennifer Miller',
        tutorId: 1,
        subject: 'Mathematics - Calculus',
        grades: [75, 82, 88, 92],
        tests: ['Quiz 1', 'Test 1', 'Mid-term', 'Quiz 2'],
        lastUpdated: '2023-09-15',
        notes: 'Emily has shown significant improvement in derivatives. We need to focus more on integration techniques.'
    }, {
        id: 2,
        name: 'Michael Lee',
        tutorName: 'Sarah Rodriguez',
        tutorId: 3,
        subject: 'Chemistry - Organic Chemistry',
        grades: [68, 72, 80],
        tests: ['Quiz 1', 'Project', 'Mid-term'],
        lastUpdated: '2023-09-10',
        notes: "Michael is struggling with probability concepts. I've provided additional practice problems."
    }]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoggedIn(true);
    };

    const toggleSubjectFilter = subject => {
        setActiveFilters(prev => ({
            ...prev,
            subjects: prev.subjects.includes(subject) ? prev.subjects.filter(s => s !== subject) : [...prev.subjects, subject]
        }));
    };

    const toggleTraitFilter = trait => {
            setActiveFilters(prev => ({
            ...prev,
            traits: prev.traits.includes(trait) ? prev.traits.filter(t => t !== trait) : [...prev.traits, trait]
        }));
    };

    const toggleTeachingStyleFilter = style => {
        setActiveFilters(prev => ({
            ...prev,
            teachingStyle: prev.teachingStyle.includes(style) ? prev.teachingStyle.filter(s => s !== style) : [...prev.teachingStyle, style]
        }));
    };

    const toggleTutorBackgroundFilter = background => {
        setActiveFilters(prev => ({
            ...prev,
            tutorBackground: prev.tutorBackground.includes(background) ? prev.tutorBackground.filter(b => b !== background) : [...prev.tutorBackground, background]
        }));
    };

    const toggleLocationFilter = location => {
        setActiveFilters(prev => ({
            ...prev,
            location: prev.location.includes(location) ? prev.location.filter(l => l !== location) : [...prev.location, location]
        }));
    };

    const handlePriceChange = (e, index) => {
        const newRange = [...activeFilters.priceRange];
        newRange[index] = parseInt(e.target.value);
        setActiveFilters(prev => ({
            ...prev,
            priceRange: newRange
        }));
    };

    const toggleGradeFilter = grade => {
        setActiveFilters(prev => {
            const newGrades = prev.gradeRange.includes(grade) ? prev.gradeRange.filter(g => g !== grade) : [...prev.gradeRange, grade];
            return {
                ...prev,
                gradeRange: newGrades.sort((a, b) => a - b)
            };
        });
    };

    const filteredTutors = tutors.filter(tutor => {
        if (activeFilters.subjects.length > 0 && !tutor.subjects.some(subject => activeFilters.subjects.includes(subject))) {
            return false;
        }
        if (activeFilters.traits.length > 0 && !tutor.traits.some(trait => activeFilters.traits.includes(trait))) {
            return false;
        }
        if (activeFilters.teachingStyle.length > 0 && !tutor.teachingStyle.some(style => activeFilters.teachingStyle.includes(style))) {
            return false;
        }
        if (activeFilters.tutorBackground.length > 0 && !tutor.tutorBackground.some(background => activeFilters.tutorBackground.includes(background))) {
            return false;
        }
        if (tutor.hourlyRate < activeFilters.priceRange[0] || tutor.hourlyRate > activeFilters.priceRange[1]) {
            return false;
        }
        if (activeFilters.location.length > 0 && !activeFilters.location.includes(tutor.location)) {
            return false;
        }
        if (activeFilters.gradeRange.length > 0 && !tutor.grades.some(grade => activeFilters.gradeRange.includes(grade))) {
            return false;
        }
        return true;
    });

    const handleMessageTutor = tutor => {
        setSelectedTutor(tutor);
        setChatView(true);
    };

    const handleScheduleSession = tutor => {
        setSelectedTutor(tutor);
        setCalendarView(true);
    };

    return (
        <main className="w-full bg-white dark:bg-gray-900 min-h-screen">
            {!isLoggedIn ? (
                <section className="py-16 md:py-24 container mx-auto px-4">
                    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-8">
                            <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
                                Parent Login
                            </h1>
                            <form onSubmit={handleLogin}>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-gray-700 dark:text-white  text-sm font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" placeholder="your@email.com" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="block text-gray-700 dark:text-white text-sm font-medium mb-2">
                                        Password
                                    </label>
                                    <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" placeholder="••••••••" required />
                                </div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center">
                                        <input type="checkbox" id="remember" className="h-4 w-4 text-blue-600 dark:text-blue-400 focus:ring-blue-500 border-gray-300 dark:border-gray-700 rounded" />
                                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-white">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
                                        Forgot password?
                                    </a>
                                </div>
                                <button type="submit" className="w-full bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                                    Sign In
                                </button>
                            </form>
                            <div className="text-center mt-6">
                                <p className="text-sm text-gray-600 dark:text-white">
                                    Don't have an account?{' '}
                                    <Link to="/parent-registration" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
                                        Register now
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="py-8 container mx-auto px-4">
                    <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-8">
                        <img 
                            src={parentProfile.image} 
                            alt={`${parentProfile.name}'s profile`} 
                            className="w-16 h-16 rounded-full object-cover border-2 border-blue-500" 
                        />
                        <div>
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                                Welcome, {parentProfile.name}!
                            </h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Manage your account and your child's learning.
                            </p>
                        </div>
                    </div>
                    <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
                        <nav className="flex -mb-px">
                            <button onClick={() => {
                                setActiveTab('tutors');
                                setSelectedTutor(null);
                                setChatView(false);
                                setCalendarView(false);
                            }} className={`py-4 px-6 font-medium text-sm mr-8 ${activeTab === 'tutors' ? 'border-b-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                                <FilterIcon className="inline-block h-5 w-5 mr-2" />
                                Find Tutors
                            </button>
                            <button onClick={() => {
                                setActiveTab('profile');
                                setSelectedTutor(null);
                                setChatView(false);
                                setCalendarView(false);
                            }} className={`py-4 px-6 font-medium text-sm mr-8 ${activeTab === 'profile' ? 'border-b-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                                <UserIcon className="inline-block h-5 w-5 mr-2" />
                                Profile
                            </button>
                            <button onClick={() => {
                                setActiveTab('messages');
                                setSelectedTutor(null);
                                setChatView(false);
                                setCalendarView(false);
                            }} className={`py-4 px-6 font-medium text-sm mr-8 ${activeTab === 'messages' ? 'border-b-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                                <MessageSquareIcon className="inline-block h-5 w-5 mr-2" />
                                Messages
                                {recentMessages.some(msg => msg.unread) && (
                                    <span className="ml-2 bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full text-xs">
                                        {recentMessages.filter(msg => msg.unread).length}
                                    </span>
                                )}
                            </button>
                            <button onClick={() => {
                                setActiveTab('calendar');
                                setSelectedTutor(null);
                                setChatView(false);
                                setCalendarView(false);
                            }} className={`py-4 px-6 font-medium text-sm mr-8 ${activeTab === 'calendar' ? 'border-b-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                                <CalendarIcon className="inline-block h-5 w-5 mr-2" />
                                Calendar
                            </button>
                            <button onClick={() => {
                                setActiveTab('progress');
                                setSelectedTutor(null);
                                setChatView(false);
                                setCalendarView(false);
                            }} className={`py-4 px-6 font-medium text-sm ${activeTab === 'progress' ? 'border-b-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                                <TrendingUpIcon className="inline-block h-5 w-5 mr-2" />
                                Progress Tracker
                            </button>
                        </nav>
                    </div>
                    {activeTab === 'tutors' && (
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                                Find the Perfect Tutor
                            </h1>
                            {chatView ? (
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                                    <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                                        <div className="flex items-center">
                                            <img src={selectedTutor.image} alt={selectedTutor.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                                            <div>
                                                <h3 className="font-medium text-gray-800 dark:text-white">{selectedTutor.name}</h3>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">Online now</p>
                                            </div>
                                        </div>
                                        <button onClick={() => setChatView(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="h-96 p-4 overflow-y-auto">
                                        <div className="space-y-4">
                                            <div className="flex justify-start">
                                                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-xs">
                                                    <p className="text-gray-800 dark:text-white">
                                                        Hello! I'm interested in tutoring for my daughter who needs help with calculus.
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 text-right mt-1">
                                                        10:30 AM
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <div className="bg-blue-600 dark:bg-blue-400 rounded-lg p-3 max-w-xs text-white dark:text-gray-900">
                                                    <p>
                                                        Hi there! I would be happy to help. What grade level is your daughter in?
                                                    </p>
                                                    <p className="text-xs text-gray-200 dark:text-gray-800 text-right mt-1">
                                                        10:32 AM
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-start">
                                                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-xs">
                                                    <p className="text-gray-800 dark:text-white">
                                                        She is a high school student in 11th grade.
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 text-right mt-1">
                                                        10:33 AM
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex">
                                        <input
                                            type="text"
                                            placeholder="Type a message..."
                                            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white dark:border-gray-700"
                                        />
                                        <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-300">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            ) : calendarView ? (
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Schedule Session with {selectedTutor.name}</h2>
                                        <button onClick={() => setCalendarView(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Select a day and time slot:</h3>
                                    <div className="space-y-4">
                                        {selectedTutor.availability.map(dayInfo => (
                                            <div key={dayInfo.day} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                                <h4 className="font-bold text-gray-800 dark:text-white">{dayInfo.day}</h4>
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {dayInfo.slots.map(slot => (
                                                        <button key={slot} className="px-4 py-2 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-700">
                                                            {slot}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6">
                                        <button className="w-full text-center text-sm font-semibold text-white bg-blue-600 dark:bg-blue-400 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-300 transition-colors">
                                            Confirm Session
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <aside className="md:col-span-1 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md h-fit sticky top-8">
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Filters</h2>
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Price Range (per hour)</h3>
                                                <div className="flex items-center space-x-2">
                                                    <span>${activeFilters.priceRange[0]}</span>
                                                    <input
                                                        type="range"
                                                        min="10"
                                                        max="100"
                                                        value={activeFilters.priceRange[0]}
                                                        onChange={(e) => handlePriceChange(e, 0)}
                                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                                    />
                                                    <span>${activeFilters.priceRange[1]}</span>
                                                    <input
                                                        type="range"
                                                        min="10"
                                                        max="100"
                                                        value={activeFilters.priceRange[1]}
                                                        onChange={(e) => handlePriceChange(e, 1)}
                                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Subjects</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {['Mathematics', 'Physics', 'English Literature', 'Writing', 'Chemistry', 'Biology', 'Computer Science', 'History', 'Social Studies', 'Spanish', 'French'].map(subject => (
                                                        <button
                                                            key={subject}
                                                            onClick={() => toggleSubjectFilter(subject)}
                                                            className={`text-sm px-3 py-1 rounded-full border ${activeFilters.subjects.includes(subject) ? 'bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900 border-blue-600 dark:border-blue-400' : 'bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-700'}`}
                                                        >
                                                            {subject}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Traits</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {['Patient', 'Encouraging', 'Knowledgeable', 'Creative', 'Supportive', 'Engaging', 'Thorough', 'Organized', 'Analytical', 'Tech-savvy', 'Passionate', 'Cultural knowledge', 'Conversational'].map(trait => (
                                                        <button
                                                            key={trait}
                                                            onClick={() => toggleTraitFilter(trait)}
                                                            className={`text-sm px-3 py-1 rounded-full border ${activeFilters.traits.includes(trait) ? 'bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900 border-blue-600 dark:border-blue-400' : 'bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-700'}`}
                                                        >
                                                            {trait}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Teaching Style</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {['Interactive', 'Problem-based', 'Concept-focused', 'Storytelling', 'Socratic method', 'Essay-focused', 'Hands-on', 'Visual aids', 'Exam prep', 'Project-based', 'Practical application', 'Coding exercises', 'Narrative', 'Discussion-based', 'Historical analysis', 'Immersion', 'Conversational', 'Grammar drills'].map(style => (
                                                        <button
                                                            key={style}
                                                            onClick={() => toggleTeachingStyleFilter(style)}
                                                            className={`text-sm px-3 py-1 rounded-full border ${activeFilters.teachingStyle.includes(style) ? 'bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900 border-blue-600 dark:border-blue-400' : 'bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-700'}`}
                                                        >
                                                            {style}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Tutor Background</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {['MOE teacher', 'Undergraduate', 'Private Tutor', 'Part-time Tutors', 'Tuition Centre Tutor'].map(background => (
                                                        <button
                                                            key={background}
                                                            onClick={() => toggleTutorBackgroundFilter(background)}
                                                            className={`text-sm px-3 py-1 rounded-full border ${activeFilters.tutorBackground.includes(background) ? 'bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900 border-blue-600 dark:border-blue-400' : 'bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-700'}`}
                                                        >
                                                            {background}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Location</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {['North', 'South', 'East', 'West', 'Central'].map(location => (
                                                        <button
                                                            key={location}
                                                            onClick={() => toggleLocationFilter(location)}
                                                            className={`text-sm px-3 py-1 rounded-full border ${activeFilters.location.includes(location) ? 'bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900 border-blue-600 dark:border-blue-400' : 'bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-700'}`}
                                                        >
                                                            {location}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Grade Level</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'Sec 1', 'Sec 2', 'Sec 3', 'Sec 4', 'JC1', 'JC2'].map(grade => (
                                                        <button
                                                            key={grade}
                                                            onClick={() => toggleGradeFilter(grade)}
                                                            className={`text-sm px-3 py-1 rounded-full border ${activeFilters.gradeRange.includes(grade) ? 'bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900 border-blue-600 dark:border-blue-400' : 'bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-700'}`}
                                                        >
                                                             {grade}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                    <div className="md:col-span-2">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {filteredTutors.length > 0 ? (
                                                filteredTutors.map(tutor => (
                                                    <div key={tutor.id} className="relative w-full h-[450px] md:h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                                        <div className="relative h-40">
                                                            <img
                                                                src={tutor.image}
                                                                alt={tutor.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                            <div className="absolute bottom-4 left-4 text-white">
                                                                <h3 className="text-xl font-bold">{tutor.name}</h3>
                                                                <p className="text-sm font-semibold opacity-80">{tutor.subjects.join(', ')}</p>
                                                            </div>
                                                        </div>
                                                        <div className="p-4 flex-1 flex flex-col">
                                                            <div>
                                                                <div className="flex items-center text-sm text-yellow-500 mb-2">
                                                                    <StarIcon className="h-4 w-4 mr-1" />
                                                                    <span>{tutor.rating} ({tutor.reviews})</span>
                                                                </div>
                                                                <div className="flex flex-wrap gap-2 mb-4">
                                                                    {tutor.traits.map(trait => (
                                                                        <span key={trait} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{trait}</span>
                                                                    ))}
                                                                    {tutor.teachingStyle.map(style => (
                                                                        <span key={style} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{style}</span>
                                                                    ))}
                                                                    {tutor.tutorBackground.map(background => (
                                                                        <span key={background} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{background}</span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col items-start space-y-2">
                                                                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                                                    ${tutor.hourlyRate}/hr
                                                                </div>
                                                                <button
                                                                    onClick={() => handleMessageTutor(tutor)}
                                                                    className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                                                                >
                                                                    <MessageSquareIcon className="h-4 w-4 mr-1" /> Message
                                                                </button>
                                                                <button
                                                                    onClick={() => handleScheduleSession(tutor)}
                                                                    className="w-full text-center text-sm font-semibold text-white bg-blue-600 dark:bg-blue-400 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-300 transition-colors"
                                                                >
                                                                    Book a session
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-gray-600 dark:text-gray-300 text-center col-span-full">No tutors match the selected filters. Please adjust your criteria.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    {activeTab === 'profile' && <ParentProfile parentProfile={parentProfile} setParentProfile={setParentProfile} />}
                    {activeTab === 'messages' && <Messages recentMessages={recentMessages} />}
                    {activeTab === 'calendar' && <Calendar upcomingLessons={upcomingLessons} />}
                    {activeTab === 'progress' && <ProgressTracker studentProgress={studentProgress} />}
                </section>
            )}
        </main>
    );
};

export default ParentLogin;
