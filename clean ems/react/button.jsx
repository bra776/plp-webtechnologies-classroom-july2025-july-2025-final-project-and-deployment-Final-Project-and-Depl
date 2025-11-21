import React from 'react'
const VARIANTS = { primary: 'bg-blue-600 text-white hover:bg-blue-700', secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300', danger: 'bg-red-600 text-white hover:bg-red-700' }
export default function Button({ children, variant='primary', className='', ...props }) {
  return <button className={`px-4 py-2 rounded-md transition-shadow focus:outline-none ${VARIANTS[variant] || VARIANTS.primary} ${className}`} {...props}>{children}</button>
}