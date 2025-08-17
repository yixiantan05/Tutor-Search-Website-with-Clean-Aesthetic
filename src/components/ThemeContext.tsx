import React, { useEffect, useState, createContext, useContext } from 'react'
type ThemeContextType = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  useEffect(() => {
    // Apply theme class to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
