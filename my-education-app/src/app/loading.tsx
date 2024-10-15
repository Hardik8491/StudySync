import { BookAIcon } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center gap-2 justify-center w-full h-screen text-primary '>
     <span>
        <BookAIcon/>
     </span>
     <span className='text-2xl font-bold'>Loading ...</span>
    </div>
  )
}

export default Loading