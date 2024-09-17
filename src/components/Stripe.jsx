import React from 'react'

const Stripe = ({data}) => {
  return (
    <div className='w-[16.66%] justify-between items-center flex px-4 border-t-[1px] border-r-[1px] border-b-[1px] border-b-zinc-200 py-4 '>
        <img src={data.url} className='7' alt="" />
        <span>{data.number}</span>
      
    </div>
  )
}

export default Stripe