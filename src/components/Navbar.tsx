import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import ThemeToggle from './ThemeToggle';

const Navbar = () => {

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

return <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-sm">

<div className="container mx-auto px-4 py-4 flex items-center justify-between">

<Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">

<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">

<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />

</svg>

TutorMarket

</Link>

<div className="flex items-center space-x-4">

<nav className="hidden md:flex space-x-8">

<Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors">

Home

</Link>

<Link to="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors">

Pricing

</Link>

<Link to="/faq" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors">

FAQ

</Link>

<Link to="/testimonials" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors">

Testimonials

</Link>

<Link to="/free-test-papers" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors">

Free Test Papers

</Link>

</nav>

<ThemeToggle />

{/* Mobile menu button */}

<div className="md:hidden">

<button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

</svg>

</button>

</div>

</div>

</div>

{/* Mobile menu */}

{mobileMenuOpen && <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-2">

<div className="container mx-auto px-4 flex flex-col space-y-3">

<Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>

Home

</Link>

<Link to="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>

Pricing

</Link>

<Link to="/faq" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>

FAQ

</Link>

<Link to="/testimonials" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>

Testimonials

</Link>

<Link to="/free-test-papers" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>

Free Test Papers

</Link>

</div>

</div>}

</header>;

};

export default Navbar;
