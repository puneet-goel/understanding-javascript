import React, { useState, createContext } from 'react'

export const CounterContext = createContext()

export const ContextProvider = ({ children }) => {
	const [counter, setCounter] = useState(0)
	const updateCounter = () => {
		setCounter((prev) => prev + 1)
	}

	return (
		<CounterContext.Provider value={{ counter, updateCounter }}>
			{children}
		</CounterContext.Provider>
	)
}
