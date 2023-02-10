import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createChats, userChats } from '../Redux/features/Chatslice'
import Chatbox from './Chatbox'
import { io ,Socket} from 'socket.io-client'
import { useRef } from 'react'
import Conversation from './Conversation'
import { searchUsers } from '../Redux/features/PostSlice'
import OutsideClickHandler from 'react-outside-click-handler'

const Message = () => {
  const currentusername = useSelector((state) => state?.post?.currentUserDetails?.username);
 const navigate = useNavigate()
  const dispatch = useDispatch()
  const [chats, setChats] = useState([])
  const [currentChat, setCurrentChat] = useState([])
  const [user, setUser] = useState("")
  const [onlineUsers, setOnlineUsers] = useState([])
  const [sendMessage, setSendMessage] = useState(null)
  const [recievedMessage, setRecievedMessage] = useState(null)
  const [hide,setHide]=useState(true)

  const socket = useRef()

  useEffect(() => {
    dispatch(userChats()).then((res) => {
      setChats(res.payload.chat)
      setUser(res.payload.user)
       console.log(res.payload.chat,"newwwww chat");
    })
  }, [])

  useEffect(() => {
    console.log(sendMessage,"reciever in message");
    if (sendMessage !== null) {
      socket.current.emit('send-message', sendMessage)
    }

  }, [sendMessage])

  useEffect(() => {
    socket.current = io(process.env.REACT_APP_CHAT_ID)
    console.log(socket.current,"lkklklklklkl")
    socket.current.emit("new-user-add", user)
    socket.current.on('get-users', (users) => {
      // console.log(users,"newUserusersesrsersers");
      setOnlineUsers(users)

    })
  }, [user])

  useEffect(() => {

    socket.current.on("receive-message", (data) => {
      console.log(data,"reciever - message in message ");
      setRecievedMessage(data)
    })
  }, [chats])

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user)
    const online = onlineUsers.find((user) => user.userId === chatMember)
    // console.log(online,"Is Online");
    return online ? true : false

  }

//  const  conversation = (id) => {
//    console.log("iton the conversation checking chat id",id);
//    navigate('/conversation',{state:{id : id}})
//   }
const [search, setSearch] = useState("")
const [users, setUsers] = useState([])
const [ispop, setIspop] = useState(false)

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

const createmessage = (id) => {
  console.log("create message with its id",id)
   dispatch(createChats({id:id})).then((res)=>{
  })
  navigate("/messages",{ state: { id: id } })
}

  return (
    <div>
      <div className={`${hide ? '' :'hidden'}`}>
       {/* <div className='flex justify-center items-center bg-black p-5 dark:text-white text-white rounded-xl'>Messsages
    <span className='pl-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-white text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
</span></div> */}
<div className="">
<div className=' z-50  w-full '>

<form class="group relative mt-5 mx-3">
      <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </svg>
      <input  value={search} onChange={(e) => {
                            setIspop(true)
                            setSearch(e.target.value)
                        }}  className=" bg-black  text-slate-100 placeholder-slate-400 rounded-xl py-2 pl-10 w-full shadow-sm" type="text" aria-label="Filter projects" placeholder=" Search"/>
    </form>
           
            <OutsideClickHandler onOutsideClick={(e) => { setIspop(false) }}>

                {search && ispop &&
                    <div className=' h-auto mx-2         bg-zinc-600  text-white z-50 rounded-md'>
                        {users?.map(obj => {
                            return (
                                <div key={obj._id} className='p-3'>

                                    <div onClick={()=> createmessage(obj?._id)} className='flex gap-3 cursor-pointer hover:opacity-80 rounded-md'>
                                        <div>
                                    
                                                <img  onClick={() => userProfileclick(obj?._id )}  className='w-12 h-12' src={obj?.profilePicture} alt=""/>
                                            
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

</div>
</div>
      {chats.map(chat=>(
        <div  key={chat?._id}>
          <div onClick={() => { setCurrentChat(chat) ; setHide(false)}} className={`${hide ? '' :'hidden'}`}>

          <Chatbox  data={chat} currentuserId={user} online={checkOnlineStatus(chat)} />
          </div>

          </div>
      ))}
      <div className={`${hide ? 'hidden' :''}`}>
        <Conversation  chat={currentChat} currentuserid={user}
                setSendMessage={setSendMessage} recieveMessage={recievedMessage} setHide={setHide}/>
      </div>
      </div>
  )
}

export default Message