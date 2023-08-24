import React, { useState } from 'react'
import hiragana from '../../jsonfile/hiragana.json'
import katakana from '../../jsonfile/katakana.json'
import Charcard from './charcard'

const Characters: React.FC = () => {
  const [section, setSection] = useState<string>('hiragana')

  return (
    <div className='flex justify-center min-w-full max-w-full text-white p-5'>
      <div>
        <div className='grid grid-cols-2 text-center mb-3'>
          <p
            className={`text-2xl font-bold cursor-pointer mx-4 p-1 transition-all ${
              section === 'hiragana' ? 'bg-white bg-opacity-10' : ''
            }`}
            onClick={() => setSection('hiragana')}
          >
            Hiragana
          </p>
          <p
            className={`text-2xl font-bold cursor-pointer mx-4 p-1 transition-all ${
              section === 'katakana' ? 'bg-white bg-opacity-10' : ''
            }`}
            onClick={() => setSection('katakana')}
          >
            Katakana
          </p>
        </div>
        {section === 'hiragana' ? (
          <div className='flex text-center justify-center'>
            {hiragana.map((value, key) => (
              <div key={key}>
                <p>{value.group}</p>
                <section className='grid'>
                  {value.characters.map((character, key) => (
                    <Charcard key={key} jchar={character.japanese} echar={character.english} />
                  ))}
                </section>
              </div>
            ))}
          </div>
        ) : (
          <div className='flex text-center justify-center'>
            {katakana.map((value, key) => (
              <div key={key}>
                <p>{value.group}</p>
                <section className='grid'>
                  {value.characters.map((character, key) => (
                    <Charcard key={key} jchar={character.japanese} echar={character.english} />
                  ))}
                </section>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Characters
