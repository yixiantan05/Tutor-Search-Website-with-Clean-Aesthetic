import React, { useState } from 'react';
import { StarIcon, FilterIcon, CalendarIcon, MessageSquareIcon, TrendingUpIcon } from 'lucide-react';
const ParentLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('tutors');
  const [activeFilters, setActiveFilters] = useState({
    subjects: [],
    traits: [],
    priceRange: [20, 50],
    location: [],
    gradeRange: [1, 12]
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
    description: 'PhD in Mathematics with 8 years of teaching experience. Specializing in advanced calculus and physics for high school and college students.',
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
    description: "Master's in Education with focus on English Literature. Published author helping students improve writing skills and literary analysis.",
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
    description: 'Biochemistry graduate with teaching certification. Specializes in making complex science concepts accessible to middle and high school students.',
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
    description: 'Software engineer and educator with 10+ years experience teaching programming, algorithms, and math to students of all levels.',
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
    description: 'History major with teaching certification. Makes historical events come alive through storytelling and interactive learning approaches.',
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
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    subjects: ['Spanish', 'French'],
    rating: 4.8,
    reviews: 91,
    hourlyRate: 42,
    traits: ['Patient', 'Cultural knowledge', 'Conversational'],
    description: 'Multilingual educator with experience teaching Spanish and French at all levels. Focuses on practical conversation skills and cultural context.',
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
  }]);
  const [progressData, setProgressData] = useState({
    subjects: [{
      name: 'Mathematics',
      grades: [78, 82, 85, 90],
      tests: ['Quiz 1', 'Test 1', 'Mid-term', 'Quiz 2'],
      comments: [{
        date: '2023-09-01',
        text: 'Emma has shown significant improvement in algebra concepts. Her problem-solving approach is becoming more methodical.'
      }]
    }, {
      name: 'Chemistry',
      grades: [72, 75, 80],
      tests: ['Lab Report', 'Quiz 1', 'Test 1'],
      comments: [{
        date: '2023-08-25',
        text: "Emma is becoming more confident with chemical equations and molecular structures. We're focusing on improving lab report writing skills."
      }]
    }]
  });
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
  const handlePriceChange = (e, index) => {
    const newRange = [...activeFilters.priceRange];
    newRange[index] = parseInt(e.target.value);
    setActiveFilters(prev => ({
      ...prev,
      priceRange: newRange
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
  const filteredTutors = tutors.filter(tutor => {
    // Filter by subjects
    if (activeFilters.subjects.length > 0 && !tutor.subjects.some(subject => activeFilters.subjects.includes(subject))) {
      return false;
    }
    // Filter by traits
    if (activeFilters.traits.length > 0 && !tutor.traits.some(trait => activeFilters.traits.includes(trait))) {
      return false;
    }
    // Filter by price range
    if (tutor.hourlyRate < activeFilters.priceRange[0] || tutor.hourlyRate > activeFilters.priceRange[1]) {
      return false;
    }
    // Filter by location
    if (activeFilters.location.length > 0 && !activeFilters.location.includes(tutor.location)) {
      return false;
    }
    // Filter by grade range
    const hasOverlappingGrades = tutor.grades.some(grade => grade >= activeFilters.gradeRange[0] && grade <= activeFilters.gradeRange[1]);
    if (!hasOverlappingGrades) {
      return false;
    }
    return true;
  });
  const getTopMatches = () => {
    // This is a simplified matching algorithm
    // In a real app, you'd have a more sophisticated matching algorithm
    const scoredTutors = tutors.map(tutor => {
      let score = 0;
      // Subject match
      if (activeFilters.subjects.length > 0) {
        const matchedSubjects = tutor.subjects.filter(subject => activeFilters.subjects.includes(subject));
        score += matchedSubjects.length / activeFilters.subjects.length * 10;
      }
      // Traits match
      if (activeFilters.traits.length > 0) {
        const matchedTraits = tutor.traits.filter(trait => activeFilters.traits.includes(trait));
        score += matchedTraits.length / activeFilters.traits.length * 8;
      }
      // Price match (closer to minimum is better)
      const priceScore = 5 - Math.abs(tutor.hourlyRate - activeFilters.priceRange[0]) / 10;
      score += Math.max(0, priceScore);
      // Rating bonus
      score += tutor.rating;
      return {
        ...tutor,
        matchScore: score
      };
    });
    // Sort by score and take top 3
    return scoredTutors.sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);
  };
  const handleMessageTutor = tutor => {
    setSelectedTutor(tutor);
    setChatView(true);
  };
  const handleScheduleSession = tutor => {
    setSelectedTutor(tutor);
    setCalendarView(true);
  };
  return <main className="w-full bg-white min-h-screen">
      {!isLoggedIn ? <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="px-6 py-8">
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Parent Login
              </h1>
              <form onSubmit={handleLogin}>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                    Password
                  </label>
                  <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="••••••••" required />
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                    Forgot password?
                  </a>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                  Sign In
                </button>
              </form>
              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Register now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section> : <section className="py-8 container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex -mb-px">
              <button onClick={() => {
            setActiveTab('tutors');
            setSelectedTutor(null);
            setChatView(false);
            setCalendarView(false);
          }} className={`py-4 px-6 font-medium text-sm mr-8 ${activeTab === 'tutors' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                <FilterIcon className="inline-block h-5 w-5 mr-2" />
                Find Tutors
              </button>
              <button onClick={() => {
            setActiveTab('messages');
            setSelectedTutor(null);
            setChatView(false);
            setCalendarView(false);
          }} className={`py-4 px-6 font-medium text-sm mr-8 ${activeTab === 'messages' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                <MessageSquareIcon className="inline-block h-5 w-5 mr-2" />
                Messages
                {recentMessages.some(msg => msg.unread) && <span className="ml-2 bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full text-xs">
                    {recentMessages.filter(msg => msg.unread).length}
                  </span>}
              </button>
              <button onClick={() => {
            setActiveTab('calendar');
            setSelectedTutor(null);
            setChatView(false);
            setCalendarView(false);
          }} className={`py-4 px-6 font-medium text-sm mr-8 ${activeTab === 'calendar' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                <CalendarIcon className="inline-block h-5 w-5 mr-2" />
                Calendar
              </button>
              <button onClick={() => {
            setActiveTab('progress');
            setSelectedTutor(null);
            setChatView(false);
            setCalendarView(false);
          }} className={`py-4 px-6 font-medium text-sm ${activeTab === 'progress' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                <TrendingUpIcon className="inline-block h-5 w-5 mr-2" />
                Progress Tracker
              </button>
            </nav>
          </div>
          {activeTab === 'tutors' && <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-8">
                Find the Perfect Tutor
              </h1>
              {chatView ? <div className="bg-white rounded-lg shadow-md">
                  <div className="p-4 border-b flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={selectedTutor.image} alt={selectedTutor.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                      <div>
                        <h3 className="font-medium">{selectedTutor.name}</h3>
                        <p className="text-xs text-gray-500">Online now</p>
                      </div>
                    </div>
                    <button onClick={() => setChatView(false)} className="text-gray-500 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="h-96 p-4 overflow-y-auto">
                    <div className="space-y-4">
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                          <p className="text-gray-800">
                            Hello! I'm interested in tutoring for my daughter
                            who needs help with calculus.
                          </p>
                          <p className="text-xs text-gray-500 text-right mt-1">
                            10:30 AM
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-600 rounded-lg p-3 max-w-xs text-white">
                          <p>
                            Hi there! I'd be happy to help with calculus. What
                            specific topics is she struggling with?
                          </p>
                          <p className="text-xs text-blue-100 text-right mt-1">
                            10:32 AM
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                          <p className="text-gray-800">
                            She's having trouble with derivatives and
                            integration. She's in 11th grade.
                          </p>
                          <p className="text-xs text-gray-500 text-right mt-1">
                            10:35 AM
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-600 rounded-lg p-3 max-w-xs text-white">
                          <p>
                            I specialize in those areas and have helped many
                            11th graders master calculus. Would you like to
                            schedule a trial session?
                          </p>
                          <p className="text-xs text-blue-100 text-right mt-1">
                            10:37 AM
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                          <p className="text-gray-800">
                            That sounds great! When are you available?
                          </p>
                          <p className="text-xs text-gray-500 text-right mt-1">
                            10:40 AM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t p-4">
                    <form className="flex">
                      <input type="text" placeholder="Type a message..." className="flex-1 px-4 py-2 bg-gray-100 rounded-l-md focus:outline-none" />
                      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                        Send
                      </button>
                    </form>
                    <div className="mt-4 flex justify-center">
                      <button onClick={() => setCalendarView(true)} className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 flex items-center">
                        <CalendarIcon className="h-5 w-5 mr-2" />
                        Schedule Lesson
                      </button>
                    </div>
                  </div>
                </div> : calendarView ? <div className="bg-white rounded-lg shadow-md">
                  <div className="p-4 border-b flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={selectedTutor.image} alt={selectedTutor.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                      <div>
                        <h3 className="font-medium">{selectedTutor.name}</h3>
                        <p className="text-xs text-gray-500">
                          Schedule a session
                        </p>
                      </div>
                    </div>
                    <button onClick={() => setCalendarView(false)} className="text-gray-500 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Available Time Slots
                    </h2>
                    <div className="mb-6">
                      <h3 className="font-medium mb-2">Select a subject:</h3>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        {selectedTutor.subjects.map(subject => <option key={subject} value={subject}>
                            {subject}
                          </option>)}
                      </select>
                    </div>
                    <div className="space-y-4">
                      {selectedTutor.availability.map((day, idx) => <div key={idx} className="border border-gray-200 rounded-md p-4">
                          <h4 className="font-medium mb-2">{day.day}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {day.slots.map((slot, slotIdx) => <div key={slotIdx} className="bg-gray-50 p-2 rounded border border-gray-200 hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-colors flex items-center">
                                <input type="radio" name="timeSlot" id={`slot-${idx}-${slotIdx}`} className="mr-2" />
                                <label htmlFor={`slot-${idx}-${slotIdx}`} className="flex-1 cursor-pointer">
                                  {slot}
                                </label>
                              </div>)}
                          </div>
                        </div>)}
                    </div>
                    <div className="mt-8 space-y-4">
                      <div className="border-t border-gray-200 pt-4">
                        <h3 className="font-medium mb-2">Session Details:</h3>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm text-gray-700 mb-1">
                              Duration
                            </label>
                            <select className="w-full p-2 border border-gray-300 rounded-md">
                              <option value="60">
                                1 hour - ${selectedTutor.hourlyRate}
                              </option>
                              <option value="90">
                                1.5 hours - $
                                {Math.round(selectedTutor.hourlyRate * 1.5)}
                              </option>
                              <option value="120">
                                2 hours - ${selectedTutor.hourlyRate * 2}
                              </option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm text-gray-700 mb-1">
                              Session Type
                            </label>
                            <div className="flex gap-4">
                              <label className="flex items-center">
                                <input type="radio" name="sessionType" className="mr-2" defaultChecked />
                                <span>Online</span>
                              </label>
                              <label className="flex items-center">
                                <input type="radio" name="sessionType" className="mr-2" />
                                <span>In Person</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 pt-4">
                        <h3 className="font-medium mb-2">Payment Method:</h3>
                        <div className="space-y-2">
                          <label className="flex items-center p-2 border border-gray-200 rounded-md">
                            <input type="radio" name="paymentMethod" className="mr-2" defaultChecked />
                            <span className="flex-1">
                              Credit Card ending in 4242
                            </span>
                          </label>
                          <label className="flex items-center p-2 border border-gray-200 rounded-md">
                            <input type="radio" name="paymentMethod" className="mr-2" />
                            <span className="flex-1">
                              Add new payment method
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700" onClick={() => {
                setCalendarView(false);
                alert("Session scheduled successfully! You'll receive a confirmation email shortly.");
              }}>
                        Confirm & Pay
                      </button>
                    </div>
                  </div>
                </div> : <div className="flex flex-col lg:flex-row gap-8">
                  {/* Filters Sidebar */}
                  <div className="lg:w-1/4">
                    <div className="bg-white rounded-lg shadow p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Filters</h2>
                        <FilterIcon className="h-5 w-5 text-gray-600" />
                      </div>
                      {/* Top Matching Tutors Button */}
                      <button className="w-full mb-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors" onClick={() => {
                const topMatches = getTopMatches();
                alert(`Top matches based on your filters:\n\n${topMatches.map(t => `${t.name} (Match score: ${t.matchScore.toFixed(1)})`).join('\n')}`);
              }}>
                        Show Top 3 Matching Tutors
                      </button>
                      {/* Subject Filter */}
                      <div className="mb-6">
                        <h3 className="text-sm font-medium mb-2">Subject</h3>
                        <div className="space-y-2">
                          {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Literature', 'History', 'Computer Science', 'Spanish', 'French'].map(subject => <label key={subject} className="flex items-center">
                              <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" checked={activeFilters.subjects.includes(subject)} onChange={() => toggleSubjectFilter(subject)} />
                              <span className="ml-2 text-sm text-gray-700">
                                {subject}
                              </span>
                            </label>)}
                        </div>
                      </div>
                      {/* Location Filter */}
                      <div className="mb-6">
                        <h3 className="text-sm font-medium mb-2">Location</h3>
                        <div className="space-y-2">
                          {['New York, NY', 'Boston, MA', 'Chicago, IL', 'San Francisco, CA', 'Austin, TX', 'Miami, FL'].map(location => <label key={location} className="flex items-center">
                              <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" checked={activeFilters.location.includes(location)} onChange={() => toggleLocationFilter(location)} />
                              <span className="ml-2 text-sm text-gray-700">
                                {location}
                              </span>
                            </label>)}
                        </div>
                      </div>
                      {/* Grade Range Filter */}
                      <div className="mb-6">
                        <h3 className="text-sm font-medium mb-2">
                          Grade Range
                        </h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">
                            Grade {activeFilters.gradeRange[0]}
                          </span>
                          <span className="text-sm text-gray-600">
                            Grade {activeFilters.gradeRange[1]}
                          </span>
                        </div>
                        <div className="flex gap-4">
                          <input type="range" min="1" max="12" value={activeFilters.gradeRange[0]} onChange={e => handleGradeChange(e, 0)} className="w-full" />
                          <input type="range" min="1" max="12" value={activeFilters.gradeRange[1]} onChange={e => handleGradeChange(e, 1)} className="w-full" />
                        </div>
                      </div>
                      {/* Tutor Traits Filter */}
                      <div className="mb-6">
                        <h3 className="text-sm font-medium mb-2">
                          Tutor Traits
                        </h3>
                        <div className="space-y-2">
                          {['Patient', 'Encouraging', 'Knowledgeable', 'Engaging', 'Creative', 'Supportive', 'Thorough', 'Organized', 'Analytical', 'Passionate'].map(trait => <label key={trait} className="flex items-center">
                              <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" checked={activeFilters.traits.includes(trait)} onChange={() => toggleTraitFilter(trait)} />
                              <span className="ml-2 text-sm text-gray-700">
                                {trait}
                              </span>
                            </label>)}
                        </div>
                      </div>
                      {/* Price Range Filter */}
                      <div>
                        <h3 className="text-sm font-medium mb-2">
                          Price Range ($/hour)
                        </h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">
                            ${activeFilters.priceRange[0]}
                          </span>
                          <span className="text-sm text-gray-600">
                            ${activeFilters.priceRange[1]}
                          </span>
                        </div>
                        <div className="flex gap-4">
                          <input type="range" min="20" max="100" value={activeFilters.priceRange[0]} onChange={e => handlePriceChange(e, 0)} className="w-full" />
                          <input type="range" min="20" max="100" value={activeFilters.priceRange[1]} onChange={e => handlePriceChange(e, 1)} className="w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tutors Grid */}
                  <div className="lg:w-3/4">
                    {selectedTutor ? <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="p-6">
                          <button onClick={() => setSelectedTutor(null)} className="text-blue-600 hover:text-blue-800 mb-6 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            Back to all tutors
                          </button>
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 mb-6 md:mb-0">
                              <img src={selectedTutor.image} alt={selectedTutor.name} className="w-48 h-48 rounded-lg object-cover mx-auto md:mx-0" />
                              <div className="mt-4 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start">
                                  <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-5 w-5 ${i < Math.floor(selectedTutor.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />)}
                                  </div>
                                  <span className="ml-2 text-sm text-gray-600">
                                    {selectedTutor.rating} (
                                    {selectedTutor.reviews} reviews)
                                  </span>
                                </div>
                                <p className="text-xl font-bold text-blue-600 mt-2">
                                  ${selectedTutor.hourlyRate}/hour
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                  <span className="font-medium">Location:</span>{' '}
                                  {selectedTutor.location}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                  <span className="font-medium">
                                    Grade Levels:
                                  </span>{' '}
                                  {selectedTutor.grades.join(', ')}
                                </p>
                              </div>
                            </div>
                            <div className="md:w-2/3 md:pl-8">
                              <h2 className="text-2xl font-bold mb-2">
                                {selectedTutor.name}
                              </h2>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {selectedTutor.subjects.map(subject => <span key={subject} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                    {subject}
                                  </span>)}
                              </div>
                              <div className="mb-6">
                                <h3 className="text-lg font-medium mb-2">
                                  About
                                </h3>
                                <p className="text-gray-700">
                                  {selectedTutor.description}
                                </p>
                              </div>
                              <div className="mb-6">
                                <h3 className="text-lg font-medium mb-2">
                                  Teaching Style
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                  {selectedTutor.traits.map(trait => <span key={trait} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                                      {trait}
                                    </span>)}
                                </div>
                              </div>
                              <div className="mb-6">
                                <h3 className="text-lg font-medium mb-2">
                                  Availability
                                </h3>
                                <div className="space-y-2">
                                  {selectedTutor.availability.map((day, idx) => <div key={idx} className="flex">
                                        <span className="font-medium w-28">
                                          {day.day}:
                                        </span>
                                        <span>{day.slots.join(', ')}</span>
                                      </div>)}
                                </div>
                              </div>
                              <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors" onClick={() => handleScheduleSession(selectedTutor)}>
                                  Schedule Session
                                </button>
                                <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md border border-blue-600 hover:bg-blue-50 transition-colors" onClick={() => handleMessageTutor(selectedTutor)}>
                                  Message Tutor
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> : <>
                        <div className="flex justify-between items-center mb-6">
                          <h2 className="text-lg font-medium">
                            Showing {filteredTutors.length} tutors
                          </h2>
                          <div>
                            <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                              <option>Sort by: Recommended</option>
                              <option>Price: Low to High</option>
                              <option>Price: High to Low</option>
                              <option>Rating</option>
                            </select>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                          {filteredTutors.map(tutor => <div key={tutor.id} className="bg-white rounded-lg shadow overflow-hidden">
                              <div className="p-6">
                                <div className="flex">
                                  <img src={tutor.image} alt={tutor.name} className="w-20 h-20 rounded-full object-cover mr-4" />
                                  <div>
                                    <h3 className="font-bold text-lg">
                                      {tutor.name}
                                    </h3>
                                    <div className="flex items-center mt-1">
                                      <div className="flex">
                                        {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-4 w-4 ${i < Math.floor(tutor.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />)}
                                      </div>
                                      <span className="ml-2 text-sm text-gray-600">
                                        {tutor.rating} ({tutor.reviews})
                                      </span>
                                    </div>
                                    <p className="text-blue-600 font-medium mt-1">
                                      ${tutor.hourlyRate}/hour
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                      {tutor.location}
                                    </p>
                                  </div>
                                </div>
                                <div className="mt-4">
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    {tutor.subjects.map(subject => <span key={subject} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                                        {subject}
                                      </span>)}
                                  </div>
                                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                                    {tutor.description}
                                  </p>
                                  <div className="flex flex-wrap gap-2 mb-4">
                                    {tutor.traits.slice(0, 3).map(trait => <span key={trait} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                                        {trait}
                                      </span>)}
                                  </div>
                                  <button onClick={() => setSelectedTutor(tutor)} className="w-full py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                                    View Profile
                                  </button>
                                </div>
                              </div>
                            </div>)}
                        </div>
                      </>}
                  </div>
                </div>}
            </div>}
          {activeTab === 'messages' && <div className="bg-white rounded-lg shadow">
              <h1 className="text-3xl font-bold text-gray-800 mb-8 px-6 pt-6">
                Messages
              </h1>
              <div className="flex h-[600px]">
                {/* Conversations List */}
                <div className="w-1/3 border-r overflow-y-auto">
                  <div className="p-4 border-b">
                    <input type="text" placeholder="Search messages" className="w-full px-3 py-2 bg-gray-100 rounded-md" />
                  </div>
                  {/* Conversation Items */}
                  <div>
                    {recentMessages.map((message, idx) => <div key={idx} className={`p-4 border-b ${idx === 0 ? 'bg-blue-50' : 'hover:bg-gray-50'} cursor-pointer`}>
                        <div className="flex items-center">
                          <img src={message.tutorImage} alt={message.tutorName} className="w-10 h-10 rounded-full mr-3 object-cover" />
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between">
                              <h3 className="font-medium truncate">
                                {message.tutorName}
                              </h3>
                              <span className="text-xs text-gray-500">
                                {message.timestamp}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <p className="text-sm text-gray-600 truncate flex-1">
                                {message.lastMessage}
                              </p>
                              {message.unread && <span className="ml-2 w-2 h-2 bg-blue-600 rounded-full"></span>}
                            </div>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>
                {/* Message Content */}
                <div className="w-2/3 flex flex-col">
                  <div className="p-4 border-b">
                    <div className="flex items-center">
                      <img src={recentMessages[0].tutorImage} alt={recentMessages[0].tutorName} className="w-10 h-10 rounded-full mr-3 object-cover" />
                      <div>
                        <h3 className="font-medium">
                          {recentMessages[0].tutorName}
                        </h3>
                        <p className="text-xs text-gray-500">Online now</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto">
                    <div className="space-y-4">
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                          <p className="text-gray-800">
                            Hi there! I have availability this Thursday at 4pm
                            and Friday at 3pm. Would either of those times work
                            for your daughter's calculus tutoring?
                          </p>
                          <p className="text-xs text-gray-500 text-right mt-1">
                            2:10 PM
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-600 rounded-lg p-3 max-w-xs text-white">
                          <p>
                            Thursday would be perfect. She gets out of school at
                            3:30, so 4pm gives her time to get home and prepare.
                          </p>
                          <p className="text-xs text-blue-100 text-right mt-1">
                            2:12 PM
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                          <p className="text-gray-800">
                            I'm available this Thursday at 4pm if that works for
                            you?
                          </p>
                          <p className="text-xs text-gray-500 text-right mt-1">
                            2:15 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t">
                    <div className="flex mb-4">
                      <input type="text" placeholder="Type a message..." className="flex-1 px-4 py-2 bg-gray-100 rounded-l-md focus:outline-none" />
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                        Send
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                        Schedule Session
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {activeTab === 'calendar' && <div className="bg-white rounded-lg shadow">
              <h1 className="text-3xl font-bold text-gray-800 mb-8 px-6 pt-6">
                Calendar
              </h1>
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">September 2023</h2>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7 text-center py-2 border-b">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="text-sm font-medium text-gray-500">
                      {day}
                    </div>)}
              </div>
              <div className="grid grid-cols-7 text-center">
                {Array.from({
            length: 35
          }).map((_, i) => {
            const day = i - 3; // Offset to start month on correct day
            const isLesson = day === 20 || day === 22; // Days with lessons
            return <div key={i} className={`py-3 border-b border-r ${i % 7 === 6 ? '' : ''} ${day <= 0 || day > 30 ? 'text-gray-300' : 'hover:bg-blue-50 cursor-pointer'} ${isLesson ? 'bg-blue-50' : ''}`}>
                      <span className={`inline-block rounded-full w-8 h-8 leading-8 ${isLesson ? 'bg-blue-600 text-white' : ''}`}>
                        {day > 0 && day <= 30 ? day : ''}
                      </span>
                      {day === 20 && <div className="mt-1 mx-auto w-2 h-2 bg-white rounded-full"></div>}
                      {day === 22 && <div className="mt-1 mx-auto w-2 h-2 bg-white rounded-full"></div>}
                    </div>;
          })}
              </div>
              <div className="p-6">
                <h3 className="font-medium mb-4">Upcoming Lessons</h3>
                <div className="space-y-4">
                  {upcomingLessons.map((lesson, idx) => <div key={idx} className="flex items-start p-3 bg-blue-50 rounded-md">
                      <div className="mr-4">
                        <div className="text-center">
                          <div className="text-sm font-bold">SEP</div>
                          <div className="text-xl font-bold">
                            {lesson.date.split('-')[2]}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">
                          {lesson.subject} - {lesson.tutorName}
                        </div>
                        <div className="text-sm text-gray-600">
                          {lesson.time}
                        </div>
                      </div>
                      <div>
                        <span className={`px-2 py-1 text-xs font-medium ${lesson.online ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'} rounded-full`}>
                          {lesson.online ? 'Online' : 'In Person'}
                        </span>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>}
          {activeTab === 'progress' && <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-8">
                Progress Tracker
              </h1>
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Grade Progress</h2>
                {progressData.subjects.map((subject, idx) => <div key={idx} className="mb-8">
                    <h3 className="text-lg font-medium mb-3">{subject.name}</h3>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Grade Progression</span>
                          <span className="text-blue-600 font-medium">
                            {subject.grades[subject.grades.length - 1]}%
                          </span>
                        </div>
                        <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
                          {subject.grades.map((grade, i) => <div key={i} className="h-full bg-blue-600 relative" style={{
                    width: `${grade}%`,
                    position: i === 0 ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    opacity: (i + 1) / subject.grades.length
                  }}></div>)}
                        </div>
                        <div className="flex justify-between mt-2 text-sm text-gray-600">
                          {subject.tests.map((test, i) => <span key={i}>
                              {test}: {subject.grades[i]}%
                            </span>)}
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Tutor Comments</h4>
                      {subject.comments.map((comment, i) => <div key={i} className="mb-2 last:mb-0">
                          <p className="text-sm text-gray-500">
                            {comment.date}
                          </p>
                          <p className="text-gray-700">{comment.text}</p>
                        </div>)}
                    </div>
                  </div>)}
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Learning Goals</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">
                        Master calculus derivatives
                      </span>
                      <span>75% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                  width: '75%'
                }}></div>
                    </div>
                  </div>
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">
                        Improve chemistry lab reports
                      </span>
                      <span>40% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                  width: '40%'
                }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">
                        Prepare for SAT math section
                      </span>
                      <span>20% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                  width: '20%'
                }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
        </section>}
    </main>;
};
export default ParentLogin;