import React from 'react'


const TaskList = ({tasks, onDelete, onToggle}) => {
    return (
        <ul className="space-y-2">
            {tasks.map((task) => {
                return(
                    <li
                    key={task.id}
                    className="flex justify-between items-center border rounded px-3 py-2 hoverShadow"
                    >
                        <span
                            onClick={() => onToggle(task.id)}
                            className={`cursor-pointer`}
                            style={task.completed?{textDecoration:'line-through', cursor: 'disable'}:{cursor: 'pointer'}}
                        >{task.text}</span>
                        
                        <button
                            onClick={() => onDelete(task.id)}
                            className="text-red-500 hover:text-red-700 transition font-extrabold"
                        > ✕ </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default TaskList
