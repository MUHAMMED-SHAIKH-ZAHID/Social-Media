import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deletepost } from '../Redux/features/PostSlice'

const PostDelete = ({setShowMyModal,id,setIsPOp,dispatches,content,Navigateto}) => {
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const handledelete =() =>{
        console.log(id,dispatches,"delete");
        dispatch(dispatches(id))
        setShowMyModal(false)
        setIsPOp("")
        navigate(Navigateto)
    }
    const handleCancel=()=>{
        setShowMyModal(false)
        setIsPOp("")
    }
  return (
    <div>
        <div className='bg-slate-100 p-10'>
            <p className='text-black font-semibold flex justify-center items-center mx-auto'>{content} </p>
            <div className='flex justify-evenly items-center mt-2 text-white'>
                <div onClick={handledelete} className='bg-red-600 p-2 rounded-xl cursor-pointer  '>Yes</div>
                <div onClick={handleCancel} className='bg-black p-2 rounded-xl cursor-pointer'>No</div>
            </div>
        </div>
    </div>
  )
}

export default PostDelete