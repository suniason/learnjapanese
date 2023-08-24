import React from 'react'

interface SidebarProps {
  isHidden: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ isHidden }) => {
  return (
    <div
      className={`${
        isHidden ? '-translate-x-full overflow-hidden w-0' : 'translate-x-0 w-fit'
      } w-fit text-white h-full px-3 py-2 bg-slate-800 transition-all`}
    >
      <div className='text-2xl text-center px-4 py-2 font-bold'>Learn Japanese</div>
      <div className={`grid py-2 text-md font-semibold`}>
        <p className='px-8 py-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-all cursor-pointer'>
          Overview
        </p>
        <p className='px-8 py-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-all cursor-pointer'>
          Japanese Characters
        </p>
        <p className='px-8 py-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-all cursor-pointer'>
          Common Phrases
        </p>
      </div>
    </div>
  )
}

export default Sidebar
