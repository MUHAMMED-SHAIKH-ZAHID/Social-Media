import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import {  clearNotification } from '../Redux/features/PostSlice';

const Notifications = ({setToggle}) => {

  const dispatch = useDispatch();
  const details = useSelector(state=> state.post?.currentUserDetails?.notification) 
  const [refresh,setRefresh] = useState(false)
 
  
  console.log(details,"the details in the redux component ");

  const Notificationclear =()=>{
    setRefresh(true)
    dispatch(clearNotification())
    setToggle(false)

    let deletenotification = useSelector(state => state?.post?.deletenotification)
    deletenotification()
    console.log("after clearing notification in and clearing in redux");
  }
  useEffect(()=>{
  
  },[refresh])

 
  return (
    <>
    <div className='max-h-full overflow-y-auto scrollbar-thin m-2'>
    <div className='flex justify-center items-center p-2 sticky top-0 mb-2 text-white  rounded-lg bg-slate-500 text-lg font-medium '>Notifications 
     <button onClick={Notificationclear} className=' ml-auto'>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-700 btn">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

     </button>
    </div>
    <div className=' '>
      {details?.map((item,i)=>{
      return (<>
        <div key={item?.time} className='flex justify-around dark:bg-black bg-zinc-300 rounded-lg p-2 mb-2 hover:translate-y-1  duration-500'>
          <div className='flex justify-start'>
         <img src={item?.profilepic} alt='profilepic' className='rounded-full w-10 h-10' />
          </div>
          <div className='pl-3'>
          <p className='flex  text-xs break-normal '>{item?.message}</p>

          <span className='text-xs text-gray-500 '><Moment fromNow>{item?.time}</Moment></span>
          </div>
          <div className='flex ml-5'>
         <img src={item?.postpic} alt='profilepic' className='h-10 w-10   object-cover  ' />
          </div>
        </div>
        </>
         )
    }) }</div>
    
     </div>
    </>
  )
}

export default Notifications