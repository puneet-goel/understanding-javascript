import CommonChild from '../CommonChild/CommonChild'
import Child1 from './Child1/Child1'
import { useSelector, useDispatch } from 'react-redux'
import { updateCounter } from '../../slices/slice1'

const Parent1 = () => {
	const counter = useSelector((state) => state.counter)
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(updateCounter())
	}

	console.log('Parent1')
	return (
		<div>
			<span>Parent1</span> <button onClick={handleClick}>{counter}</button>
			<Child1 />
			<CommonChild parent='Parent1' />
		</div>
	)
}

export default Parent1
