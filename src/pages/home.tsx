import React from 'react'

const Home: React.FC = () => {
  return (
    <div className='flex w-full h-screen bg-[#050510] items-center justify-center relative'>
      <main className='text-center text-[#ebebf9] z-10'>
        <div className='text-8xl font-bold m-10'>Learn Japanese</div>
        <div className='text-xl'>
          <i>"Unlock Your Journey to Nihongo Mastery!"</i>
        </div>
        <div className='flex justify-center w-full'>
          <button className='flex m-10 font-semibold text-xl bg-sky-600 py-2 px-10 rounded-full group transition-all'>
            Get Started
            <div className='group-hover:translate-x-2 transition-all'>&#x279C;</div>
          </button>
        </div>
      </main>
      <div className='absolute w-full h-full bottom-0 bg-slate-800 rounded-t-full opacity-50 -z-1'></div>
      <div className='absolute w-full h-full top-0 bg-slate-800 rounded-b-full opacity-50 -z-1'></div>
    </div>
  )
}

export default Home
