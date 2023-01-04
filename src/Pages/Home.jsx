import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Profile from '../Components/Profile'
import Feed from './Feed'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Saved from './Saved'

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
  console.log(type,"its the type of the params in the home page");
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
  <div className='w-2/6 bg-slate-100 border-gray-50 lg:pl-40    dark:bg-black' >
   <LeftSide />
  </div>
  {/* FeedSide */}
  <div className='w-2/6 bg-slate-50  dark:bg-zinc-900 h-screen overflow-y-scroll scrollbar-hide lg:px-7 '>
    {type === "/profile" ? <Profile /> : type === "/" ? <Feed /> : type==="/saved"? <Saved /> : "" }
 
  </div>
  <div className='w-2/6 bg-slate-100 lg:pr-40   dark:bg-black'>
  <RightSide />
  <button onClick={handleThemeSwitcher}>Switcher {theme === 'dark' ? "dark" :"light"}</button>
  </div>
  </div>
  </>
  )
}

export default Home