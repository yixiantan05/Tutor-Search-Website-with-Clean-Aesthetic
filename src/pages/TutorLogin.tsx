import React, { useState } from 'react';
import { CalendarIcon, MessageSquareIcon, UserIcon, TrendingUpIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const TutorLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showProgressInput, setShowProgressInput] = useState(false);
  const [selectedParent, setSelectedParent] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);
  const [availabilitySettings, setAvailabilitySettings] = useState([{
    day: 'Monday',
    slots: ['3:00 PM - 5:00 PM', '7:00 PM - 9:00 PM'],
    enabled: true
  }, {
    day: 'Tuesday',
    slots: [],
    enabled: false
  }, {
    day: 'Wednesday',
    slots: ['4:00 PM - 6:00 PM'],
    enabled: true
  }, {
    day: 'Thursday',
    slots: [],
    enabled: false
  }, {
    day: 'Friday',
    slots: ['3:00 PM - 7:00 PM'],
    enabled: true
  }, {
    day: 'Saturday',
    slots: [],
    enabled: false
  }, {
    day: 'Sunday',
    slots: [],
    enabled: false
  }]);
  const [upcomingLessons, setUpcomingLessons] = useState([{
    id: 1,
    studentName: 'Emily Johnson',
    parentName: 'Sarah Johnson',
    subject: 'Mathematics - Calculus',
    date: '2023-09-20',
    time: '4:00 PM - 5:30 PM',
    online: true
  }, {
    id: 2,
    studentName: 'Michael Lee',
    parentName: 'David Lee',
    subject: 'Mathematics - Statistics',
    date: '2023-09-22',
    time: '3:30 PM - 5:00 PM',
    online: false
  }, {
    id: 3,
    studentName: 'Emma Wilson',
    parentName: 'Jennifer Wilson',
    subject: 'Mathematics - Algebra',
    date: '2023-09-25',
    time: '5:00 PM - 6:30 PM',
    online: true
  }, {
    id: 4,
    studentName: 'Noah Garcia',
    parentName: 'Robert Garcia',
    subject: 'Mathematics - Calculus',
    date: '2023-09-28',
    time: '4:00 PM - 5:30 PM',
    online: true
  }]);
  const [activeFilters, setActiveFilters] = useState({
    subjects: ['Mathematics', 'Calculus', 'Algebra', 'Statistics'],
    traits: ['Patient', 'Knowledgeable', 'Analytical'],
    gradeRange: [9, 12],
    location: ['New York, NY']
  });
  const [studentProgress, setStudentProgress] = useState([{
    id: 1,
    name: 'Emily Johnson',
    parentName: 'Sarah Johnson',
    parentId: 101,
    subject: 'Mathematics - Calculus',
    grades: [75, 82, 88, 92],
    tests: ['Quiz 1', 'Test 1', 'Mid-term', 'Quiz 2'],
    lastUpdated: '2023-09-15',
    notes: 'Emily has shown significant improvement in derivatives. We need to focus more on integration techniques.'
  }, {
    id: 2,
    name: 'Michael Lee',
    parentName: 'David Lee',
    parentId: 102,
    subject: 'Mathematics - Statistics',
    grades: [68, 72, 80],
    tests: ['Quiz 1', 'Project', 'Mid-term'],
    lastUpdated: '2023-09-10',
    notes: "Michael is struggling with probability concepts. I've provided additional practice problems."
  }]);
  const [messages, setMessages] = useState([{
    parentId: 101,
    parentName: 'Sarah Johnson',
    parentImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    unread: true,
    messages: [{
      sender: 'parent',
      text: "Hi there! I wanted to check in on Emily's progress with calculus.",
      timestamp: '10:30 AM'
    }, {
      sender: 'tutor',
      text: "Hello Sarah! Emily is doing great. She's really improved on derivatives and we're now working on integration techniques.",
      timestamp: '10:35 AM'
    }, {
      sender: 'parent',
      text: "That's wonderful to hear! She mentioned she has a test coming up next week. Is there anything specific she should focus on?",
      timestamp: '10:40 AM'
    }, {
      sender: 'tutor',
      text: "Yes, I'd recommend she review the chain rule and integration by parts. Those are likely to be on the test.",
      timestamp: '10:45 AM'
    }]
  }, {
    parentId: 102,
    parentName: 'David Lee',
    parentImage: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    unread: false,
    messages: [{
      sender: 'tutor',
      text: "Hi David, I wanted to let you know that Michael is struggling a bit with probability concepts. I've given him some extra practice problems.",
      timestamp: 'Yesterday'
    }, {
      sender: 'parent',
      text: "Thanks for letting me know. I'll make sure he spends extra time on those problems.",
      timestamp: 'Yesterday'
    }, {
      sender: 'tutor',
      text: "Great! Let me know if he has any questions. We'll continue working on it in our next session.",
      timestamp: 'Yesterday'
    }]
  }]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const handleLogin = e => {
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
  const handleNewProgressSubmit = e => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('Progress updated successfully!');
    setShowProgressInput(false);
    setSelectedStudent(null);
  };
  const renderCalendarHeader = () => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return <div className="flex justify-between items-center mb-4">
        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <h2 className="text-xl font-semibold">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>;
  };
  const renderCalendarDays = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return <div className="grid grid-cols-7 mb-2">
        {days.map(day => <div key={day} className="text-center font-medium text-gray-500 dark:text-gray-400 text-sm py-2">
            {day}
          </div>)}
      </div>;
  };
  const renderCalendarCells = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    // Day of week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay();
    // Total days in the month
    const daysInMonth = lastDay.getDate();
    // Create calendar cells
    const cells = [];
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      cells.push(<div key={`empty-${i}`} className="p-2 border border-gray-200 dark:border-gray-700"></div>);
    }
    // Map lesson dates for easy lookup
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
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const hasLesson = lessonDates[day];
      cells.push(<div key={`day-${day}`} className={`p-2 border border-gray-200 dark:border-gray-700 min-h-[80px] ${hasLesson ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
          <div className="font-medium">{day}</div>
          {hasLesson && <div className="mt-1">
              {lessonDates[day].map((lesson, idx) => <div key={idx} className="text-xs p-1 bg-blue-100 dark:bg-blue-800 rounded mb-1 truncate">
                  {lesson.time} - {lesson.studentName}
                </div>)}
            </div>}
        </div>);
    }
    return <div className="grid grid-cols-7">{cells}</div>;
  };
  return <main className="w-full bg-white dark:bg-gray-900 min-h-screen">
      {!isLoggedIn ? <section className="py-16 md:py-24 container mx-auto px-4">
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
        </section> : <section className="py-8 container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            Tutor Dashboard
          </h1>
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
            <nav className="flex -mb-px">
              <button onClick={() => setActiveTab('profile')} className={`py-4 px-6 font-medium text-sm mr-8 ${activeTab === 'profile' ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}>
                <UserIcon className="inline-block h-5 w-5 mr-2" />
                Profile
              </button>
              <button onClick={() => setActiveTab('calendar')} className={`py-4 px-6 font-medium text-sm mr-8 ${activeTab === 'calendar' ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}>
                <CalendarIcon className="inline-block h-5 w-5 mr-2" />
                Calendar
              </button>
              <button onClick={() => setActiveTab('messages')} className={`py-4 px-6 font-medium text-sm mr-8 ${activeTab === 'messages' ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}>
                <MessageSquareIcon className="inline-block h-5 w-5 mr-2" />
                Messages
                <span className="ml-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 py-0.5 px-2 rounded-full text-xs">
                  {messages.filter(m => m.unread).length}
                </span>
              </button>
              <button onClick={() => setActiveTab('progress')} className={`py-4 px-6 font-medium text-sm ${activeTab === 'progress' ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}>
                <TrendingUpIcon className="inline-block h-5 w-5 mr-2" />
                Student Progress
              </button>
            </nav>
          </div>
          {/* Tab Content */}
          {activeTab === 'profile' && <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
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
                      <textarea id="bio" rows={4} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" defaultValue="Mathematics tutor with 5+ years of experience teaching high school and college-level courses. Specializing in calculus, algebra, and statistics."></textarea>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Location
                      </label>
                      <input type="text" id="location" defaultValue="New York, NY" className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="subjects" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subjects
                      </label>
                      <input type="text" id="subjects" defaultValue="Mathematics, Calculus, Algebra, Statistics" className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Separate subjects with commas
                      </p>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="gradeRange" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Grade Levels
                      </label>
                      <div className="flex items-center">
                        <select id="gradeMin" className="w-24 px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" defaultValue="9">
                          {[...Array(12)].map((_, i) => <option key={i} value={i + 1}>
                              Grade {i + 1}
                            </option>)}
                        </select>
                        <span className="mx-2 dark:text-gray-300">to</span>
                        <select id="gradeMax" className="w-24 px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" defaultValue="12">
                          {[...Array(12)].map((_, i) => <option key={i} value={i + 1}>
                              Grade {i + 1}
                            </option>)}
                        </select>
                      </div>
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
                                    {['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'].map(time => <option key={time} value={time}>
                                        {time}
                                      </option>)}
                                  </select>
                                  <button type="button" onClick={() => removeTimeSlot(dayIndex, slotIndex)} className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                  </button>
                                </div>)}
                          </div>)}
                      </div>
                      <div className="flex justify-end">
                        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>}
          {activeTab === 'calendar' && <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
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
                  {upcomingLessons.map(lesson => <div key={lesson.id} className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                      <div className="mr-4 text-center bg-white dark:bg-gray-700 rounded-md p-2 shadow-sm">
                        <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          {new Date(lesson.date).toLocaleString('default', {
                    month: 'short'
                  })}
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
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${lesson.online ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'}`}>
                            {lesson.online ? 'Online' : 'In Person'}
                          </span>
                        </div>
                      </div>
                      <div>
                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                          View Details
                        </button>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>}
          {activeTab === 'messages' && <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="flex h-[600px]">
                {/* Parents List */}
                <div className="w-1/3 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <input type="text" placeholder="Search messages" className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none dark:text-white dark:placeholder-gray-400" />
                  </div>
                  {/* Parents Items */}
                  <div>
                    {messages.map((parent, idx) => <div key={parent.parentId} className={`p-4 border-b border-gray-200 dark:border-gray-700 ${selectedChat === parent.parentId ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-700'} cursor-pointer`} onClick={() => setSelectedChat(parent.parentId)}>
                        <div className="flex items-center">
                          <img src={parent.parentImage} alt={parent.parentName} className="w-10 h-10 rounded-full mr-3 object-cover" />
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between">
                              <h3 className="font-medium dark:text-white truncate">
                                {parent.parentName}
                              </h3>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {parent.messages[parent.messages.length - 1].timestamp}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <p className="text-sm text-gray-600 dark:text-gray-300 truncate flex-1">
                                {parent.messages[parent.messages.length - 1].text}
                              </p>
                              {parent.unread && <span className="ml-2 w-2 h-2 bg-blue-600 rounded-full"></span>}
                            </div>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>
                {/* Message Content */}
                {selectedChat ? <div className="w-2/3 flex flex-col">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center">
                        <img src={messages.find(m => m.parentId === selectedChat).parentImage} alt={messages.find(m => m.parentId === selectedChat).parentName} className="w-10 h-10 rounded-full mr-3 object-cover" />
                        <div>
                          <h3 className="font-medium dark:text-white">
                            {messages.find(m => m.parentId === selectedChat).parentName}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Parent
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
                      <div className="space-y-4">
                        {messages.find(m => m.parentId === selectedChat).messages.map((message, idx) => <div key={idx} className={`flex ${message.sender === 'tutor' ? 'justify-end' : 'justify-start'}`}>
                              <div className={`rounded-lg p-3 max-w-xs ${message.sender === 'tutor' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'}`}>
                                <p>{message.text}</p>
                                <p className={`text-xs text-right mt-1 ${message.sender === 'tutor' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                                  {message.timestamp}
                                </p>
                              </div>
                            </div>)}
                      </div>
                    </div>
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <form className="flex">
                        <input type="text" placeholder="Type a message..." className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-l-md focus:outline-none dark:text-white dark:placeholder-gray-400" />
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                          Send
                        </button>
                      </form>
                    </div>
                  </div> : <div className="w-2/3 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    Select a conversation to start messaging
                  </div>}
              </div>
            </div>}
          {activeTab === 'progress' && <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              {showProgressInput ? <div>
                  <button onClick={() => {
            setShowProgressInput(false);
            setSelectedStudent(null);
          }} className="flex items-center text-blue-600 dark:text-blue-400 mb-4">
                    <ChevronLeftIcon className="h-5 w-5 mr-1" />
                    Back to students
                  </button>
                  <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                    Update Progress for {selectedStudent.name}
                  </h2>
                  <form onSubmit={handleNewProgressSubmit}>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Test/Assessment Name
                      </label>
                      <input type="text" className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" placeholder="e.g. Quiz 3, Mid-term, Final Exam" required />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Grade/Score (%)
                      </label>
                      <input type="number" min="0" max="100" className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" placeholder="e.g. 85" required />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Date
                      </label>
                      <input type="date" className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" required />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Comments for Parent
                      </label>
                      <textarea rows={4} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" placeholder="Provide feedback on strengths, areas for improvement, and recommendations" required></textarea>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Topics Covered
                      </label>
                      <input type="text" className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" placeholder="e.g. Derivatives, Integration, Limits" />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Next Steps/Goals
                      </label>
                      <textarea rows={2} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" placeholder="Outline focus areas and goals for upcoming sessions"></textarea>
                    </div>
                    <div className="flex justify-end">
                      <button type="button" onClick={() => {
                setShowProgressInput(false);
                setSelectedStudent(null);
              }} className="px-6 py-2 mr-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600">
                        Cancel
                      </button>
                      <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Submit Progress Update
                      </button>
                    </div>
                  </form>
                </div> : selectedStudent ? <div>
                  <button onClick={() => setSelectedStudent(null)} className="flex items-center text-blue-600 dark:text-blue-400 mb-4">
                    <ChevronLeftIcon className="h-5 w-5 mr-1" />
                    Back to students
                  </button>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold dark:text-white">
                      {selectedStudent.name}'s Progress
                    </h2>
                    <button onClick={() => setShowProgressInput(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Add Progress Update
                    </button>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4 dark:text-white">
                      Grade History
                    </h3>
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 mb-4">
                      <div className="h-64">
                        {/* This would be a chart in a real implementation */}
                        <div className="h-full flex items-center justify-center">
                          <div className="text-gray-500 dark:text-gray-400 text-center">
                            <p>Line chart showing grade progression</p>
                            <p className="text-sm mt-2">
                              Grades: {selectedStudent.grades.join(', ')}
                            </p>
                            <p className="text-sm mt-1">
                              Tests: {selectedStudent.tests.join(', ')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4 dark:text-white">
                      Progress Notes
                    </h3>
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
                      <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-600">
                        <div className="flex justify-between">
                          <h4 className="font-medium dark:text-white">
                            Latest Update
                          </h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {selectedStudent.lastUpdated}
                          </span>
                        </div>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                          {selectedStudent.notes}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium dark:text-white">
                          Previous Updates
                        </h4>
                        <button className="text-blue-600 dark:text-blue-400 text-sm">
                          View All
                        </button>
                      </div>
                    </div>
                  </div>
                </div> : <div>
                  <h2 className="text-xl font-semibold mb-6 dark:text-white">
                    Student Progress Tracking
                  </h2>
                  <div className="mb-6">
                    <input type="text" placeholder="Search students..." className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none dark:text-white" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {studentProgress.map(student => <div key={student.id} className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => setSelectedStudent(student)}>
                        <div className="p-6">
                          <h3 className="font-bold text-lg dark:text-white">
                            {student.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Parent: {student.parentName}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            {student.subject}
                          </p>
                          <div className="mb-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600 dark:text-gray-400">
                                Current Grade
                              </span>
                              <span className="font-medium dark:text-white">
                                {student.grades[student.grades.length - 1]}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{
                      width: `${student.grades[student.grades.length - 1]}%`
                    }}></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              Last updated: {student.lastUpdated}
                            </span>
                            <button className="text-blue-600 dark:text-blue-400">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>}
            </div>}
        </section>}
    </main>;
};
export default TutorLogin;