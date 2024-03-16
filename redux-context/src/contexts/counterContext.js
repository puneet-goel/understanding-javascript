import React, { useState, createContext } from 'react'

export const CounterContext = createContext()

export const ContextProvider = ({ children }) => {
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
			{children}
		</CounterContext.Provider>
	)
}
