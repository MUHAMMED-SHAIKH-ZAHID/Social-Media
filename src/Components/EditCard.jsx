import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Editpost } from '../Redux/features/PostSlice'

const EditCard = ({setShowMyModal,image,caption,id}) => {
    const [text,setText]=useState("")
    const dispatch=useDispatch()
    const handleChange=(e)=>{
       setText(e.target.value)
    }

    useEffect(()=>{
       setText(caption)
    },[caption])

    const saveChanges=()=>{
      setShowMyModal(false)
      if(text !== ""){
       const data={text:text,id:id}
        dispatch(Editpost(data)).then(()=>{
        })
      }
    }

  return (
    <div className='text-black xl:flex justify-center items-center'>
    <img className='xl:h-52  pr-2' src={image} alt='' />
    <input
         
          className="grow p-3 h-14  text-black border-black"
          value={text}
          onChange={handleChange}
          placeholder={`Add a Caption to the post`}
        />
        <button onClick={saveChanges} className='bg-blue-600  hover:scale-125 cursor-pointer
        transition-all duration-150 ease-out text-white p-2 rounded-md'>Change</button>
    </div>
  )
}

export default EditCard
