import { useContext } from 'react'
import { CounterContext } from '../../ContextApp'

const CommonChild = ({ parent }) => {
	const { counter, counter2 } = useContext(CounterContext)

	console.log('Common Child ' + parent)
	return (
		<div>
			CommonChild of {parent} 1: {counter} 2: {counter2}
		</div>
	)
}

export default CommonChild
