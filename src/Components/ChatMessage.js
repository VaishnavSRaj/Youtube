import React from 'react'
import{FaUserCircle} from "react-icons/fa"

const ChatMessage = ({name , message}) => {
  return (
    <div className='p-2 gap-2 flex items-center shadow-sm'>
     <FaUserCircle className="text-2xl" />
        <span className=' text-sm font-semibold'>{name} :</span>
        <span className=' text-sm  break-all px-2'>{message}</span>
    </div>
  )
}

export default ChatMessage
