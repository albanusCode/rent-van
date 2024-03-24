import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Price = () => {
  const { van } = useOutletContext();
  return (
    <div className='flex flex-col'>
        {van ? (
          <div className='flex justify-start pb-28'>
            <h3 className='font-bold text-gray-800'>Price: <span className='font-normal'>${van.price}/day</span></h3>
          </div>
        ): <div>Loading</div>}
    </div>
  )
}

export default Price