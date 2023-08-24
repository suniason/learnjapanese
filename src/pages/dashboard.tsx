import React, { useState } from 'react'
import Sidebar from './components/sidebar'
import Core from './components/core'
import MenuTick from './components/menutick'

const Dashboard: React.FC = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true)
  return (
    <div className='flex min-w-full h-screen'>
      <Sidebar isHidden={isHidden} />
      <MenuTick isHidden={isHidden} setIsHidden={setIsHidden} />
      <Core />
    </div>
  )
}

export default Dashboard
