import React, { useState, createContext } from 'react'
import Parent1 from './context-components/Parent1/Parent1'
import Parent2 from './context-components/Parent2/Parent2'

export const CounterContext = createContext()

const ContextApp = () => {
	const [counter, setCounter] = useState(0)
	const updateCounter = () => {
		setCounter((prev) => prev + 1)
	}

	return (
		<CounterContext.Provider value={{ counter, updateCounter }}>
			<div>
				<h1>Context test</h1>
				<Parent1 />
				<Parent2 />
			</div>
		</CounterContext.Provider>
	)
}

export default ContextApp
