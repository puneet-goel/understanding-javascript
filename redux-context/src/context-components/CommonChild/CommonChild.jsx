import { useContext } from 'react'
import { CounterContext } from '../../ContextApp'

const CommonChild = ({ parent }) => {
	const { counter } = useContext(CounterContext)

	console.log('Common Child ' + parent)
	return (
		<div>
			CommonChild of {parent} {counter}
		</div>
	)
}

export default CommonChild
