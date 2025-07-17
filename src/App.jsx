import { useState, useContext } from 'react'
import { ThemeContext } from './context/themeContext'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Settings from './pages/Settings'

function App() {
	const {state} = useContext(ThemeContext)
	const {mode, themeColor} = state

	const modeClass = mode === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white';
  	// const themeButton = `bg-${themeColor}-600 hover:bg-${themeColor}-700`;

	return (
	<div className={`min-h-screen transition-all duration-300 ${modeClass}`}>
		<nav 
			className="mb-6 py-4 px-6 flex justify-between border-b-2"
		>
			<p className='text-3xl font-bold'>TaskManager</p>
			<div className='flex gap-4 text-lg font-bold underline-offset-2 items-end'>
				<Link to={'/'} className="hover:underline" >Home</Link>
				<Link to={'/settings'}  className="hover:underline" >Setting</Link>
			</div>
		</nav>

		<Routes>
			<Route path='/' element={<Home/>} />
			<Route path='/settings' element={<Settings/>} />
		</Routes>
    </div>
	)
}

export default App
