import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const AdminSidebar = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const homeActive = location.pathname === "/admin";
    const UsersActive = location.pathname === "/admin/users"
    const ReportActive = location.pathname === '/admin/report'
    const PostActive = location.pathname === '/admin/post'
    const logout = ()=>{
        localStorage.clear('Token')
        navigate('/admin/auth')
    }
  return (
    <div>
        <div className="sidebaradmin ">
        <p className="delay-200 align-middle mb-20 pl-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-bold mt-4">
              Admin Panel
            </p>
            <div className=''>
            <Link to={"/admin"}>
          <div
            className={`sidebars ${
              homeActive &&
              "bg-gradient-to-r from-pink-500 to-violet-500 shadow-lg  text-black text-lg"
            } truncate `}
          >
            <div
              className=" flex max-w-[2.5rem] h-[2.5rem] "
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  preserveAspectRatio="xMidYMid meet"
                  className="ml-0.5"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                    <path
                      fill="currentColor"
                      d="M13.2 2.65a2 2 0 0 0-2.4 0l-7 5.25A2 2 0 0 0 3 9.5V19a2 2 0 0 0 2 2h3.9a1.1 1.1 0 0 0 1.1-1.1V15a2 2 0 1 1 4 0v4.9a1.1 1.1 0 0 0 1.1 1.1H19a2 2 0 0 0 2-2V9.5a2 2 0 0 0-.8-1.6l-7-5.25Z"
                    />
                  </g>
                </svg>
              </div>
              Home
            </div>
          </div>
        </Link>

        <Link to={"/admin/users"}>
          {" "}
          <div
          
            className={`sidebars ${
              UsersActive &&
              "bg-gradient-to-r from-pink-500 to-violet-500 shadow-lg text-black text-lg "
            }truncate `}
          >
            <div className=" flex max-w-[2.5rem] h-[2.5rem]">
              <div>
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
</svg>

              </div>
              <p
                className= " delay-200" 
              >
                Users
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/admin/post"}>
          {" "}
          <div
          
            className={`sidebars ${
              PostActive &&
              "bg-gradient-to-r from-pink-500 to-violet-500 shadow-lg text-black text-lg "
            }truncate `}
          >
            <div className=" flex max-w-[2.5rem] h-[2.5rem]">
              <div>
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>


              </div>
              <p
                className= " delay-200" 
              >
                Post
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/admin/report"}>
          {" "}
          <div
          
            className={`sidebars ${
              ReportActive &&
              "bg-gradient-to-r from-pink-500 to-violet-500 shadow-lg text-black text-lg "
            }truncate `}
          >
            <div className=" flex max-w-[2.5rem] h-[2.5rem]">
              <div>
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clipRule="evenodd" />
</svg>


              </div>
              <p
                className= " delay-200" 
              >
                Report
              </p>
            </div>
          </div>
        </Link>
        <div  onClick={()=>logout()}>
          {" "}
          <div
          
            className={`sidebars truncate `}
          >
            <div className=" flex max-w-[2.5rem] h-[2.5rem]">
              <div>
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
</svg>



              </div>
              <p
                className= " delay-200" 
              >
                Logout
              </p>
            </div>
          </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default AdminSidebar