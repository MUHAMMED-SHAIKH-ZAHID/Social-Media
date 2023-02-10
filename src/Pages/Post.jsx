import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  commentPost,
  deletepost,
  getPosts,
  likePosts,
  refresh,
  savePost,
  userProfile,
} from "../Redux/features/PostSlice";
import Moment from "react-moment";
import InputEmoji from "react-input-emoji";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
import Modal from "./Modal";
import PostFormCard from "../Components/PostFormCard";
import PostDelete from "../Components/PostDelete";
import Report from "../Components/Report";
import EditCard from "../Components/EditCard";

const Post = () => {
  const { post } = useSelector((state) => state);
  let Posts = post.post;
  let userId = post.userId;
  const likeArr = useSelector((state) => state.post.likes);
  const [count, setCount] = useState(1);
  const showMore = () => {
    setCount((prev) => prev + 3);
  };
  //const [loading,setLoading] = useState(false)
  const loading = useSelector((state) => state?.post?.loading);
  console.log(loading, "Dodge was a perfect in my mind");

  //shb
  const [isPopup, setIsPOp] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const navigate = useNavigate();

  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  
  const [showMyModale, setShowMyModale] = useState(false);
  const handleOnClosee = () => setShowMyModale(false);

  //

  const dispatch = useDispatch();
  const likesubmit = (id) => {
    dispatch(likePosts({ id }));
  };

  let user = useSelector((state) => state.post.currentUserDetails);
  const saveSubmit = (id) => {
    // console.log(user?.saved,"save Submitted",user?.saved?.includes(post._id));
    dispatch(savePost({ id }))
  };

  const [commentText, setCommentText] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [reportForm, setReportForm] = useState(false)
  const [reportHandle, setReportHandle] = useState("")
  let refrsh = useSelector((state) => state.post.refresh);
  let postUpdate = useSelector((state)=>state.post.postupdate)
  const formref = useRef(null);

  // useEffect(() => {
  //   // setLoading(true)
  //   dispatch(getuser());
  //   // setLoading(false)
  //   console.log("saves useffect working ", saves);
  // }, [saves]);

  useEffect(() => {
    
    dispatch(getPosts());
   
  }, [refrsh,postUpdate]);

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
  function handleOnEnter(text) {
    console.log("enter", text);
  }

  const userProfileclick = (id) => {
    console.log("clickeed userProfie click", id);

    navigate("/profile", { state: { id: id } });
  };

  // {reportForm && <Report close={setReportForm} postid={reportHandle} />}
  // setReportHandle(obj._id)
  // setReportForm(true)


  return (
    <div>
      {loading &&< div className="flex items-center justify-center mt-[50%] h-[100%]"> 
      <RingLoader color="#eef6f4" size={150}  speedMultiplier={3} />
      </div> }
      {reportForm && <Report close={setReportForm} postid={reportHandle} />}
      {Posts?.map((item) => {
        return (
          <>
            <div key={item.userId._id} className="bg-white my-1 border rounded-sm  dark:bg-black dark:border-slate-800 dark:text-gray-100 ">
              {/* Header */}
              <div className="flex items-center p-2">
                <img
                  onClick={() => userProfileclick(item.userId._id)}
                  className="rounded-full h-12 w-12 object-contain border p-1 mr-3 cursor-pointer"
                  src={item.userId.profilePicture}
                  alt=""
                />
                <div className="">
                  <p
                    onClick={() => userProfileclick(item.userId._id)}
                    className="flex-1 font-medium w-full truncate cursor-pointer"
                  >
                    {item.userId.username}
                  </p>
                  <p className=" text-gray-500 text-xs truncate">
                    {" "}
                    <Moment fromNow>{item.createdAt}</Moment>
                  </p>
                </div>
                <div className="flex justify-end w-full">
                  <svg
                    onClick={() => setIsPOp(item._id)}
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
                  {isPopup === item._id && (
                    <div className=" bg-transparent rounded-md w-20 -ml-20 top-8 absolute ">
                      <OutsideClickHandler
                        onOutsideClick={(e) => {
                          setIsPOp("");
                        }}
                      >
                      {item.userId._id === user._id && <div> <Modal
          onClose={handleOnClose}
          visible={showMyModal}
          id={"contact"}
          content={<PostDelete setShowMyModal={setShowMyModal} id={item._id} setIsPOp={setIsPOp} dispatches={deletepost}  content={"Are You Sure You Want to Delete This Post"}/>}
        ></Modal>  <button
                          onClick={() => {
                            setShowMyModal(true)
                          }}
                          className="  bg-red-700 rounded-sm px-4 pt-1 flex"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                            />
                          </svg>
                          Delete
                        </button>
                        
        <Modal
          onClose={handleOnClosee}
          visible={showMyModale}
          id={"containers"}
          content={<EditCard  setShowMyModal={setShowMyModale} image={item?.image} caption={item.caption} id={item?._id}/>}
        ></Modal>
                        <button      onClick={() => setShowMyModale(true)} className="bg-white text-black rounded-sm px-6 pt-1 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
</svg>

                          Edit </button>
                        </div>} 
{/*                     
                        {confirmDelete && handleDelete(item._id)} */}
                        {/* </OutsideClickHandler> */}

                        {/* <OutsideClickHandler onOutsideClick={(e) => { !confirmDelete && setIsPOp("") }}> */}
                    {item.userId._id !== user._id && <>
                      <button
                          onClick={() => {
                            setReportHandle(item._id)
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
              <div className="rounded-md overflow-hidden">
                <img
                  src={item.image}
                  onDoubleClick={() => {
                    likesubmit(item._id);
                  }}
                  className="object-cover  w-full  "
                  alt=""
                />
              </div>
              {/* Button */}
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
                        item.likes.includes(userId)
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
                  onClick={() => {
                    saveSubmit(item._id);
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={
                    user?.saved?.some((post) => post._id === item._id)
                      ? " w-6 h-6 fill-black dark:fill-white btn"
                      : "  w-6 h-6 btn"
                  }
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
                  {item.userId.username}{" "}
                </span>
                {item.caption}
              </p>
              {/* Comment */}
              {item?.comments.length > 0 ? (
                <div className=" overflow-auto  rounded-md postComments">
                  {item?.comments?.slice(0, count).map((comment, i) => {
                    return comment?.commentby?._id === userId ? (
                      <div
                        key={comment?.commentby?._id}
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
              <div className="z-0">
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
                  theme="dark"
                  onChange={setCommentText}
                  onEnter={handleOnEnter}
                  borderRadius="2"
                  borderColor="gray"
                  placeholder="Add a comment..."
                  className="border-none z-0  py-2 rounded-md dark:text-green-500 bg-black focus:ring-0 outline-none"
                />
                <button className="font-semibold mr-2 text-blue-400 hover:text-blue-600">
                  Post
                </button>
              </form>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Post;
