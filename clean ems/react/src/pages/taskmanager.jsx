import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Button from '../components/Button'
import Card from '../components/Card'
export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('All')
  const addTask = () => { if (!text.trim()) return; setTasks([{id: Date.now(), text: text.trim(), completed: false}, ...tasks]); setText('') }
  const toggleComplete = id => setTasks(tasks.map(t => t.id === id ? {...t, completed: !t.completed} : t))
  const deleteTask = id => setTasks(tasks.filter(t => t.id !== id))
  const filtered = tasks.filter(t => filter==='All'?true:filter==='Active'?!t.completed:t.completed)
  return (
    <div className="space-y-4">
      <Card>
        <div className="flex gap-2"><input className="flex-1 p-2 rounded border" value={text} onChange={e=>setText(e.target.value)} placeholder="Add task..." /><Button onClick={addTask}>Add</Button></div>
        <div className="mt-3 flex gap-2">{['All','Active','Completed'].map(f=><Button key={f} variant={filter===f?'primary':'secondary'} onClick={()=>setFilter(f)}>{f}</Button>)}</div>
      </Card>
      <div className="grid gap-3">{filtered.length===0?<Card>No tasks</Card>:filtered.map(task=><Card key={task.id} className="flex items-center justify-between"><div className="flex items-center gap-3"><input type="checkbox" checked={task.completed} onChange={()=>toggleComplete(task.id)} /><div className={task.completed?'line-through text-gray-400':''}>{task.text}</div></div><div className="flex gap-2"><Button variant="danger" onClick={()=>deleteTask(task.id)}>Delete</Button></div></Card>)}</div>
    </div>
  )
}