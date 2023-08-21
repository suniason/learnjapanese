import React from 'react'
import * as ReactDOM from 'react-dom'
// import Home from './pages/home'
import Dashboard from './pages/dashboard'

function render() {
  ReactDOM.render(
    <div className='flex w-full'>
      <Dashboard />
    </div>,
    document.body
  )
}

render()
