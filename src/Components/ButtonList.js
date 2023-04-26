import React from 'react'
import Button from './Button'

const list=["All","Gamming","Music","News","Comedy","Computer ","All","Gamming","Music","News","Comedy"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((btn , index)=>{
       return <Button key={index} name={btn}/> 
       
       
      })}
    </div>
  )
}

export default ButtonList
