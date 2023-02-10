import React from 'react'

const Modal = ({visible, onClose ,id,content}) => {
  if(!visible) return null; 
  const handleOnClose = (e)=>{
    if(e.target.id === id) onClose()
  }
  return (
    <div id={id} onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center item-center z-[999]'>
        <div className='bg-white p-2 rounded lg:w-1/3 w-full mx-2 pb-6 px-4 my-auto'>
          <div  className='flex justify-end'>
            
        <svg id={id} onClick={handleOnClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600 btn">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
          </div>

             {content}
        </div>
    </div>
  )
}

export default Modal