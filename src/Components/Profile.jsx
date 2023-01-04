import React from 'react'

const Profile = () => {
  return (
    <div>
        <div className='flex pt-2 h-screen'>
            <div className='rounded-3xl p-6  w-[500px] h-[250px] dark:bg-black bg-zinc-200'>
            <div className='flex justify-between items-center'>
              <img src='https://picsum.photos/227' alt='profile' className='w-24 h-24 rounded-full' />
              <div className="grid ">
               <span className='font-semibold text-lg mx-auto'>23 </span>
               <span className='font-thin text-lg '>Post</span>
              </div>
              <div className="grid">
               <span className='font-semibold text-lg mx-auto'>1290</span>
               <span className='font-thin text-lg '>Followers</span>
              </div>
              <div className="grid">
               <span className='font-semibold text-lg mx-auto'>789 </span>
               <span className='font-thin text-lg '>Following</span>
              </div>
            </div>
            <div className="pt-5">
            <div className="grid">
               <span className='font-normal text-base '>شيخ زاحد</span>
               <span className='font-extralight text-lg'> </span>
              </div>
              <div className='flex justify-center mt-5'>
                <button className='dark:bg-[#302d2d] text-white px-40 rounded-md bg-[#a2a0a0] p-1 hover:bg-zinc-300 '>Edit Profile</button>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Profile