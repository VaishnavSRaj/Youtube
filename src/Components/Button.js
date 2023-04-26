import React from 'react'

const Button = ({name}) => {
  
  return (
    <div >
      <button className='bg-gray-300 p-2 m-2 px-3 rounded-lg'  >{name}</button>
    </div>
  )
}

export default Button
