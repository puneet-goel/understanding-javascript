import CommonChild from '../CommonChild/CommonChild'
import Child2 from './Child2/Child2'
import { useContext } from 'react'
import { CounterContext } from '../../ContextApp'

const Parent2 = () => {
	const { counter2, updateCounter2 } = useContext(CounterContext)

	console.log('Parent 2')
	return (
		<div>
			<span>Parent2</span> <button onClick={updateCounter2}>{counter2}</button>
			<Child2 />
			<CommonChild parent='Parent2' />
		</div>
	)
}

export default Parent2
