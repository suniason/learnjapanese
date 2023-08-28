import React from 'react'

interface CharcardProps {
  jchar: string
  echar: string
}

const Charcard: React.FC<CharcardProps> = ({ jchar, echar }) => {
  return (
    <div className='w-fit px-3 py-2 bg-slate-700 text-center text-lg rounded-md m-2'>
      <div>{jchar}</div>
      <div>{echar}</div>
    </div>
  )
}

export default Charcard
