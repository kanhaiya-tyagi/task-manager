import {useContext} from 'react'
import { ThemeContext } from '../context/themeContext'

const ThemeToggle = () => {
    const {state, dispatch} = useContext(ThemeContext)

    const handleToggle =()=>{
        dispatch({type: 'TOGGLE_MODE'})
    }

    return (
        <button 
            onClick={handleToggle}
            className="border mb-4 px-4 py-2 rounded-lg hover:opacity-80 transition cursor-pointer"
        > Toggle {state.mode === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    )
}

export default ThemeToggle