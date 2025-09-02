import React, { useState, useEffect, useRef } from 'react';
import { PlusCircle, Trash2, Edit } from 'lucide-react';

interface ChildData {
    childName: string;
    childAcademicLevel: string;
    schoolAttending: string;
    gender: string;
}

interface ParentProfileData {
    name: string;
    email: string;
    phone: string;
    relationship: string;
    image: string;
    children: ChildData[];
}

interface ParentProfileProps {
    parentProfile: ParentProfileData;
    setParentProfile: (profile: ParentProfileData) => void;
}

const ParentProfile: React.FC<ParentProfileProps> = ({ parentProfile, setParentProfile }) => {
    const academicLevels = [
        'P1', 'P2', 'P3', 'P4', 'P5', 'P6',
        'Sec 1', 'Sec 2', 'Sec 3', 'Sec 4', 'JC1', 'JC2'
    ];

    const [editedProfile, setEditedProfile] = useState<ParentProfileData>(parentProfile);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setEditedProfile(parentProfile);
    }, [parentProfile]);

    const handleSaveProfile = (e: React.FormEvent) => {
        e.preventDefault();
        setParentProfile(editedProfile);
        alert("Profile updated successfully!");
    };

    const handleParentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEditedProfile(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditedProfile(prev => ({
                    ...prev,
                    image: reader.result as string
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChildChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const newChildren = [...editedProfile.children];
        newChildren[index] = { ...newChildren[index], [name]: value };
        setEditedProfile(prev => ({
            ...prev,
            children: newChildren
        }));
    };

    const addChild = () => {
        setEditedProfile(prev => ({
            ...prev,
            children: [...prev.children, {
                childName: '',
                childAcademicLevel: '',
                schoolAttending: '',
                gender: ''
            }]
        }));
    };

    const removeChild = (index: number) => {
        const newChildren = [...editedProfile.children];
        newChildren.splice(index, 1);
        setEditedProfile(prev => ({
            ...prev,
            children: newChildren
        }));
    };

    const handleEditPicClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                Parent Profile
            </h1>
            <form onSubmit={handleSaveProfile} className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                        Personal Information
                    </h2>
                    <div className="flex flex-col items-center space-y-4 mb-6">
                        <div className="relative w-28 h-28">
                            <img
                                src={editedProfile.image}
                                alt="Profile Preview"
                                className="w-28 h-28 rounded-full object-cover border-4 border-blue-200 dark:border-blue-700"
                            />
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleProfilePicChange}
                                className="hidden"
                                accept="image/*"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleEditPicClick}
                            className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline"
                        >
                            <Edit className="h-4 w-4" />
                            <span>Edit Profile Picture</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={editedProfile.name}
                                onChange={handleParentChange}
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={editedProfile.email}
                                onChange={handleParentChange}
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={editedProfile.phone}
                                onChange={handleParentChange}
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Relationship to Child
                            </label>
                            <select
                                id="relationship"
                                name="relationship"
                                value={editedProfile.relationship}
                                onChange={handleParentChange}
                                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-900 dark:text-white"
                            >
                                <option value="">Select Relationship</option>
                                <option value="Father">Father</option>
                                <option value="Mother">Mother</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                        Children Information
                    </h2>
                    <div className="space-y-4">
                        {editedProfile.children.map((child, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-medium text-gray-800 dark:text-white">Child {index + 1}</h3>
                                    <button type="button" onClick={() => removeChild(index)} className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200">
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor={`childName-${index}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id={`childName-${index}`}
                                            name="childName"
                                            value={child.childName}
                                            onChange={(e) => handleChildChange(index, e)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={`schoolAttending-${index}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            School Attending
                                        </label>
                                        <input
                                            type="text"
                                            id={`schoolAttending-${index}`}
                                            name="schoolAttending"
                                            value={child.schoolAttending}
                                            onChange={(e) => handleChildChange(index, e)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={`childAcademicLevel-${index}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Academic Level
                                        </label>
                                        <select
                                            id={`childAcademicLevel-${index}`}
                                            name="childAcademicLevel"
                                            value={child.childAcademicLevel}
                                            onChange={(e) => handleChildChange(index, e)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                                        >
                                            <option value="">Select Level</option>
                                            {academicLevels.map(level => (
                                                <option key={level} value={level}>{level}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor={`childGender-${index}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Gender
                                        </label>
                                        <select
                                            id={`childGender-${index}`}
                                            name="gender"
                                            value={child.gender}
                                            onChange={(e) => handleChildChange(index, e)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button type="button" onClick={addChild} className="mt-4 flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-sm font-medium">
                        <PlusCircle className="h-5 w-5 mr-1" /> Add another child
                    </button>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-300">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ParentProfile;
