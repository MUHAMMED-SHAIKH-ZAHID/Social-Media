import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Navbottom from '../Components/Navbottom'
import NavTop from '../Components/NavTop'
import Notifications from '../Components/Notifications'
import PostFormCard from '../Components/PostFormCard'
import SidebarData from '../Components/SidebarData'
import UserProfile from '../Components/UserProfile'
import { getuser, refresh } from '../Redux/features/PostSlice'
import Modal from './Modal'

const LeftSide = ({handleThemeSwitcher,theme}) => {
  const [showMyModal,setShowMyModal] = useState(false) 

  const [toggle ,setToggle] = useState(false)


 

  const [count,setcount]=useState(0)
  const handleOnClose = ()=>setShowMyModal(false)
  return (
    <>
    <div className={`${toggle ? " w-[3.8rem] " : ""} sidebarContainer  `}>
 
      <SidebarData toggle={toggle}  setToggle={setToggle} handleThemeSwitcher={handleThemeSwitcher} theme={theme} />
      {toggle && <div className='sidebarContainer2 absolute transition-all duration-700 delay-700'> <Notifications  setToggle={setToggle} /></div>}
     
      
    </div>
 
      <div className=' lg:hidden '><Navbottom /></div>
    </>
  )
}

export default LeftSide