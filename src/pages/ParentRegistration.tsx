import React, { useState, ChangeEvent, FormEvent } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';

// Define types for the form data
interface ChildData {
  childName: string;
  childAcademicLevel: string;
}

interface FormData {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  children: ChildData[];
}

const ParentRegistration: React.FC = () => {
    // Academic levels for the child's form
    const academicLevels: string[] = [
        'Primary (P1-P6)',
        'Secondary (S1-S4/5)',
        'Junior College (JC1-JC2)'
    ];
    
    const [formData, setFormData] = useState<FormData>({
        parentName: '',
        parentEmail: '',
        parentPhone: '',
        children: [{
            childName: '',
            childAcademicLevel: ''
        }],
    });

    const handleParentChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleChildChange = (index: number, e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        const newChildren = [...formData.children];
        newChildren[index] = { ...newChildren[index], [name]: value };
        setFormData(prev => ({
            ...prev,
            children: newChildren
        }));
    };

    const addChild = (): void => {
        setFormData(prev => ({
            ...prev,
            children: [...prev.children, {
                childName: '',
                childAcademicLevel: ''
            }]
        }));
    };

    const removeChild = (index: number): void => {
        const newChildren = [...formData.children];
        newChildren.splice(index, 1);
        setFormData(prev => ({
            ...prev,
            children: newChildren
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log('Parent Registration Submitted:', formData);
        alert('Parent registration successful! We will be in touch shortly.');
        
        // Reset form after submission
        setFormData({
            parentName: '',
            parentEmail: '',
            parentPhone: '',
            children: [{
                childName: '',
                childAcademicLevel: ''
            }],
        });
    };

    return (
        <main className="w-full bg-white dark:bg-gray-900 min-h-screen font-sans flex items-center justify-center">
            <section className="py-16 md:py-24 container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="px-6 py-8">
                        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
                            Parent Registration
                        </h1>
                        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                            Register to find the perfect tutor for your child.
                        </p>
                        <form onSubmit={handleSubmit}>
                            {/* Parent Information Section */}
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                                Your Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="md:col-span-2">
                                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Full Name
                                    </label>
                                    <input type="text" id="parentName" name="parentName" value={formData.parentName} onChange={handleParentChange} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" required />
                                </div>
                                <div>
                                    <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Email Address
                                    </label>
                                    <input type="email" id="parentEmail" name="parentEmail" value={formData.parentEmail} onChange={handleParentChange} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" required />
                                </div>
                                <div>
                                    <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Phone Number
                                    </label>
                                    <input type="tel" id="parentPhone" name="parentPhone" value={formData.parentPhone} onChange={handleParentChange} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" />
                                </div>
                            </div>
                            
                            {/* Children Information Section */}
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 mt-8">
                                Child(ren) Information
                            </h2>
                            {formData.children.map((child, index) => (
                                <div key={index} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4 relative">
                                    <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-2">
                                        Child {index + 1}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor={`childName-${index}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Child's Name
                                            </label>
                                            <input type="text" id={`childName-${index}`} name="childName" value={child.childName} onChange={(e) => handleChildChange(index, e)} className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" required />
                                        </div>
                                        <div>
                                            <label htmlFor={`childAcademicLevel-${index}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Academic Level
                                            </label>
                                            <select id={`childAcademicLevel-${index}`} name="childAcademicLevel" value={child.childAcademicLevel} onChange={(e) => handleChildChange(index, e)} className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md dark:text-white" required>
                                                <option value="">Select Level</option>
                                                {academicLevels.map(level => (
                                                    <option key={level} value={level}>
                                                        {level}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    {formData.children.length > 1 && (
                                        <button type="button" onClick={() => removeChild(index)} className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition-colors">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                            ))}
                            <div className="flex justify-end mb-6">
                                <button type="button" onClick={addChild} className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                                    <PlusCircle className="w-5 h-5" />
                                    <span>Add another child</span>
                                </button>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end mt-8">
                                <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                                    Submit Registration
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ParentRegistration;
