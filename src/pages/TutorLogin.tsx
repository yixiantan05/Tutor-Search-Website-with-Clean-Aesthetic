import React, { useState } from 'react';
import { CalendarIcon, MessageSquareIcon, UserIcon, TrendingUpIcon, LogOutIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import TutorCalendar from './TutorCalendar';
import TutorMessages from './TutorMessages';
import StudentProgress from './StudentProgress';

const TutorLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');

    const [bio, setBio] = useState("Mathematics tutor with 5+ years of experience teaching high school and college-level courses. Specializing in calculus, algebra, and statistics.");
    const [subjectList, setSubjectList] = useState([{ subject: 'Mathematics', gradeFrom: 'jc1', gradeTo: 'jc2' }]);
    const [tutorLocation, setTutorLocation] = useState('Central'); // New state for location
    const [availabilitySettings, setAvailabilitySettings] = useState([
        { day: 'Monday', slots: ['3:00 PM - 5:00 PM', '7:00 PM - 9:00 PM'], enabled: true },
        { day: 'Tuesday', slots: [], enabled: false },
        { day: 'Wednesday', slots: ['4:00 PM - 6:00 PM'], enabled: true },
        { day: 'Thursday', slots: [], enabled: false },
        { day: 'Friday', slots: ['3:00 PM - 7:00 PM'], enabled: true },
        { day: 'Saturday', slots: [], enabled: false },
        { day: 'Sunday', slots: [], enabled: false },
    ]);
    const [activeFilters, setActiveFilters] = useState({
        subjects: ['Mathematics', 'Calculus', 'Algebra', 'Statistics'],
        traits: ['Patient', 'Knowledgeable', 'Analytical'],
        gradeRange: [9, 12],
        location: ['New York, NY'],
    });

    const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Geography', 'History', 'Science', 'Economics', 'Literature', 'Chinese', 'Principle of Accounting'];
    const grades = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'sec1', 'sec2', 'sec3', 'sec4', 'jc1', 'jc2'];
    const locations = ['North', 'South', 'East', 'West', 'Central']; // Options for the dropdown

    const handleBioChange = (e) => {
        const words = e.target.value.split(/\s+/).filter(word => word.length > 0);
        if (words.length <= 100) {
            setBio(e.target.value);
        }
    };

    const handleAddSubject = () => {
        setSubjectList([...subjectList, { subject: '', gradeFrom: '', gradeTo: '' }]);
    };

    const handleRemoveSubject = (index) => {
        const newList = subjectList.filter((_, i) => i !== index);
        setSubjectList(newList);
    };

    const handleUpdateSubject = (index, field, value) => {
        const newList = [...subjectList];
        newList[index][field] = value;
        setSubjectList(newList);
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

    const toggleLocationFilter = location => {
        setActiveFilters(prev => ({
            ...prev,
            location: prev.location.includes(location) ? prev.location.filter(l => l !== location) : [...prev.location, location]
        }));
    };

    const handleGradeChange = (e, index) => {
        const newRange = [...activeFilters.gradeRange];
        newRange[index] = parseInt(e.target.value);
        setActiveFilters(prev => ({
            ...prev,
            gradeRange: newRange
        }));
    };

    const addTimeSlot = dayIndex => {
        const newAvailability = [...availabilitySettings];
        newAvailability[dayIndex].slots.push('3:00 PM - 5:00 PM');
        setAvailabilitySettings(newAvailability);
    };

    const updateTimeSlot = (dayIndex, slotIndex, value) => {
        const newAvailability = [...availabilitySettings];
        newAvailability[dayIndex].slots[slotIndex] = value;
        setAvailabilitySettings(newAvailability);
    };

    const removeTimeSlot = (dayIndex, slotIndex) => {
        const newAvailability = [...availabilitySettings];
        newAvailability[dayIndex].slots.splice(slotIndex, 1);
        setAvailabilitySettings(newAvailability);
    };

    const toggleDayEnabled = dayIndex => {
        const newAvailability = [...availabilitySettings];
        newAvailability[dayIndex].enabled = !newAvailability[dayIndex].enabled;
        if (newAvailability[dayIndex].enabled && newAvailability[dayIndex].slots.length === 0) {
            newAvailability[dayIndex].slots.push('3:00 PM - 5:00 PM');
        }
        setAvailabilitySettings(newAvailability);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    };

    return (
        <main className="w-full bg-white dark:bg-gray-900 min-h-screen">
            {!isLoggedIn ? (
                <section className="py-16 md:py-24 container mx-auto px-4">
                    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-8">
                            <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
                                Tutor Login
                            </h1>
                            <form onSubmit={handleLogin}>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input type="email" id="email" className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white" placeholder="your@email.com" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                                        Password
                                    </label>
                                    <input type="password" id="password" className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white" placeholder="••••••••" required />
                                </div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center">
                                        <input type="checkbox" id="remember" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                        Forgot password?
                                    </a>
                                </div>
                                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                                    Sign In
                                </button>
                            </form>
                            <div className="text-center mt-6">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Not registered yet?{' '}
                                    <Link to="/tutor-application" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                        Apply to become a tutor
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="py-8 container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                        Tutor Dashboard
                    </h1>
                    {/* Tab Navigation */}
                    <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
                        <nav className="flex -mb-px">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`py-4 px-6 font-medium text-sm mr-8 ${activeTab === 'profile' ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
                            >
                                <UserIcon className="inline-block h-5 w-5 mr-2" />
                                Profile
                            </button>
                            <button
                                onClick={() => setActiveTab('calendar')}
                                className={`py-4 px-6 font-medium text-sm mr-8 ${activeTab === 'calendar' ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
                            >
                                <CalendarIcon className="inline-block h-5 w-5 mr-2" />
                                Calendar
                            </button>
                            <button
                                onClick={() => setActiveTab('messages')}
                                className={`py-4 px-6 font-medium text-sm mr-8 ${activeTab === 'messages' ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
                            >
                                <MessageSquareIcon className="inline-block h-5 w-5 mr-2" />
                                Messages
                            </button>
                            <button
                                onClick={() => setActiveTab('progress')}
                                className={`py-4 px-6 font-medium text-sm ${activeTab === 'progress' ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
                            >
                                <TrendingUpIcon className="inline-block h-5 w-5 mr-2" />
                                Student Progress
                            </button>
                            <button
                                onClick={() => setIsLoggedIn(false)}
                                className="py-4 px-6 font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 ml-auto"
                            >
                                <LogOutIcon className="inline-block h-5 w-5 mr-2" />
                                Sign Out
                            </button>
                        </nav>
                    </div>
                    {/* Conditional rendering for tabs */}
                    {activeTab === 'profile' && (
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                            {/* The full profile JSX content is placed here */}
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/3 mb-6 md:mb-0">
                                    <div className="text-center">
                                        <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Tutor profile" className="rounded-full w-40 h-40 mx-auto mb-4 object-cover" />
                                        <button className="text-blue-600 dark:text-blue-400 text-sm hover:text-blue-800 dark:hover:text-blue-300">
                                            Change photo
                                        </button>
                                    </div>
                                </div>
                                <div className="md:w-2/3 md:pl-8">
                                    <form>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                    First Name
                                                </label>
                                                <input type="text" id="firstName" defaultValue="John" className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" />
                                            </div>
                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                    Last Name
                                                </label>
                                                <input type="text" id="lastName" defaultValue="Smith" className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" />
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Bio
                                            </label>
                                            <textarea
                                                id="bio"
                                                rows={4}
                                                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white"
                                                value={bio}
                                                onChange={handleBioChange}
                                            ></textarea>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                Word count: {bio.split(/\s+/).filter(word => word.length > 0).length}/100
                                            </p>
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Location
                                            </label>
                                            <select
                                                id="location"
                                                value={tutorLocation}
                                                onChange={(e) => setTutorLocation(e.target.value)}
                                                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white"
                                            >
                                                {locations.map(loc => (
                                                    <option key={loc} value={loc}>{loc}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Subjects Taught
                                            </label>
                                            {subjectList.map((entry, index) => (
                                                <div key={index} className="flex items-center space-x-2 mb-2">
                                                    <select
                                                        value={entry.subject}
                                                        onChange={(e) => handleUpdateSubject(index, 'subject', e.target.value)}
                                                        className="flex-1 px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white"
                                                    >
                                                        <option value="" disabled>Select a subject</option>
                                                        {subjects.map(subject => (
                                                            <option key={subject} value={subject}>{subject}</option>
                                                        ))}
                                                    </select>
                                                    <span className="dark:text-gray-300">From</span>
                                                    <select
                                                        value={entry.gradeFrom}
                                                        onChange={(e) => handleUpdateSubject(index, 'gradeFrom', e.target.value)}
                                                        className="px-3 py-2 w-20 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white"
                                                    >
                                                        <option value="" disabled></option>
                                                        {grades.map(grade => (
                                                            <option key={grade} value={grade}>{grade}</option>
                                                        ))}
                                                    </select>
                                                    <span className="dark:text-gray-300">to</span>
                                                    <select
                                                        value={entry.gradeTo}
                                                        onChange={(e) => handleUpdateSubject(index, 'gradeTo', e.target.value)}
                                                        className="px-3 py-2 w-20 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white"
                                                    >
                                                        <option value="" disabled></option>
                                                        {grades.map(grade => (
                                                            <option key={grade} value={grade}>{grade}</option>
                                                        ))}
                                                    </select>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveSubject(index)}
                                                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={handleAddSubject}
                                                className="mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
                                            >
                                                + Add another subject
                                            </button>
                                        </div>

                                        <div className="mb-6">
                                            <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Hourly Rate ($)
                                            </label>
                                            <input type="number" id="hourlyRate" defaultValue="35" className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" />
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Teaching Style/Traits
                                            </label>
                                            <div className="flex flex-wrap gap-2">
                                                {['Patient', 'Encouraging', 'Knowledgeable', 'Engaging', 'Creative', 'Supportive', 'Thorough', 'Organized', 'Analytical', 'Passionate'].map(trait => <label key={trait} className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                                                    <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600 mr-2" defaultChecked={['Patient', 'Knowledgeable', 'Analytical'].includes(trait)} />
                                                    <span className="dark:text-gray-300">{trait}</span>
                                                </label>)}
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                                Availability
                                            </label>
                                            <div className="space-y-4 mb-4">
                                                {availabilitySettings.map((day, dayIndex) => <div key={day.day} className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <label className="flex items-center">
                                                            <input type="checkbox" checked={day.enabled} onChange={() => toggleDayEnabled(dayIndex)} className="h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600 mr-2" />
                                                            <span className="font-medium dark:text-gray-300">
                                                                {day.day}
                                                            </span>
                                                        </label>
                                                        {day.enabled && <button type="button" onClick={() => addTimeSlot(dayIndex)} className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                                            + Add Time Slot
                                                        </button>}
                                                    </div>
                                                    {day.enabled && day.slots.map((slot, slotIndex) => <div key={slotIndex} className="flex items-center mb-2 last:mb-0">
                                                        <select value={slot.split(' - ')[0]} onChange={e => updateTimeSlot(dayIndex, slotIndex, `${e.target.value} - ${slot.split(' - ')[1]}`)} className="px-2 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md mr-2 dark:text-white">
                                                            {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'].map(time => <option key={time} value={time}>
                                                                {time}
                                                            </option>)}
                                                        </select>
                                                        <span className="mx-2 dark:text-gray-300">
                                                            to
                                                        </span>
                                                        <select value={slot.split(' - ')[1]} onChange={e => updateTimeSlot(dayIndex, slotIndex, `${slot.split(' - ')[0]} - ${e.target.value}`)} className="px-2 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md mr-2 dark:text-white">
                                                            {['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'].map(time => <option key={time} value={time}>
                                                                {time}
                                                            </option>)}
                                                        </select>
                                                        <button type="button" onClick={() => removeTimeSlot(dayIndex, slotIndex)} className="ml-auto text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">
                                                            Remove
                                                        </button>
                                                    </div>)}
                                                </div>)}
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                                                Save Profile
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'calendar' && <TutorCalendar />}
                    {activeTab === 'messages' && <TutorMessages />}
                    {activeTab === 'progress' && <StudentProgress />}
                </section>
            )}
        </main>
    );
};

export default TutorLogin;
