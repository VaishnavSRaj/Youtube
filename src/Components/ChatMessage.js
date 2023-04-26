import React from 'react'

const ChatMessage = ({name , message}) => {
  return (
    <div className='p-3 flex items-center shadow-sm'>
      <img
          alt="logo"
          className="h-8 mx-2"
          src="https://e7.pngegg.com/pngimages/7/618/png-clipart-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-thumbnail.png"
        />
        <span className='font-semibold'>{name} :</span>
        <span className='px-2'>{message}</span>
    </div>
  )
}

export default ChatMessage
