import CommonChild from '../CommonChild/CommonChild'
import Child1 from './Child1/Child1'
import { useContext } from 'react'
import { CounterContext } from '../../contexts/counterContext'

const Parent1 = () => {
	const { counter, updateCounter } = useContext(CounterContext)

	const handleClick = () => {
		updateCounter()
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
