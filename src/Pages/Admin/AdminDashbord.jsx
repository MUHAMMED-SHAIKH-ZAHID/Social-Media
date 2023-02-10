import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../Redux/features/AdminSlice';
import Chart from './Chart';

const AdminDashbord = () => {
  const dispatch=useDispatch()
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    dispatch(getAllUsers()).then((res) => {
      //console.log(res.payload);
      setUsers(res.payload);
    });
  }, [refresh]);
    
  const newuser = useSelector(state=>state.admin.Newusers)
  const verified = useSelector(state=>state.admin.emailVerified)
  const emaiverified =verified.filter(f => f.email_verified === true).length
  return (
    <div className='w-[100%] overflow-y-scroll  scrollbar-hide'>
      <div className="flex justify-center items-center font-bold px-auto   ">DASHBORD</div>
      <div className='flex '>
       <div className='bg-zinc-900 rounded-xl hover:opacity-80 cursor-pointer w-40 h-40 p-10  m-12'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>

        <p className='flex font-medium text-center
        text-white'>Total Users</p>
           <p className='text-blue-500'> {users?.length} users</p>
       </div>

       <div className='bg-zinc-900 rounded-xl hover:opacity-80 cursor-pointer w-40 h-40 p-10 m-12'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

        <p className='flex font-medium text-center
        text-white'>Total Posts</p>
           <p className='text-blue-500 '> {users?.length} Posts</p>
       </div>

       <div className='bg-zinc-900 rounded-xl hover:opacity-80 cursor-pointer w-40 h-40 p-12 m-12'>
        <span className='font-normal text-2xl text-white flex '>Google</span>
        <p className='flex font-medium text-center
        text-white'> verified </p>
           <p className='text-blue-500'> {emaiverified} Users</p>
       </div>

       {/* <div className='bg-zinc-900 rounded-xl hover:opacity-80 cursor-pointer w-80 h-40 p-12 m-12'>
        {newuser.map((item)=>item.username)}</div> */}

       </div>
       <Chart />
       <div>
        <p>New Users of this week</p>
      <table className="shadow-3xl mx-auto mt-3   font-[popins] border-2 border-black  ">
        <thead className="text-white ">
          <tr>
            <th className="bg-zinc-600 text-white px-12 p-4 font-medium font-mono hover:opacity-80 hover:text-black  ">Name</th>
            <th className="bg-zinc-600 text-white px-12 p-4 font-medium font-mono hover:opacity-80 hover:text-black ">Email</th>
            <th className=" bg-zinc-600 text-white px-12 p-4 font-medium font-mono hover:opacity-80 hover:text-black">verified</th>
 


          </tr>
        </thead>
        <tbody className="text-cyan-900 text-center ">
          {newuser?.map((obj) => {
            return (
              <tr key={obj._id} className="  ">
                <td>
                  <div className="px-6  flex py-3">
                    <img
                      className="w-12 h-12"
                      src={obj?.profilePicture}
                      alt=""
                    />
                    <span className="py-2 px-6">
                      {obj?.firstname + " " + obj?.lastname}{" "}
                    </span>
                  </div>
                </td>
                <td>{obj.email} </td>
                <td className="py-2 px-16">{obj.email_verified ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
</svg>: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>

}</td>
            


             
              </tr>
            );
          })}
        </tbody>
      </table>
       </div>
      
    </div>
  )
}

export default AdminDashbord