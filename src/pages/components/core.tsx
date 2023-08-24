import React from 'react'
import Characters from './characters'

interface CoreProps {
  view: string
}

const Core: React.FC<CoreProps> = ({ view }) => {
  let body
  if (view === 'overview') {
    body = <div></div>
  } else if (view === 'character') {
    body = <Characters />
  } else if (view === 'phrases') {
    body = <div></div>
  }

  return <div>{body}</div>
}

export default Core
