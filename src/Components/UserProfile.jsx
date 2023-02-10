import React from 'react'
import { useSelector } from 'react-redux'

const UserProfile = ({toggle}) => {
  const profile = useSelector(state=> state?.post?.currentUserDetails)
  return (
  
    <div className={`flex gap-5 mt-2 items-center ${toggle ? "bg-dark transition-all duration-300 delay-200" : 
    "bg-white dark:bg-black   p-3"} `}>
    <div className="min-w-[2.5rem] h-[2.5rem]">
        <img src={profile?.profilePicture} alt="" className='w-full h-full rounded-full object-cover'/>
    </div>
    <div className={toggle ? 'opacity-0 delay-200': "truncate"}>
        <h3 className='text-lg'>{profile?.username}</h3>
        <span className='text-xs  text-gray-300'>{profile?.email}</span>
    </div>
    </div>
  )
}

export default UserProfile