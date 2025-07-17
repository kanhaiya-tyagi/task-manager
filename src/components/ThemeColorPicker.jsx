import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'

const ThemeColorPicker = () => {
    const {state, dispatch} = useContext(ThemeContext)

    const colors = ['blue', 'green', 'purple', 'orange', 'teal'];

    const handleColorChange = (color) => {
        dispatch({ type: 'SET_COLOR', payload: color });
    };

    return (
        <div className="mt-6">
        <p className="mb-2 font-semibold">Select Theme Color:</p>
        <div className="flex gap-3">
            {colors.map((color) => (
            <div
                key={color}
                className={`w-8 h-8 rounded-full cursor-pointer border-2 ${color === state.themeColor ? 'border-black' : 'border-white'} hover:opacity-80 transition`}
                style={{backgroundColor: color}}
                title={color}
                onClick={() => handleColorChange(color)}
            ></div>
            ))}
        </div>
        </div>
    )
    }

export default ThemeColorPicker