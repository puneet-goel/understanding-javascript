import React, { useState, createContext } from 'react'
import Parent1 from './context-components/Parent1/Parent1'
import Parent2 from './context-components/Parent2/Parent2'

export const CounterContext = createContext()

const ContextApp = () => {
	const [counter, setCounter] = useState(0)
	const [counter2, setCounter2] = useState(0)

	const updateCounter = () => {
		setCounter((prev) => prev + 1)
	}

	const updateCounter2 = () => {
		setCounter2((prev) => prev + 1)
	}

	return (
		<CounterContext.Provider
			value={{ counter, counter2, updateCounter, updateCounter2 }}
		>
			<div>
				<h1>Context test</h1>
				<Parent1 />
				<Parent2 />
			</div>
		</CounterContext.Provider>
	)
}

export default ContextApp
