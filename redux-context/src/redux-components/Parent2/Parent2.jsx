import CommonChild from '../CommonChild/CommonChild'
import Child2 from './Child2/Child2'
import { useSelector, useDispatch } from 'react-redux'
import { updateCounter2 } from '../../slices/slice1'

const Parent2 = () => {
	const counter2 = useSelector((state) => state.counter.counter2)
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(updateCounter2())
	}

	console.log('Parent2')
	return (
		<div>
			<span>Parent2</span> <button onClick={handleClick}>{counter2}</button>
			<Child2 />
			<CommonChild parent='Parent2' />
		</div>
	)
}

export default Parent2
