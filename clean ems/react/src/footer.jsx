import React from 'react'
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full border-t mt-8 bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between text-sm">
        <div>© {year} MyViteApp</div>
        <div className="flex gap-4"><a href="#">Privacy</a><a href="#">Terms</a></div>
      </div>
    </footer>
  )
}