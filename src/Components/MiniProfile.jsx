import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../Redux/features/AuthSlice'
import { getuser } from '../Redux/features/PostSlice'

const MiniProfile = () => {
    const [refresh,setRefresh]=useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logout=()=>{
        localStorage.clear("token")
        setRefresh(true)
        navigate('/auth')
    }
    useEffect(()=>{
      dispatch(addUser())
      dispatch(getuser())
    },[refresh])
  return (
    <div className='flex'> 
        <img src='' alt='' />
        <button className='  pl-4 rounded-2xl' onClick={()=>{
            logout()
        }}>
     

          Logout</button>
    </div>
  )
}

export default MiniProfile