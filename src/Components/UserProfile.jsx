import React from 'react'

const UserProfile = ({toggle}) => {
  return (
  
    <div className={`flex gap-5 mt-2 items-center ${toggle ? "bg-dark transition-all duration-300 delay-200" : 
    "bg-white dark:bg-black rounded-xl p-2"} `}>
    <div className="min-w-[2.5rem] h-[2.5rem]">
        <img src="https://picsum.photos/227" alt="" className='w-full h-full rounded-full object-cover'/>
    </div>
    <div className={toggle ? 'opacity-0 delay-200': "truncate"}>
        <h3 className='text-lg'>Shaikh Zahid</h3>
        <span className='text-xs  text-gray-300'>muhdshaikhzahid@gmail.com</span>
    </div>
    </div>
  )
}

export default UserProfile