import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MemoryRouter as Router } from 'react-router-dom'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import App from './App'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
