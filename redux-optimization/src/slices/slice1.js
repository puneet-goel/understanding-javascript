import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		counter: 0,
		counter2: 0
	},
	reducers: {
		updateCounter: (state, action) => {
			return {
				...state,
				counter: state.counter + 1
			}
		},
		updateCounter2: (state, action) => {
			return {
				...state,
				counter2: state.counter2 + 1
			}
		}
	}
})

// this is for dispatch
export const { updateCounter, updateCounter2 } = counterSlice.actions

// this is for configureStore
export default counterSlice.reducer
