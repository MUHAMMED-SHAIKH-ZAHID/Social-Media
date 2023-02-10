import React, { useEffect, useRef, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { useDispatch, useSelector } from 'react-redux'
import { commentPost, deletepost, getaPost, likePosts, savePost, userProfile } from '../Redux/features/PostSlice'
import Moment from 'react-moment';
import { Navigate } from 'react-router-dom';
import InputEmoji from "react-input-emoji";
import Modal from '../Pages/Modal';
import PostDelete from './PostDelete';


const Singlepost = () => {
  const dispatch=useDispatch()
  const [like,setLike]= useState()
  const [isPopup, setIsPOp] = useState("")
  const [saves,setSaves] =useState(false)
  const likeArr = useSelector((state)=>state.post.likes)
  const [openModal, setOpenModal] = useState(false)
  const likesubmit=(id)=>{
    dispatch(likePosts({id})).then((res)=>{
     setLike(likeArr)
     setRefresh(state=>!state)
    })
}
const [count, setCount] = useState(1);
const showMore = () => {
  setCount((prev) => prev + 3);
};
  
const saveSubmit=(id)=>{
  console.log("save Submitted",post);
  dispatch(savePost({id})).then((res)=>{
    setRefresh(prev=>!prev)
  })
}

const [commentText, setCommentText] = useState('')
const [refresh, setRefresh] = useState(false)
const formref = useRef(null)

const handleSubmit = (e, id) => {
  console.log(commentText,id,"output of the comment on handle submit in the freak");
 e.preventDefault()
 if(commentText===""){
        console.log("cant submit empty  comment ...........................");
 }else{
 dispatch(commentPost({ commentText, id }))
     .then((res) => {
       setRefresh(state=>!state)
         setCommentText("")
     });
   }
}

const [reportForm, setReportForm] = useState(false)
const [reportHandle, setReportHandle] = useState("")
const [showMyModal, setShowMyModal] = useState(false);
const handleOnClose = () => setShowMyModal(false);

  
  const post = useSelector((state)=>state?.post?.singlePost)
  let user = useSelector((state) => state.post.currentUserDetails);
  console.log(post._id,"its the post details that you have clicked ");
  let singlepost = post._id
  
  const userProfileclick =(id)=>{
    console.log("clickeed userProfie click",id);
    dispatch(userProfile(id)).then((res)=>{
     console.log("its the response");
     Navigate('/profile')
    })}

  if( post._id === undefined ){
    const localId =localStorage.getItem('singlepost')
    console.log("id is undefined ?",localId);
    dispatch(getaPost(localId)).then((res)=>{
    
    })
  }else{
    console.log("id is not  no  no  no undefined");
    localStorage.setItem(`singlepost`,singlepost)
  }

  
useEffect(()=>{
  const localId =localStorage.getItem('singlepost')
  dispatch(getaPost(localId))
},[refresh])


   console.log("finally the id is there or notot",post?.userId?.saved);
  return (
    <div>
      <>
      <div className="bg-white my-7 border rounded-sm  dark:bg-black dark:border-slate-800 dark:text-gray-100 ">
           {/* Header */}
           <div className="flex items-center p-2" >
                <img
                 onClick={()=>userProfileclick(post.userId._id)}
                  className="rounded-full h-12 w-12 object-contain border p-1 mr-3 cursor-pointer"
                  src={post?.userId?.profilePicture}
                  alt=""
                />
                <div className="">
                <p className="flex-1 font-medium w-full truncate">{post?.userId?.username}</p>
                  <p className=" text-gray-500 text-xs truncate"> <Moment fromNow>{post.createdAt}</Moment></p>
                </div>
                <div className="flex justify-end w-full">
                <svg
                 onClick={() => setIsPOp(post._id)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 btn "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                </div>
                <div className="relative">
                  {isPopup === post._id && (
                    <div className=" bg-transparent rounded-md w-20 -ml-20 top-8 absolute ">
                      <OutsideClickHandler
                        onOutsideClick={(e) => {
                          setIsPOp("");
                        }}
                      >
                      {post.userId._id === post._id && <div> <Modal
          onClose={handleOnClose}
          visible={showMyModal}
          id={"container"}
          content={<PostDelete setShowMyModal={setShowMyModal} id={post._id} setIsPOp={setIsPOp} dispatches={deletepost}  content={"Are You Sure You Want to Delete This Post"}/>}
        ></Modal>  <button
                          onClick={() => {
                            setShowMyModal(true)
                          }}
                          className="  py-1  rounded-md bg-red-700 w-24 mt-1 hover:opacity-90 cursor-pointer  flex gap-3"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                            />
                          </svg>
                          Delete
                        </button></div>} 
{/*                     
                        {confirmDelete && handleDelete(item._id)} */}
                        {/* </OutsideClickHandler> */}

                        {/* <OutsideClickHandler onOutsideClick={(e) => { !confirmDelete && setIsPOp("") }}> */}
                    {post.userId._id !== user._id && <>
                      <button
                          onClick={() => {
                            setReportHandle(post._id)
                            setReportForm(true)
                          }}
                          className=" px-4 py-1  rounded-md w-20 mt-1 bg-slate-200 text-black hover:opacity-90 flex"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                            />
                          </svg>
                          Report
                        </button>
                    </>}
                     
                      </OutsideClickHandler>
                    </div>
                  )}
                </div>
                
              </div>
                 {/* Image */}
                 <div className="p-1 overflow-hidden">
                
                <img
                  src={post.image}
                  onDoubleClick={()=>{likesubmit(post._id)}}
                  className="object-cover  w-full  "
                  alt=""
                />
                 <div className='absolute top-0 left-0 h-full w-full  flex items-center justify-center invisible hover:bg-transparent text-white group-hover/item:visible'>
                  
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className={ "w-5 h-5 fill-black dark:fill-white " }
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                     />
                   </svg>
                   <span className='flex pl-1 text-sm text-white'>{post?.likes?.length}</span>
 
                   <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pl-2 w-5.5 h-5">
   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
 </svg>
 <span className='flex pl-1 text-sm text-white'>{post?.comments?.length}</span>
 
                   </div>
              </div>

             {/* Button */}
             <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4 ">
                  <button onClick={()=>{likesubmit(post._id)}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={post?.likes?.includes(post?.userId?._id) ? "w-6 h-6 fill-black dark:fill-white btn" : "w-6 h-6 btn"}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  
                  </button>
                  

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 btn"
                    onClick={()=>  {count === 1 ? showMore() :  setCount(1)}}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 btn"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={()=>{saveSubmit(post._id)}}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                className={post?.userId?.saved?.includes(post._id)? "w-6 h-6 fill-black dark:fill-white btn" : " w-6 h-6 btn"}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </div>   
              <p className="ml-4 ">{post?.likes?.length} likes</p>

                   {/* Comment */}
                   {post?.comments?.length > 0 ? <div className=' overflow-auto  rounded-md postComments'>
                        {
                            post?.comments?.slice(0,count).map((comment,i) => {

                                return comment?.commentby?._id === post?.userId?._id ?
                                    <div key={comment?._id} className='flex  mt-2 gap-2 items-center'>
                                        <div>
                                            <div url={comment?.commentby?.profilepic} /></div>
                                        <div className='bg-gray-200 dark:bg-gray-800   rounded-xl py-1 px-4 '>
                                            <span className='font-normal mr-1'>
                                                {comment?.commentby?.username}</span>
                                            <span className='text-xs text-gray-500'><Moment fromNow>{comment?.createdAt}</Moment>
                                           
                                            </span>
                                           <span className="rounded-full ">☑️
</span> <br />

                                            <p className='text-sm'>{comment?.comment}</p>
                                        </div>
                                    </div>
                                    :
                                    <div key={comment?._id} className='flex gap-2 items-center mt-2'>
                                        <div> <div url={comment?.commentby?.profilepic} /></div>

                                        <div className='bg-gray-200 dark:bg-gray-800   rounded-xl py-1 px-4 '>
                                            <span className='font-normal mr-1'>
                                                {comment?.commentby?.username}</span>
                                            <span className='text-sm text-gray-500'><Moment fromNow>{comment?.createdAt}</Moment></span><br />

                                            <p className='text-sm'>{comment?.comment}</p>
                                           
                                        </div>
                                      
                                    </div>
                                    
                            })
                            
                        }
                    </div> : ""}

                    <div className="flex justify-between mr-3">
            
            {count < post?.comments?.length && (
              <div
                className="flex"
                onClick={() => {
                  showMore();
                }}
              >
                <p className="flex pl-5 hover:cursor-pointer mt-1">View more comments</p>
              </div>
            )}
                    {count > 1 && (
              <div
                className="flex"
                onClick={() => {
                  setCount(1);
                }}
              >
               <p className="flex pl-5 hover:cursor-pointer mt-1">Show Less</p>
              </div>
            )}
            </div>

              {/* Input */}
              <form  onSubmit={(e)=>{handleSubmit(e,post._id)}}  className="flex items-center my-2">
              
              

                <InputEmoji
                  type="text"
                  ref={formref}
                  name="comment"
                  value={commentText}
                  theme="auto"
                  onChange= { setCommentText}
                  borderColor="gray"
                  placeholder="Add a comment..."
                  className="border-none z-10  py-2 rounded-md dark:text-black  focus:ring-0 outline-none"
                />
                <button className="font-semibold mr-2 text-blue-400 hover:text-blue-600">Post</button>
              </form>


       </div>
      </>
    </div>
  )
}

export default Singlepost;