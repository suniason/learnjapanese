import React, { useState } from 'react'
import Sidebar from './components/sidebar'
import Core from './components/core'
import MenuTick from './components/menutick'

const Dashboard: React.FC = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true)
  const [view, setView] = useState<string>('overview')
  return (
    <div className='flex w-full h-screen'>
      <Sidebar isHidden={isHidden} setView={setView} />
      <div className='w-full h-screen overflow-y-scroll'>
        <MenuTick isHidden={isHidden} setIsHidden={setIsHidden} />
        <Core view={view} />
      </div>
    </div>
  )
}

export default Dashboard
