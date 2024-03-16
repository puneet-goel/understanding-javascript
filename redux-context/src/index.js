import ReactDOM from 'react-dom/client'
import ReduxApp from './ReduxApp'
import ContextApp from './ContextApp'
import ContextOptimiseApp from './ContextOptimiseApp'

const reduxRoot = ReactDOM.createRoot(document.getElementById('redux'))
reduxRoot.render(<ReduxApp />)

const contextRoot = ReactDOM.createRoot(document.getElementById('context'))
contextRoot.render(<ContextApp />)

const contextOptimiseRoot = ReactDOM.createRoot(
	document.getElementById('context-optimise')
)
contextOptimiseRoot.render(<ContextOptimiseApp />)
