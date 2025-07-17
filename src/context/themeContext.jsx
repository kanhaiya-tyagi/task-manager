import { createContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext()

const storedTheme = JSON.parse(localStorage.getItem('theme'))

const initialState = storedTheme || {
    mode: 'light',
    themeColor: 'blue'
}

function ThemeReducer(state, action){
    switch (action.type) {
        case 'TOGGLE_MODE':
            return{
                ...state,
                mode: state.mode === 'light' ? 'dark' : 'light'
            }
    
        case 'SET_COLOR':
            return{
                ...state,
                themeColor: action.payload
            }
    
        default:
            return state
    }
}

export function ThemeProvider({children}){
    const [state, dispatch] = useReducer(ThemeReducer, initialState)

    useEffect(()=>{
        localStorage.setItem('theme', JSON.stringify(state))
    }, [state])

    return(
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}