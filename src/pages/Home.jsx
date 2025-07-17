import React, { useEffect, useRef, useState } from 'react'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import FilterBtns from '../components/FilterBtns'

const Home = () => {
    const [tasks, setTasks] = useState([])
    const [filter, setFilter] = useState('all')
    const hasLoaded = useRef(false)

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            try {
                const parsed = JSON.parse(storedTasks);
                setTasks(parsed); // setTasks is async — so we wait below
            } catch (e) {
                console.error('❌ Failed to parse saved tasks:', e);
            }
        } else {
            hasLoaded.current = true; // No tasks to load, mark as ready
        }
    }, []);

    useEffect(() => {
        if (!hasLoaded.current && tasks.length > 0) {
            hasLoaded.current = true;
        }
    }, [tasks]);

    useEffect(() => {
        if (hasLoaded.current) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    const addTask=(text)=>{
        setTasks([
            ...tasks,
            {id: Date.now(), text, completed: false}
        ])
    }

    const deleteTask=(id)=>{
        setTasks(tasks.filter((t)=> t.id != id))
    }

    const toggleTask=(id)=>setTasks((prev)=>prev.map((task)=>task.id === id ? { ...task, completed: !task.completed } : task))

    const getFilteredTask =()=>{
        switch(filter){
            case('active'): 
                return tasks.filter((task)=> !task.completed)
            case('completed'):
                return tasks.filter((task)=> task.completed)
            default:
                return tasks
        }
    }
    

    return (
        <div className='w-full '>
            <h2 className='mb-12 font-bold' style={{marginLeft: '4vw', fontSize: '2rem'}}>Home</h2>
            <TaskInput onAdd={addTask} />
            <div className='max-w-3xl px-8 lg:px-0 md:px-0 mx-auto mt-8 pb-16'>
                <FilterBtns tasks={tasks} filter={filter} setFilter={setFilter} />
                <TaskList tasks={getFilteredTask()} onDelete={deleteTask} onToggle={toggleTask} />
            </div>
        </div>
    )
}

export default Home