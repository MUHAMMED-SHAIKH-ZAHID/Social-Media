import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Conversation from '../Components/Conversation'
import Message from '../Components/Message'
import Notifications from '../Components/Notifications'


import Profile from '../Components/Profile'
import Singlepost from '../Components/Singlepost'
import Feed from './Feed'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Saved from './Saved'
import SearchPage from './SearchPage'


const Home = () => {
 const location =useLocation()
 const type =location.pathname

 const [theme,setTheme] = useState(null)
 useEffect(()=>{
   if (window.matchMedia('(prefers-color-scheme:dark)').
   matches){
     setTheme('dark');
   }else{
     setTheme('light')
   }
   },[])
 
 useEffect(()=>{
   if(theme === 'dark'){
     document.documentElement.classList.add('dark');
   }else{
     document.documentElement.classList.remove('dark');
   }
 },[theme])

 const handleThemeSwitcher =()=>{
   setTheme(theme === 'dark' ? "light" :"dark")
}

  return (
  <>
  <div className='flex '>
  {/* LeftSide */}
  <div className='lg:w-2/6 flex xl:pl-40 bg-slate-100 border-gray-50   dark:bg-black' >
   <LeftSide handleThemeSwitcher={handleThemeSwitcher} theme={theme}/>
  </div>
  {/* FeedSide */}
  <div className='lg:w-2/6 w-[100%] bg-slate-50  dark:bg-zinc-900 h-screen overflow-y-scroll scrollbar-hide lg:px-7 '>
    {type === "/profile" ? <Profile /> : type === "/" ? <Feed handleThemeSwitcher={handleThemeSwitcher} theme={theme}/> : type==="/saved"? <Saved /> : type==="/singlepost"? <Singlepost /> : type==='/messages'? <Message/> : type==='/conversation'? <Conversation /> : type==='/notification'? <Notifications /> : type==='/search'?<SearchPage />: ""}
    
  </div>
  <div className='w-2/6 bg-slate-100  hidden lg:flex  dark:bg-black'>
  <RightSide />
  </div>
  </div>
  </>
  )
}

export default Home