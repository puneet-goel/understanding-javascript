import { useSelector, useDispatch } from 'react-redux'
import { updateCounter } from '../../slices/slice1'

const Child1 = () => {
	const counter = useSelector((state) => state.counter.counter)
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(updateCounter())
	}

	console.log('Redux Optimize Child1')
	return (
		<div>
			<span>Child1</span>
			<button onClick={handleClick}>{counter}</button>
		</div>
	)
}

export default Child1
