import React from 'react'
import { useLocation } from 'react-router-dom'
import AdminDashbord from './AdminDashbord'
import AdminPost from './AdminPost'
import AdminReport from './AdminReport'
import AdminSidebar from './AdminSidebar'
import AdminUsers from './AdminUsers'
import AdminSinglePost from './AdminSinglePost'

const Adminhome = () => {
  const location =useLocation()
  const type =location.pathname
  return (
    <div>
      <div className="flex h-screen">
<div className='w-1/6 bg-black text-white '><AdminSidebar /></div>
      <div className="w-5/6 bg-slate-200 flex ">
        {type === '/admin' ? <AdminDashbord /> : type === '/admin/users' ? <AdminUsers /> :type ==='/admin/report' ? <AdminReport /> : type=== '/admin/post' ? <AdminPost /> : type=== '/admin/singlePost' ? <AdminSinglePost /> : ""}
      </div>
      </div>
      
    </div>
  )
}

export default Adminhome