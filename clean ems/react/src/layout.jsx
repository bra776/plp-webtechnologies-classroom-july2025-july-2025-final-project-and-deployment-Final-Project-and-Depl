import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer.jsx'
export default function Layout({ children }) {
  return <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"><Navbar /><main className="flex-1 max-w-6xl mx-auto px-4 py-6">{children}</main><Footer /></div>
}