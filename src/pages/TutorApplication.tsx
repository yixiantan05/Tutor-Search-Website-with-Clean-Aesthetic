import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
const TutorApplication = () => {
    // List of subjects grouped by academic level with updated subjects
    const groupedSubjects = {
        'Primary (P1-P6)': ['Mathematics', 'Science', 'English', 'Chinese'],
        'Secondary (S1-S4/5)': ['Mathematics', 'Principles of Accounting', 'English', 'Chinese', 'History', 'Geography', 'Literature', 'Physics', 'Chemistry', 'Biology'],
        'Junior College (JC1-JC2)': ['H1 Biology', 'H1 Chemistry', 'H1 Chinese', 'H1 Economics', 'H1 Literature', 'H1 Mathematics', 'H1 Physics', 'H2 Mathematics', 'H2 Physics', 'H2 Chemistry', 'H2 Biology', 'H2 Economics', 'H2 Literature']
    };
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        bio: '',
        subjects: [],
        hourlyRate: '25',
        dob: '',
        gender: '',
        nationality: '',
        race: '',
        preferredLocation: {
            north: false,
            south: false,
            east: false,
            west: false
        },
        highestEducation: '',
        yearsTeaching: 0,
        teachingTraits: []
    });
    const [openCards, setOpenCards] = useState({});
    const handleChange = e => {
        const {
            name,
            value
        } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubjectChange = e => {
        const {
            value,
            checked
        } = e.target;
        setFormData(prev => ({
            ...prev,
            subjects: checked ? [...prev.subjects, value] : prev.subjects.filter(s => s !== value)
        }));
    };
    const handleCheckboxChange = e => {
        const {
            name,
            checked
        } = e.target;
        setFormData(prev => ({
            ...prev,
            preferredLocation: {
                ...prev.preferredLocation,
                [name]: checked
            }
        }));
    };
    const handleCardToggle = cardKey => {
        setOpenCards(prev => ({
            ...prev,
            [cardKey]: !prev[cardKey]
        }));
    };
    const handleSubmit = e => {
        e.preventDefault();
        // Here you would typically send the formData to a backend API
        console.log('Application Submitted:', formData);
        alert('Tutor application submitted successfully! We will review your application and get back to you shortly.');
        // Reset form
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            bio: '',
            subjects: [],
            hourlyRate: '25',
            dob: '',
            gender: '',
            nationality: '',
            race: '',
            preferredLocation: {
                north: false,
                south: false,
                east: false,
                west: false
            },
            highestEducation: '',
            yearsTeaching: 0,
            teachingTraits: []
        });
    };
    return <main className="w-full bg-white dark:bg-gray-900 min-h-screen font-sans">
        <section className="py-16 md:py-24 container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                    <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
                        Tutor Application
                    </h1>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                        Join our platform and start connecting with students today.
                    </p>
                    <form onSubmit={handleSubmit}>
                        {/* Personal Information Section */}
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                            Personal Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    First Name
                                </label>
                                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" required />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Last Name
                                </label>
                                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email Address
                                </label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Phone Number
                                </label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" />
                            </div>
                            <div>
                                <label htmlFor="dob" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Date of Birth
                                </label>
                                <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" required />
                            </div>
                            <div>
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Gender
                                </label>
                                <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" required>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                    <option value="prefer_not_to_say">Prefer not to say</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Nationality
                                </label>
                                <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" required />
                            </div>
                            <div>
                                <label htmlFor="race" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Race
                                </label>
                                <select id="race" name="race" value={formData.race} onChange={handleChange} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" required>
                                    <option value="">Select Race</option>
                                    <option value="chinese">Chinese</option>
                                    <option value="malay">Malay</option>
                                    <option value="indian">Indian</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Bio
                            </label>
                            <textarea id="bio" name="bio" rows={4} value={formData.bio} onChange={handleChange} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" placeholder="Tell us about yourself, your teaching philosophy, and your experience."></textarea>
                        </div>
                        {/* Preferred Location Section */}
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 mt-8">
                            Preferred Location
                        </h2>
                        <div className="mb-6">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Please select the regions you are willing to work in:
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" name="north" checked={formData.preferredLocation.north} onChange={handleCheckboxChange} className="h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600" />
                                    <span className="ml-2 text-gray-700 dark:text-gray-300">North</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" name="south" checked={formData.preferredLocation.south} onChange={handleCheckboxChange} className="h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600" />
                                    <span className="ml-2 text-gray-700 dark:text-gray-300">South</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" name="east" checked={formData.preferredLocation.east} onChange={handleCheckboxChange} className="h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600" />
                                    <span className="ml-2 text-gray-700 dark:text-gray-300">East</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" name="west" checked={formData.preferredLocation.west} onChange={handleCheckboxChange} className="h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600" />
                                    <span className="ml-2 text-gray-700 dark:text-gray-300">West</span>
                                </label>
                            </div>
                        </div>
                        {/* Academic Qualification Section */}
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 mt-8">
                            Academic & Professional Background
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="highestEducation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Highest Education Level
                                </label>
                                <select id="highestEducation" name="highestEducation" value={formData.highestEducation} onChange={handleChange} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" required>
                                    <option value="">Select Education Level</option>
                                    <option value="high_school">High School Diploma</option>
                                    <option value="bachelors">Bachelor's Degree</option>
                                    <option value="masters">Master's Degree</option>
                                    <option value="phd">PhD</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="yearsTeaching" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Years of Teaching Experience
                                </label>
                                <input type="number" id="yearsTeaching" name="yearsTeaching" value={formData.yearsTeaching} onChange={handleChange} min="0" className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" required />
                            </div>
                        </div>
                        {/* Tutoring Details Section */}
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 mt-8">
                            Tutoring Details
                        </h2>
                        <div className="mb-6">
                            <p className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Subjects you teach
                            </p>
                            <div className="space-y-4">
                                {Object.entries(groupedSubjects).map(([level, subjects]) => <div key={level} className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm overflow-hidden">
                                    <button type="button" onClick={() => handleCardToggle(level)} className="w-full flex justify-between items-center px-4 py-3 text-sm font-medium text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-t-lg transition-colors">
                                        <span>{level}</span>
                                        {openCards[level] ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                                    </button>
                                    <div className={`transition-max-height ease-in-out duration-300 overflow-hidden ${openCards[level] ? 'max-h-96' : 'max-h-0'}`}>
                                        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                                            {subjects.map(subject => <label key={subject} className="inline-flex items-center">
                                                <input type="checkbox" name="subjects" value={subject} checked={formData.subjects.includes(subject)} onChange={handleSubjectChange} className="h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600 mr-2" />
                                                <span className="text-gray-700 dark:text-gray-300">{subject}</span>
                                            </label>)}
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Preferred Hourly Rate ($)
                                </label>
                                <input type="number" id="hourlyRate" name="hourlyRate" value={formData.hourlyRate} onChange={handleChange} min="0" className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Teaching Style/Traits
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {['Patient', 'Encouraging', 'Knowledgeable', 'Engaging', 'Creative', 'Supportive', 'Thorough', 'Organized', 'Analytical', 'Passionate'].map(trait => <label key={trait} className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full cursor-pointer">
                                    <input type="checkbox" name="teachingTraits" value={trait} onChange={e => {
                                        const {
                                            value,
                                            checked
                                        } = e.target;
                                        setFormData(prev => ({
                                            ...prev,
                                            teachingTraits: checked ? [...prev.teachingTraits, value] : prev.teachingTraits.filter(t => t !== value)
                                        }));
                                    }} className="h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600 mr-2" />
                                    <span className="dark:text-gray-300">{trait}</span>
                                </label>)}
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-8">
                            <Link to="/tutor-login" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                                Already a tutor? Sign in.
                            </Link>
                            <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>;
};
export default TutorApplication;
