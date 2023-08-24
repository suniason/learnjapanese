import React, { useRef } from 'react'

interface MenuTickProps {
  isHidden: boolean
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>
}
const MenuTick: React.FC<MenuTickProps> = ({ isHidden, setIsHidden }) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const arrowClicked = () => {
    setIsHidden(!isHidden)
  }
  return (
    <div>
      <button
        className='px-2 py-1 rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-all cursor-pointer m-3'
        onClick={arrowClicked}
      >
        <div ref={menuRef} className='transition-all'>
          &#x2630;
        </div>
      </button>
    </div>
  )
}

export default MenuTick
