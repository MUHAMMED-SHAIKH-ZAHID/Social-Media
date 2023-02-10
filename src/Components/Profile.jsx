import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  commentPost,
  Followuser,
  getaPost,
  likePosts,
  unFollowuser,
  userProfile,
} from "../Redux/features/PostSlice";
import InputEmoji from "react-input-emoji";
import Moment from "react-moment";
import { useLocation, useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";

const Profile = () => {
  const loading = useSelector((state) => state?.post?.loading);
  const navigate = useNavigate();
  const [change, setchange] = useState(false);

  const profile = useSelector((state) => state?.post?.Profiledata);
  const currentuserId = useSelector((state) => state?.post?.currentUserDetails._id);
  const Following = useSelector((state)=>state?.post?.currentUserDetails?.following)
  console.log(Following,"follow redux reducer state");

  const [count, setCount] = useState(1);
  const showMore = () => {
    setCount((prev) => prev + 3);
  };
  // useEffect(()=>{
  //  Following
  // },[change])

  const dispatch = useDispatch();
  const likesubmit = (id) => {
    dispatch(likePosts({ id })).then((res) => {
     // setLike(likeArr);
    });
  };
  const [commentText, setCommentText] = useState("");
  const [refresh, setRefresh] = useState(false);
  let refrsh = useSelector((state) => state.post.refresh);
  const formref = useRef(null);
  const handleSubmit = (e, id) => {
    console.log(
      commentText,
      id,
      "output of the comment on handle submit in the freak"
    );
    e.preventDefault();
    if (commentText === "") {
      console.log("cant submit empty  comment ...........................");
    } else {
      dispatch(commentPost({ commentText, id })).then((res) => {
        setCommentText("");
        refresh ? setRefresh(false) : setRefresh(true);
      });
    }
  };

  const Singlepost = (id) => {
    console.log("singlepost clicked", id);
    dispatch(getaPost(id)).then((res) => {
      navigate("/singlepost");
    });
  };

  const [hide, setHide] = useState(false);
  const location = useLocation(); 
  const id =location?.state?.id
  useEffect(()=>{
    if(id === undefined ){
      let data =localStorage.getItem('user')
      let id = JSON.parse(data)
       console.log("piiiiiiiiiiiiiiinga",id);

       dispatch(userProfile(id))
      }else{
      dispatch(userProfile(id))
      console.log("undefined  ",id);
    }
   
    
  },[])
  console.log( location?.state?.id, "its the use location id",id === undefined );

  const handlefollow = (id)=>{
console.log("log of the follow button and id is follow",id);
dispatch(Followuser({id:id}))
setchange(state=>!state)
  }

  const handleUnfollow = (id)=>{
    console.log("log of the unfollow  button and id is unfollow",id);
    dispatch(unFollowuser({id:id}))
      }

  return (
    <div>
       {loading &&< div className="flex items-center justify-center pt-[70%] bg-zinc-200 dark:bg-transparent pb-[100%] h-[100%]"> 
      <RingLoader color="#eef6f4" size={150}  speedMultiplier={3} />
      </div> }
      <div className="flex my-2 w-full">
        <div className="rounded-2xl p-5 w-full  dark:bg-black bg-zinc-200">
          <div className="flex justify-between items-center">
            <img
              src={profile?.user?.profilePicture}
              alt="profile"
              className="w-24 h-24 object-fill rounded-full"
            />
            <div className="grid ">
              <span className="font-semibold text-lg mx-auto">
                {profile?.post?.length}
              </span>
              <span className="font-thin text-lg ">Post</span>
            </div>
            <div className="grid">
              <span className="font-semibold text-lg mx-auto">
                {profile?.user?.followers?.length}
              </span>
              <span className="font-thin text-lg ">Followers</span>
            </div>
            <div className="grid">
              <span className="font-semibold text-lg mx-auto">
                {profile?.user?.following?.length}{" "}
              </span>
              <span className="font-thin text-lg ">Following</span>
            </div>
          </div>
          <div className="pt-5">
            <div className="grid">
              <span className="font-normal text-base "></span>
              <span className="font-extralight text-lg">
                {" "}
                {profile?.user?.username}
              </span>
            </div>
            <div className="flex justify-center mt-5">
              {profile?.user?._id === currentuserId && 
              <><button className="dark:bg-[#302d2d]  text-white flex mx-auto lg:px-32 px-24 md:px-auto  rounded-md bg-[#a2a0a0] p-1 hover:bg-zinc-300 ">
                Edit Profile
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="pl-2 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
              {/* <button
                className="mb-3 "
                onClick={() => setHide((prev) => !prev)}
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
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
              </button> */}
              </>
              }
                            {profile?.user?._id !== currentuserId && 

                            <>
                             {!Following?.includes(profile?.user?._id)  ? 
                          <>  <button onClick={()=>handlefollow(profile?.user?._id)} className="dark:bg-blue-500 md:px-[20%]  lg:px-16 px-12  text-white flex mx-auto rounded-md bg-[#a2a0a0]  my-1 hover:bg-zinc-300 ">
                              follow
                             </button></> : 
                              <>  <button onClick={()=>handleUnfollow(profile?.user?._id)} className="dark:bg-slate-200  md:px-[20%]  lg:px-16 px-12  text-black flex mx-auto rounded-md bg-[#a2a0a0]  my-1 hover:bg-zinc-300 ">
                              Unfollow
                             </button></>}
              <button className="flex justify-center mx-auto bg-slate-800 lg:px-16 md:px-[20%] px-12 text-white rounded-md  hover:opacity-90 my-1">Message</button>
                              </>

              }
            
                              <button
                className="mb-3 "
                onClick={() => setHide((prev) => !prev)}
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
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
              </button>
             
            </div>
          </div>
        </div>
      </div>
      <div className={hide ? ` ` : " grid grid-cols-2 gap-3"}>
        {profile?.post?.map((item) => {
          return (
            <>
              <div key={item._id}
                className={` ${
                  hide ? "my-10" : "my-5"
                }bg-white  border rounded-sm  dark:bg-black dark:border-slate-800 dark:text-gray-100`}
              >
                {/* Header */}
                {hide && (
                  <div className="flex items-center p-2">
                    <img
                      className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
                      src={profile?.user?.profilePicture}
                      alt=""
                    />
                    <div className="">
                      <p className="flex-1 font-medium w-full truncate">
                        {profile?.user?.username}
                      </p>
                      <p className=" text-gray-500 text-xs truncate">
                        {" "}
                        <Moment fromNow>{item?.createdAt}</Moment>
                      </p>
                    </div>
                    <div className="flex justify-end w-full">
                      <svg
                        // onClick={() =>
                        //   setIsPOp(item._id) }
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
                )}
                {/* Image */}

                <div
                  onClick={() => {
                    Singlepost(item._id);
                  }}
                  className={
                    hide
                      ? `rounded-sm overflow-hidden`
                      : "relative grop cursor-pointer hover:opacity-90 group/item "
                  }
                >
                        <div className='absolute top-0 left-0 h-full w-full  flex items-center justify-center invisible hover:bg-transparent text-white group-hover/item:visible'>
                  
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className={ "w-5 h-5 fill-white " }
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                     />
                   </svg>
                   <span className='flex pl-1 text-sm text-white'>{item?.likes?.length}</span>
 
                   <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pl-2 w-5.5 h-5">
   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
 </svg>
 <span className='flex pl-1 text-sm text-white'>{item?.comments?.length}</span>
 
                   </div>
                  <div className=" ">
                    <img
                      src={item.image}
                      className="object-cover  w-full aspect-square "
                      alt=""
                    />
                  </div>
                </div>
                {/* Button */}
                {hide && (
                  <div>
                    <div className="flex justify-between px-4 pt-4">
                      <div className="flex space-x-4 ">
                        <button
                          onClick={() => {
                            likesubmit(item._id);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={
                              item?.likes?.includes(item.userId)
                                ? "w-6 h-6 fill-black dark:fill-white btn"
                                : "w-6 h-6 btn"
                            }
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
                          onClick={() => {
                            count === 1 ? showMore() : setCount(1);
                          }}
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
                      <span className="font-medium mr-1">
                        {profile?.user?.username}{" "}
                      </span>
                      {item.caption}
                    </p>
                    {/* Comment */}
                    {item?.comments.length > 0 ? (
                      <div className=" overflow-auto  rounded-md postComments">
                        {item?.comments?.slice(0, count).map((comment, i) => {
                          return comment?.commentby?._id === item?.userId ? (
                            <div
                              key={comment?._id}
                              className="flex  mt-2 gap-2 items-center"
                            >
                              <div>
                                <div url={comment?.commentby?.profilepic} />
                              </div>
                              <div className="bg-gray-200 dark:bg-gray-800   rounded-xl py-1 px-4 ">
                                <span className="font-normal mr-1">
                                  {comment?.commentby?.username}
                                </span>
                                <span className="text-xs text-gray-500">
                                  <Moment fromNow>{comment?.createdAt}</Moment>
                                </span>
                                <span className="rounded-full ">☑️</span> <br />
                                <p className="text-sm">{comment?.comment}</p>
                              </div>
                            </div>
                          ) : (
                            <div
                              key={comment?._id}
                              className="flex gap-2 items-center mt-2"
                            >
                              <div>
                                {" "}
                                <div url={comment?.commentby?.profilepic} />
                              </div>

                              <div className="bg-gray-200 dark:bg-gray-800   rounded-xl py-1 px-4 ">
                                <span className="font-normal mr-1">
                                  {comment?.commentby?.username}
                                </span>
                                <span className="text-sm text-gray-500">
                                  <Moment fromNow>{comment?.createdAt}</Moment>
                                </span>
                                <br />

                                <p className="text-sm">{comment?.comment}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="flex justify-between mr-3">
                      {count < item.comments.length && (
                        <div
                          className="flex"
                          onClick={() => {
                            showMore();
                          }}
                        >
                          <p className="flex pl-5 hover:cursor-pointer mt-1">
                            View more comments
                          </p>
                        </div>
                      )}
                      {count > 1 && (
                        <div
                          className="flex"
                          onClick={() => {
                            setCount(1);
                          }}
                        >
                          <p className="flex pl-5 hover:cursor-pointer mt-1">
                            Show Less
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Input */}
                    <form
                      onSubmit={(e) => {
                        handleSubmit(e, item._id);
                      }}
                      className="flex items-center my-2"
                    >
                      <InputEmoji
                        type="text"
                        ref={formref}
                        name="comment"
                        value={commentText}
                        theme="auto"
                        onChange={setCommentText}
                        borderColor="gray"
                        placeholder="Add a comment..."
                        className="border-none z-10  py-2 rounded-md dark:text-black  focus:ring-0 outline-none"
                      />
                      <button className="font-semibold mr-2 text-blue-400 hover:text-blue-600">
                        Post
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
