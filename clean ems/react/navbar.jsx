import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import Button from   './Button.jsx'
export default function Navbar() {
  const { theme, toggle } = useContext(ThemeContext)
  return (
    <nav className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-bold">MyViteApp</Link>
          <Link to="/tasks" className="text-sm">Tasks</Link>
          <Link to="/api" className="text-sm">API</Link>
        </div>
        <Button variant="secondary" onClick={toggle}>{theme === 'light' ? 'Dark' : 'Light'}</Button>
      </div>
    </nav>
  )
}