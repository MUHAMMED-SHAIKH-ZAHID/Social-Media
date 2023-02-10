import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { adminSinglePost } from '../../Redux/features/AdminSlice';


const PostComponent = ({Post , setChange}) => {

  const[refresh,setRefresh] = useState(false)
  const [Show,SetShow]= useState(false)
  console.log(Post,"user in the saved page of my projecct");
  
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const Singlepost =(id)=>{
    console.log("singlepost clicked",id);
    dispatch(adminSinglePost(id)).then((res)=>{
      navigate ('/admin/singlePost')
      setChange(state=>!state)
      setRefresh(state=>!state)
    })
  }
    // useEffect(()=>{
    //   dispatch(getuser())
    // },[refresh])
    
console.log(Post,"its the post in the admin");
  return (
    <div>
      <div className='flex py-9 px-5'>Post
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
</div>

<div className=" grid grid-cols-5 gap-3">
  {/* <div className={``} >{saved.length}</div> */}
  {Post?.map((Post)=>{
    return(
    <div key={Post._id} onClick={()=>{  Singlepost(Post?._id) }} className="relative grop cursor-pointer hover:opacity-90 group/item">
       <div className='absolute top-0 left-0 h-full w-full  flex items-center justify-center invisible hover:bg-transparent text-white group-hover/item:visible'>
                  
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className={ "w-5 h-5 fill-red-500 " }
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                     />
                   </svg>
                   <span className='flex pl-1 text-sm text-white'>{Post?.likes?.length}</span>
 
                   <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pl-2 w-5.5 h-5">
   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
 </svg>
 <span className='flex pl-1 text-sm text-white'>{Post?.comments?.length}</span>
 
                   </div>
    <img
    src={Post?.image}
   
    className="object-cover  w-full aspect-square "
    alt=""
  />
  </div>
  )
  })}
</div>
      
    </div>
  )
}

export default PostComponent

