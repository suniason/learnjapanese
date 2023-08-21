import React, { useRef, useState } from 'react'

const Sidebar: React.FC = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true)
  const arrowRef = useRef<HTMLDivElement>(null)

  const arrowClicked = () => {
    setIsHidden(!isHidden)
    if (arrowRef.current) arrowRef.current.classList.toggle('rotate-180')
  }

  return (
    <div className='w-fit text-white h-full px-3 py-2 bg-slate-800'>
      <button
        className='px-2 py-1 rounded-md hover:bg-white hover:bg-opacity-10 transition-all cursor-pointer'
        onClick={arrowClicked}
      >
        <div ref={arrowRef} className='transition-all'>
          &#x27A4;
        </div>
      </button>

      <div className={`${isHidden ? 'hidden' : 'grid'} py-2 text-lg font-semibold`}>
        <p className='px-8 py-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-all cursor-pointer'>
          Overview
        </p>
        <p className='px-8 py-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-all cursor-pointer'>
          Common Phrases
        </p>
      </div>
    </div>
  )
}

export default Sidebar
