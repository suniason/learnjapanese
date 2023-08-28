import React from 'react'
import Characters from './characters'
import Overview from './overview'

interface CoreProps {
  view: string
}

const Core: React.FC<CoreProps> = ({ view }) => {
  let body
  if (view === 'overview') {
    body = <Overview />
  } else if (view === 'character') {
    body = <Characters />
  } else if (view === 'phrases') {
    body = <div></div>
  }

  return <div className='w-full'>{body}</div>
}

export default Core
