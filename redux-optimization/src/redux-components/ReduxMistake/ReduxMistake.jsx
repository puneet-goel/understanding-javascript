import Child1 from './Child1'
import Child2 from './Child2'

const ReduxMistake = () => {
	console.log('Redux Mistake')
	return (
		<div>
			<h1>Redux Mistake</h1>
			<Child1 />
			<br />
			<Child2 />
		</div>
	)
}

export default ReduxMistake
