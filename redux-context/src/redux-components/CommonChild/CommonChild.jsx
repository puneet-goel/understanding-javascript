import { useSelector } from 'react-redux'

const CommonChild = ({ parent }) => {
	const counter = useSelector((state) => state.counter)

	console.log('Common Child ' + parent)
	return (
		<div>
			CommonChild of {parent} {counter}
		</div>
	)
}

export default CommonChild
