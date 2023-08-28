import React from 'react'

interface SidebarProps {
  isHidden: boolean
  setView: React.Dispatch<React.SetStateAction<string>>
}

const Sidebar: React.FC<SidebarProps> = ({ isHidden, setView }) => {
  return (
    <div
      className={`${
        isHidden ? '-translate-x-full overflow-hidden w-0 ' : 'translate-x-0 px-3 py-2'
      } text-white h-screen transition-transform bg-slate-800`}
    >
      <div className='text-2xl text-center px-4 font-bold'>Learn Japanese</div>
      <div className={`grid py-2 text-md font-semibold`}>
        <p
          className='px-8 py-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-all cursor-pointer'
          onClick={() => setView('overview')}
        >
          Overview
        </p>
        <p
          className='px-8 py-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-all cursor-pointer'
          onClick={() => setView('character')}
        >
          Japanese Characters
        </p>
        <p
          className='px-8 py-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-all cursor-pointer'
          onClick={() => setView('phrase')}
        >
          Common Phrases
        </p>
      </div>
    </div>
  )
}

export default Sidebar
