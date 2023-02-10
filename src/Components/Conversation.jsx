import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, getMessages } from "../Redux/features/Chatslice";
import { getspecificuser } from "../Redux/features/PostSlice";
import InputEmoji from "react-input-emoji";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

const Conversation = ({
  chat,
  currentuserid,
  setSendMessage,
  recieveMessage,
  setHide,
}) => {

  const dispatch = useDispatch();
  // const location = useLocation()
  // const id = location?.state?.id
  //console.log("its the chat id in the conversation component",id);
  
  const [userDataCB, setUserDataCB] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scroll = useRef();
  const params = {
    userid: {
      id: "",
    },
  };

  useEffect(() => {
    if (recieveMessage !== null && recieveMessage.chatId === chat._id) {
      setMessages([...messages, recieveMessage]);
    }
  }, [recieveMessage]);

  const handleSend = (e) => {
    e.preventDefault();
    const message = {
      text: newMessage,
      chatId: chat._id,
    };
    dispatch(addMessage(message)).then((res) => {
      setMessages([...messages, res.payload]);
      setNewMessage("");
    });

    //send messge to socket server
    const receiverId = chat.members.find((id) => id !== currentuserid);
    console.log(receiverId,"reciever Id",message);
    setSendMessage({ ...message, receiverId });
  };

  useEffect(() => {
    if (chat.length !== 0) {
      params.userid.id = chat?.members?.find((id) => id !== currentuserid);
      dispatch(getspecificuser(params.userid.id)).then((res) => {
        console.log(res?.payload?.otherDetails);
        setUserDataCB(res?.payload);
      });
    }
  }, [chat, currentuserid]);

  useEffect(() => {
    if (chat.length !== 0) {
      dispatch(getMessages(chat._id)).then((res) => {
        setMessages(res.payload);
        console.log(res);
      });
    }
  }, [chat, currentuserid]);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  console.log([...messages], "its the chat user details nfsnfsnfs");

  return (
    <div>
      <div>
        {chat.length !== 0 ? (
          <>
            <>
              <div className=" hover:cursor-pointer">
                <div>
                  <div className="flex items-center gap-1 my-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      onClick={() => {
                        setHide(true);
                      }}
                      className="w-8 h-8 font-extrabold"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>

                    <img
                      className="w-12 h-12 rounded-full flex"
                      src={userDataCB?.profilePicture}
                      alt=""
                    />
                    <div className="name font-semibold ">
                      <span>{userDataCB?.username}</span>
                      <br />
                    </div>
                  </div>
                </div>
              </div>

              <>
                <div className="overflow-auto  scrollbar-thin postComments">
                  {messages?.map((message) => (
                    <div key={message._id}>
                      {message.senderId === currentuserid ? (
                        <div
                          ref={scroll}
                          className="flex flex-row-reverse mr-1 lg:mr-0"
                        >
                          <div className="  bg-zinc-700 rounded-lg leading-4 px-4 py-2 mt-1 max-w-[60%] ">
                            <div className=" text-white items-center   ">
                              {message?.text}
                              <p className=" text-gray-300 text-time flex justify-end ">
                                <Moment fromNow>{message.createdAt}</Moment>
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          ref={scroll}
                          className="flex flex-grow-0 ml-1 lg:ml-0 "
                        >
                          <div className=" items-center bg-white rounded-lg leading-4 px-4 py-1 mt-1">
                            <div className=" text-black  ">
                              {message?.text}
                              <br />
                              <p className=" text-gray-700 text-time flex justify-end">
                                <Moment fromNow>{message.createdAt}</Moment>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            </>
            <div className="absolute lg:w-[30%] w-[95%] sm:bottom-3 bottom-20 md:w-[50%]">
              <div className="flex mt-3 gap-3 items-center">
                <InputEmoji
                  value={newMessage}
                  onChange={setNewMessage}
                  placeholder="Type a message"
                />
                <button className="" onClick={handleSend}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            {" "}
            Tap on the chat to start Conversation...{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Conversation;
