import React, { useState } from 'react'

interface FlashcardProps {
  prompt: string
  response: string
}

const Flashcard: React.FC<FlashcardProps> = ({ prompt, response }) => {
  const [isDefault, setIsDefault] = useState<boolean>(false)
  return <div>Flashcard</div>
}

export default Flashcard
