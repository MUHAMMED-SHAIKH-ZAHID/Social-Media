import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getspecificuser, getuser } from '../Redux/features/PostSlice';

const Chatbox = ({ data, currentuserId,online}) => {
  const dispatch = useDispatch()
  const [userData, setUserData] = useState([])

    const params = {
      userid: {
        id: ""
      }
      
    }
    useEffect(() => {
      params.userid.id = data?.members?.find((id) => id !== currentuserId)
      dispatch(getspecificuser(params.userid.id)).then((res) => {
        setUserData(res.payload)
  
      })
    }, [data,currentuserId])
    console.log(data,"its the userData of the Chatbox");
  return (
    <>
    
   

<div className='border rounded-3xl mt-3 p-2 mx-2 flex hover:opacity-75 cursor-pointer' >
{ online && <div className='rounded-full w-3 h-3 bg-green-400 absolute ml-9 z-10'></div> }
 { <img className='w-14 h-14  rounded-full' src={userData?.profilePicture} alt='' /> }
<p className='p-1'>{userData.username}</p>
<div className='flex justify-end items-end'>
<span className='font-normal text-xs text-gray-400'>{online ? "Online" : "Offline"}</span>
</div>

</div>

    </>
  )
}

export default Chatbox