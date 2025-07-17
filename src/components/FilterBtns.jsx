import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'

const FilterBtns = ({tasks, filter, setFilter}) => {
    const {state} = useContext(ThemeContext)
    const {mode, themeColor} = state

    return (
        <div className="flex gap-2 mb-12">
            <button
                className={'px-3 py-1 rounded'}
                style={
                    filter==='all'
                    ? {backgroundColor: themeColor, color: 'white'}
                    : {border: `1px solid ${themeColor}`, backgroundColor: 'transparent', color: themeColor}
                }
                onClick={() => setFilter('all')}
            > All &nbsp; {tasks.length}</button>

            <button
                className={'px-3 py-1 rounded'}
                style={
                    filter==='active'
                    ? {backgroundColor: themeColor, color: 'white'}
                    : {border: `1px solid ${themeColor}`, backgroundColor: 'transparent', color: themeColor}
                }
                onClick={() => setFilter('active')}
            > Active &nbsp; {tasks.filter(t=> !t.completed).length}</button>

            <button
                className={'px-3 py-1 rounded'}
                style={
                    filter==='completed'
                    ? {backgroundColor: themeColor, color: 'white'}
                    : {border: `1px solid ${themeColor}`, backgroundColor: 'transparent', color: themeColor}
                }
                onClick={() => setFilter('completed')}
            > Completed &nbsp; {tasks.filter(t=> t.completed).length}</button>

        </div>
    )
}

export default FilterBtns