import React from 'react'

const Marque = ({imageUrl}) => {
  return (
    <div className='w-full flex whitespace-nowrap overflow-hidden gap-10 py-5'>
        {imageUrl.map(item=><img src={item} className='flex-shrink-0'/>)}
        {imageUrl.map(item=><img src={item} className='flex-shrink-0'/>)}
      
    </div>
  )
}

export default Marque
