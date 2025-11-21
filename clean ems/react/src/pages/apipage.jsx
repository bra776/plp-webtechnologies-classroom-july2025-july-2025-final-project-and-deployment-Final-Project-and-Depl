import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
export default function ApiPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const perPage = 10
  useEffect(()=>{let cancelled=false; async function fetchData(){setLoading(true);setError(null);try{const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`);if(!res.ok)throw new Error('Failed');const json=await res.json();if(!cancelled)setData(prev=>page===1?json:[...prev,...json])}catch(err){if(!cancelled)setError(err.message)}finally{if(!cancelled)setLoading(false)}} fetchData(); return ()=>{cancelled=true}},[page])
  const filtered=data.filter(d=>d.title.includes(query)||d.body.includes(query))
  return (<div className="space-y-4">
    <h1 className="text-2xl font-bold">API Data (JSONPlaceholder)</h1>
    <Card><div className="flex gap-2"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search titles or body" className="flex-1 p-2 rounded border" /><Button onClick={()=>{setPage(1);setData([])}}>Refresh</Button></div></Card>
    {filtered.map(item=><Card key={item.id} className="hover:shadow-md transition"><h3 className="font-semibold">{item.title}</h3><p className="text-sm text-gray-600 dark:text-gray-300">{item.body}</p></Card>)}
    {loading && <Card>Loading...</Card>}
    {error && <Card className="text-red-600">Error: {error}</Card>}
    <div className="flex gap-2"><Button onClick={()=>setPage(p=>Math.max(1,p-1))}>Prev</Button><div className="px-4 py-2">Page {page}</div><Button onClick={()=>setPage(p=>p+1)}>Next</Button></div>
  </div>)
}