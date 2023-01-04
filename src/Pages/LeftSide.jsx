import React, { useState } from 'react'
import Notifications from '../Components/Notifications'
import PostFormCard from '../Components/PostFormCard'
import SidebarData from '../Components/SidebarData'
import UserProfile from '../Components/UserProfile'
import Modal from './Modal'

const LeftSide = () => {
  const [showMyModal,setShowMyModal] = useState(false) 
  const [toggle ,setToggle] = useState(false)

  const handleOnClose = ()=>setShowMyModal(false)
  return (
    <div className={`${toggle ? " w-[3.8rem] " : ""} sidebarContainer `}>
    {/* <div className='absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-glass rounded-full cursor-pointer'
    onClick={()=>{setToggle(!toggle)}}>
      <p className='text-red-800'>X</p>
      </div> */}
      <SidebarData toggle={toggle} setToggle={setToggle}/>
      {toggle && <div className='sidebarContainer2 absolute transition-all duration-700 delay-700'> <Notifications /></div>}
     
      <div className=' mb-auto'>
     
      </div>
      {/* <button onClick={()=>setShowMyModal(true)}>Open Modal</button>
    
      <Modal onClose={handleOnClose} visible={showMyModal} id={"container"} content={<PostFormCard />}>
        <h1>Testing the reusable modal</h1>
      </Modal> */}
    </div>
  )
}

export default LeftSide