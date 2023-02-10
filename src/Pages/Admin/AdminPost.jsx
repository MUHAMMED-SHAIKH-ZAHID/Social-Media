import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AllPost } from '../../Redux/features/AdminSlice'
import PostComponent from './PostComponent'


const AdminPost = () => {
  const Post = useSelector(state=>state?.admin?.AllPosts)
  const [change,setChange]=useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(AllPost())
    },[change])
 
  return (
    <div className='h-screen overflow-y-scroll scrollbar-hide p-2 '>
      <PostComponent Post={Post} setChange={setChange}/>
    </div>
  )
}

export default AdminPost