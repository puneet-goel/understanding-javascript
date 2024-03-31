import { useSelector, useDispatch } from 'react-redux'
import { updateCounter2 } from '../../slices/slice1'

const Child2 = () => {
	const counter2 = useSelector((state) => state.counter.counter2)
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(updateCounter2())
	}

	console.log('Redux Optimize Child2')
	return (
		<div>
			<span>Child2</span>
			<button onClick={handleClick}>{counter2}</button>
		</div>
	)
}

export default Child2
