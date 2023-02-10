import React from 'react'
import  RoutePage  from './RoutePage'
import AdminRoute from './AdminRoute/AdminRoute'
import { BrowserRouter } from 'react-router-dom';


const MainRoute = () => {
//     const router =useLocation()
//     const pathname =router.pathname
//     const isPathname = pathname.includes('/admin')
//   console.log("pathname",isPathname)
const url = new URL(window.location.href);
const queryParam = url.searchParams.get('param');
console.log("location",queryParam);


   
  return (
    <div>
      <BrowserRouter>
        <RoutePage />
      {/* <AdminRoute />  */}
      </BrowserRouter>
    </div>
  )
}

export default MainRoute