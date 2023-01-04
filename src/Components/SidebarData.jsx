import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "../Pages/Modal";
import PostFormCard from "./PostFormCard";
import UserProfile from "./UserProfile";
// import logo from '../../public/icons8-black-and-white-ios-16-filled-96.png'

const SidebarData = ({ toggle, setToggle }) => {
  const location = useLocation();
  const homeActive = location.pathname === "/";
  const profileActive = location.pathname === "/profile";
  const savedActive = location.pathname === "/saved";
  console.log("location ", location.pathname, homeActive);
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);
  const [notificationBar, SetNotificationBar] = useState(false);
  const NotificationHandle = () => {
    console.log("nooooooooooooooooooooooooo");
    setToggle(!toggle);
    SetNotificationBar(!!!notificationBar);
  };
  return (
    <div className="">
      <div className="flex  mb-10 mt-2">
        {/* <img src={logo} alt='logo' /> */}
        <img className={`${toggle && 'h-12 w-12'} h-16 w-16`} src={process.env.PUBLIC_URL + '../icons8-black-and-white-ios-16-filled-96.png'} /> 
        {!toggle &&<p className="delay-200 align-middle pl-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-bold mt-4">
              Social Media
            </p>}
      </div>
      <Link to={"/"}>
        <div
          className={`sidebar ${
            homeActive && "bg-white shadow-lg  text-black text-lg"
          } truncate `}
        >
          <div onClick={()=>setToggle(false)} className=" flex max-w-[2.5rem] h-[2.5rem] ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={`${toggle ? 'white' : "none"} `}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            {!toggle &&<p className="delay-200 align-middle pl-3">
              Home
            </p>}
          </div>
        </div>
      </Link>

      <Link to={"/saved"}>
        {" "}
        <div
        onClick={()=>setToggle(false)} 
          className={`sidebar ${
            savedActive && "bg-white shadow-lg text-black text-lg "
          }truncate `}
        >
          <div className=" flex max-w-[2.5rem] h-[2.5rem]">
            <div>
              {" "}
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
            <p className={toggle ? "opacity-0 delay-200" : "align-middle pl-3"}>
              Saved
            </p>
          </div>
        </div>
      </Link>

      <Modal
        onClose={handleOnClose}
        visible={showMyModal}
        id={"container"}
        content={<PostFormCard />}
      ></Modal>
      <div onClick={() => setShowMyModal(true) } className={`sidebar truncate`}>
        <div className=" flex max-w-[2.5rem] h-[2.5rem]">
          <div>
            {" "}
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
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className={toggle ? "opacity-0 delay-200" : "align-middle pl-3"}>
            Create
          </p>
        </div>
      </div>

      <div
        onClick={() => {
          NotificationHandle();
        }}
        className={`sidebar truncate`}
      >
        <div className=" flex max-w-[2.5rem] h-[2.5rem]">
          <div>
            {" "}
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <p className={toggle ? "opacity-0 delay-200" : "align-middle pl-3"}>
            Notification
          </p>
        </div>
      </div>

      <Link to={"/profile"}>
        {" "}
        <div onClick={()=>setToggle(false)}  className={` ${profileActive && " text-lg"} `}>
          <UserProfile toggle={toggle} />
        </div>
      </Link>
    </div>
  );
};

export default SidebarData;
