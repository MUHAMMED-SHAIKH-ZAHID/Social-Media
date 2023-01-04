import React from 'react'

const Modal = ({visible, onClose ,id,content}) => {
  if(!visible) return null; 
  const handleOnClose = (e)=>{
    if(e.target.id === id) onClose()
  }
  return (
    <div id={id} onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center item-center '>
        <div className='bg-white p-2 rounded lg:w-1/3   my-auto'>
             {content}
        </div>
    </div>
  )
}

export default Modal