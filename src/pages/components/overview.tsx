import React from 'react'

const Overview: React.FC = () => {
  return (
    <div className='flex flex-col h-full min-w-full max-w-full text-white p-5 relative'>
      <div className='text-center p-5 text-5xl font-bold'>Learn Japanese</div>
      <div>
        <p className='px-10 py-4 text-xl'>
          "Learn Japanese" strives to provide an all-encompassing and interactive platform for
          individuals embarking on their journey to learn the Japanese language. The platform aims
          to offer a carefully structured curriculum that caters to learners of all levels, from
          those taking their first steps into the language to advanced users aspiring for fluency.
        </p>
        <p className='px-10 py-4 text-xl'>
          The app's intention is to offer engaging lessons that encompass vital aspects of Japanese
          language learning, such as vocabulary, grammar, reading, writing, and speaking. These
          lessons aspire to strike a balance between informative content and interactive activities,
          fostering a deeper understanding of the language and inspiring users to maintain their
          motivation throughout their learning journey.
        </p>
        <p className='px-10 py-4 text-xl'>
          Through an assortment of practice tools, the application aims to cater to a wide array of
          learning styles. These tools include interactive quizzes, vocabulary games, listening
          comprehension exercises, and simulations of real-life scenarios. The app's objective is to
          encourage users to actively apply their acquired knowledge, reinforcing their skills in
          practical contexts.
        </p>
      </div>
      <li className='grid w-full text-center p-5 italic'>
        <ul>App Name: Learn Japanese</ul>
        <ul>Creator: Brett Galvez</ul>
        <ul>Version 1.0</ul>
      </li>
    </div>
  )
}

export default Overview
