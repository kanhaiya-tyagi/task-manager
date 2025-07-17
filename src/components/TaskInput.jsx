import {useRef, useContext} from 'react'
import { ThemeContext } from '../context/themeContext'

const TaskInput = ({onAdd}) => {
    const inputRef = useRef()
    const {state} = useContext(ThemeContext)
    const {themeColor} = state

    const handleInput =()=>{
        const value = inputRef.current.value.trim()
        if(!value) return
        onAdd(value)
        inputRef.current.value = ''
    }

    return (
        <div className='w-fit p-8 mx-auto flex gap-4 md:gap-16'>
            <input 
                ref={inputRef}
                type="text" 
                placeholder='Enter a task ..' 
                className='border-2 py-2 px-4 rounded-xl'
            />
            <button 
                className='py-2 px-4 rounded-xl cursor-pointer text-white hoverShadow'
                style={{backgroundColor: themeColor}}
                onClick={handleInput}
            >ADD</button>
        </div>
    )
}

export default TaskInput