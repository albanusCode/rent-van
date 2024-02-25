import React from 'react'

const Button = ({title}) => {
  return (
    <button 
    type='button' 
    className={`${
        title === 'luxury' ? 'bg-gray-800 text-gray-200 py-2' : 
        title === 'rugged' ? 'bg-green-800 text-gray-200 py-2' : 
        title === 'simple' ? 'bg-orange-500 text-gray-200 py-2' : 
        'bg-orange-500 text-gray-200'
    } rounded-lg sm:w-1/4 w-3/4 py-3 hover:bg-orange-700`}
    >
        {title}
    </button>
  )
}

export default Button