import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from './ThemeContext';
const ThemeToggle = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle theme">
      {theme === 'light' ? <MoonIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" /> : <SunIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />}
    </button>;
};
export default ThemeToggle;