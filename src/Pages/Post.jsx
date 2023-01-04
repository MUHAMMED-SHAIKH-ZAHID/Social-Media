import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentPost, getPosts, likePosts, refresh } from "../Redux/features/PostSlice";
import Moment from 'react-moment';
import InputEmoji from "react-input-emoji";

const Post = () => {
  const { post } = useSelector((state) => state);
  let Posts = post.post;
  let userId = post.userId;
  console.log("redux alert alert alert", post.userId);
  const [like,setLike]= useState()
  const likeArr = useSelector((state)=>state.post.likes)
  const [count, setCount] = useState(1);
  const showMore = () => {
    setCount((prev) => prev + 3);
  };

  const dispatch = useDispatch();
 const likesubmit=(id)=>{
     dispatch(likePosts({id})).then((res)=>{
      setLike(likeArr)
     })
 }
 const [commentText, setCommentText] = useState('')
 const [refresh, setRefresh] = useState(false)
 let refrsh = useSelector(state => state.post.refresh)
 const formref = useRef(null)

  useEffect(() => {
    dispatch(getPosts()).then((data) => {
      console.log(
        "its the console in the useEffect to test the data of the post",
        data
      );
    });
  }, [like,refrsh,refresh]);

  const handleSubmit = (e, id) => {
     console.log(commentText,id,"output of the comment on handle submit in the freak");
    e.preventDefault()
    if(commentText===""){
           console.log("cant submit empty  comment ...........................");
    }else{
    dispatch(commentPost({ commentText, id }))
        .then((res) => {
            setCommentText("")
            refresh ? setRefresh(false) : setRefresh(true)
        });
      }
}
  function handleOnEnter(text) {
    console.log("enter", text);
    
  }



  return (
    <div>
      {Posts.map((item) => {
        return (
          <>
            <div className="bg-white my-7 border rounded-sm  dark:bg-black dark:border-slate-800 dark:text-gray-100">
              {/* Header */}
              <div className="flex items-center p-2">
                <img
                  className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
                  src={item.userId.profilePicture}
                  alt=""
                />
                <div className="">
                <p className="flex-1 font-medium w-full truncate">{item.userId.username}</p>
                  <p className=" text-gray-500 text-xs truncate"> <Moment fromNow>{item.createdAt}</Moment></p>
                </div>
                <div className="flex justify-end w-full">
                <svg
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
                
              </div>
              {/* Image */}
              <div className="rounded-md overflow-hidden">
                <img
                  src={item.image}
                  onDoubleClick={()=>{likesubmit(item._id)}}
                  className="object-cover  w-full aspect-square "
                  alt=""
                />
              </div>
              {/* Button */}
              <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4 ">
                  <button onClick={()=>{likesubmit(item._id)}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={item.likes.includes(userId) ? "w-6 h-6 fill-black dark:fill-white btn" : "w-6 h-6 btn"}
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
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 btn"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </div>
              <p className="ml-4 ">{item?.likes?.length} likes</p>

              {/* Caption */}
              <p className="p-5 truncate">
                <span className="font-medium mr-1">{item.userId.username} </span>
                {item.caption}
                {item.comments.length}
              </p>
              {/* Comment */}
              {item?.comments.length > 0 ? <div className=' overflow-auto  rounded-md postComments'>
                        {
                            item?.comments?.slice(0,count).map((comment,i) => {

                                return comment?.commentby?._id === userId ?
                                    <div key={comment?._id} className='flex  mt-2 gap-2 items-center'>
                                        <div>
                                            <div url={comment?.commentby?.profilepic} /></div>
                                        <div className='bg-gray-200 dark:bg-gray-800   rounded-xl py-1 px-4 '>
                                            <span className='font-medium mr-1'>
                                                {comment?.commentby?.firstname}</span>
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
                                            <span className='font-semibold mr-1'>
                                                {comment?.commentby?.firstname}</span>
                                            <span className='text-sm text-gray-500'><Moment fromNow>{comment?.createdAt}</Moment></span><br />

                                            <p className='text-sm'>{comment?.comment}</p>
                                           
                                        </div>
                                      
                                    </div>
                                    
                            })
                            
                        }
                    </div> : ""}
   <div className="flex justify-between mr-3">
            
        {count < item.comments.length && (
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
              <form  onSubmit={(e)=>{handleSubmit(e,item._id)}}  className="flex items-center p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 pr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
              

                <InputEmoji
                  type="text"
                  ref={formref}
                  name="comment"
                  value={commentText}
                  onChange= { setCommentText}
                  onEnter={handleOnEnter}
                  placeholder="Add a comment..."
                  className="border-none flex-1 py-2 rounded-md dark:text-black pl-2 focus:ring-0 outline-none"
                />
                <button className="font-semibold ml-1 text-blue-400 hover:text-blue-600">Post</button>
              </form>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Post;
