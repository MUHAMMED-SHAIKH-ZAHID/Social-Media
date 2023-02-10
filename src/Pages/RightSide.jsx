import React from 'react'
import MiniProfile from '../Components/MiniProfile'
import Search from '../Components/Search'
import WhoToFollow from '../Components/WhoToFollow'

const RightSide = () => {
  return (
    <div>
  
    <Search />
      <WhoToFollow />
      <p className='text-xs dark:text-gray-400 pl-3 '>@ 2023  Social Media by Shaikh Zahid</p>
    </div>
  )
}

export default RightSide