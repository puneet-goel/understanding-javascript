import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import ReduxMistake from './redux-components/ReduxMistake/ReduxMistake'
import ReduxOptimize from './redux-components/ReduxOptimize/ReduxOptimize'
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
				<ReduxMistake />
				<ReduxOptimize />
			</div>
		</Provider>
	)
}

export default ReduxApp
