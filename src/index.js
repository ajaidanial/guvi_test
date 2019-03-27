import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './app'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
