import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Photos = () => {
  const {van} = useOutletContext();
  return (
    <div className='flex flex-col'>
        {van ? (
          <div className=''>
            <img src={van.imageUrl} alt="" width={150} className='flex justify-end rounded-md'/>
          </div>
        ): <div>Loading</div>}
    </div>
  )
}

export default Photos