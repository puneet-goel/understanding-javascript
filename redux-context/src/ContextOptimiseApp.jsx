import React from 'react'
import Parent1 from './context-optimise-components/Parent1/Parent1'
import Parent2 from './context-optimise-components/Parent2/Parent2'
import { ContextProvider } from './contexts/counterContext'

const ContextOptimiseApp = () => {
	return (
		<ContextProvider>
			<div>
				<h1>Context optimise test</h1>
				<Parent1 />
				<Parent2 />
			</div>
		</ContextProvider>
	)
}

export default ContextOptimiseApp
