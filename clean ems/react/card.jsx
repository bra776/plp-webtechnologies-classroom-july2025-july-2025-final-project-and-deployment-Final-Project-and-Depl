export default function Card({ children, className='' }) {
  return <div className={`p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800 ${className}`}>{children}</div>
}