import React, { useState } from 'react'
import Sidebar from './components/sidebar'
import Core from './components/core'
import MenuTick from './components/menutick'

const Dashboard: React.FC = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true)
  const [view, setView] = useState<string>('overview')
  return (
    <div className='flex min-w-full max-w-full h-screen'>
      <Sidebar isHidden={isHidden} setView={setView} />
      <MenuTick isHidden={isHidden} setIsHidden={setIsHidden} />
      <Core view={view} />
    </div>
  )
}

export default Dashboard
