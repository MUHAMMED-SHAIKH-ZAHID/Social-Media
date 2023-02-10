
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import OutsideClickHandler from 'react-outside-click-handler'
import { searchUsers } from '../Redux/features/PostSlice'

function Search() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])
    const [ispop, setIspop] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (search) {
            dispatch(searchUsers(search)).then((res) => {
                setUsers(res.payload)
            })
        }
    }, [search])

    
  const userProfileclick = (id) => {
    console.log("clickeed userProfie click", id);

    navigate("/profile", { state: { id: id } });
  };

    return (
        <div className=' z-50  w-full '>

<form class="group relative mt-5 mx-3">
      <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </svg>
      <input  value={search} onChange={(e) => {
                            setIspop(true)
                            setSearch(e.target.value)
                        }}  className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-xl py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Search..."/>
    </form>
           
            <OutsideClickHandler onOutsideClick={(e) => { setIspop(false) }}>

                {search && ispop &&
                    <div className=' h-auto mx-2         bg-zinc-600  text-white z-50 rounded-md'>
                        {users?.map(obj => {
                            return (
                                <div key={obj._id} className='p-3'>

                                    <div  onClick={() => userProfileclick(obj?._id )} className='flex gap-3 cursor-pointer hover:opacity-80 rounded-md'>
                                        <div>
                                    
                                                <img className='w-12 h-12' src={obj?.profilePicture} alt=""/>
                                            
                                        </div>
                                        <div>
                                            <p className=' font-medium mt-1'>{obj.firstname + " " + obj.lastname}</p>
                                            <p className='text-xs text-gray-300'>{obj?.email}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </OutsideClickHandler>
        </div>

    )
}

export default Search
