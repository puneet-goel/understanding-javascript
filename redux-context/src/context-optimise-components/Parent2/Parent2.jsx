import CommonChild from '../CommonChild/CommonChild'
import Child2 from './Child2/Child2'

const Parent2 = () => {
	console.log('Parent 2')
	return (
		<div>
			<span>Parent2</span>
			<Child2 />
			<CommonChild parent='Parent2' />
		</div>
	)
}

export default Parent2
