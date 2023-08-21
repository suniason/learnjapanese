import React from 'react'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Core from './components/core'

const Dashboard: React.FC = () => {
  return (
    <div className='flex min-w-full flex-col h-screen'>
      <Navbar />
      <div className='flex h-full max-w-full'>
        <Sidebar />
        <Core />
      </div>
    </div>
  )
}

export default Dashboard
