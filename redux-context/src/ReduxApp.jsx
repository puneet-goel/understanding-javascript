import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Parent1 from './redux-components/Parent1/Parent1'
import Parent2 from './redux-components/Parent2/Parent2'
import counterReducer from './slices/slice1'

export const store = configureStore({
	reducer: {
		counter: counterReducer
	}
})

const ReduxApp = () => {
	return (
		<Provider store={store}>
			<div>
				<h1>Redux test</h1>
				<Parent1 />
				<Parent2 />
			</div>
		</Provider>
	)
}

export default ReduxApp
