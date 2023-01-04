import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MiniProfile = () => {
    const navigate = useNavigate()
    const {user} = useSelector((state)=>state)
    const logout=()=>{
        localStorage.clear()
        navigate('/auth')
    }
  return (
    <div> <p>{user.user.username}</p>
        <img src='' alt='' />
        <button className='bg-red-400 text-slate-600  p-1 rounded-2xl' onClick={()=>{
            logout()
        }}>Logout</button>
    </div>
  )
}

export default MiniProfile