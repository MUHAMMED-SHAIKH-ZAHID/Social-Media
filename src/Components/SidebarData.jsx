import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "../Pages/Modal";
import { getuser, userProfile } from "../Redux/features/PostSlice";
import Navbottom from "./Navbottom";
import Notifications from "./Notifications";
import PostFormCard from "./PostFormCard";
import UserProfile from "./UserProfile";
import moon from "../Images/moon.jpg"
import earth from '../Images/earth.jpg'
import MiniProfile from "./MiniProfile";

const SidebarData = ({ toggle, count, setToggle,handleThemeSwitcher,theme }) => {
  const user = useSelector((state) => state.post?.currentUserDetails);
  const details = user?.notification;
  const location = useLocation();
  const homeActive = location.pathname === "/";
  const profileActive = location.pathname === "/profile";
  const savedActive = location.pathname === "/saved";
  const messageActive = location.pathname === "/messages";
  console.log("location ", location.pathname, homeActive);
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);
  const [notificationBar, SetNotificationBar] = useState(false);
  const NotificationHandle = () => {
    console.log("nooooooooooooooooooooooooo");
    setToggle(!toggle);
    SetNotificationBar(!!!notificationBar);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect in the sidebar data componenet");
    dispatch(getuser());
  }, [toggle]);

  const profileClick = () => {
    let id = user._id;
    console.log("profile  clicked", id);
    dispatch(userProfile(id));
  };

  const navigate = useNavigate()
  const [refresh,setRefresh]=useState(false)
  const logout=()=>{
    localStorage.clear("token")
    setRefresh(true)
    navigate('/auth')
}
  return (
    <>
      <div className="hidden lg:block">
        <div className="flex  mb-10 mt-2">
          {/* <img src={logo} alt='logo' /> */}
          <img
            className={`${toggle && "h-12 w-12"} h-16 w-16`}
            src={
              process.env.PUBLIC_URL +
              "../icons8-black-and-white-ios-16-filled-96.png"
            }
          />
          {!toggle && (
            <p className="delay-200 align-middle pl-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-bold mt-4">
              Social Media
            </p>
          )}
        </div>
        <Link to={"/"}>
          <div
            className={`sidebar ${
              homeActive &&
              "bg-gradient-to-r from-pink-500 to-violet-500 shadow-lg  text-black text-lg"
            } truncate `}
          >
            <div
              onClick={() => setToggle(false)}
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
              {!toggle && <p className="delay-200 align-middle pl-3">Home</p>}
            </div>
          </div>
        </Link>

        <Link to={"/messages"}>
          {" "}
          <div
            onClick={() => setToggle(false)}
            className={`sidebar ${
              messageActive &&
              "bg-gradient-to-r from-pink-500 to-violet-500 shadow-lg text-black text-lg "
            }truncate `}
          >
            <div className=" flex max-w-[2.5rem] h-[2.5rem]">
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  className="ml-0.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8z"
                  />
                </svg>
              </div>
              <p
                className={toggle ? "opacity-0 delay-200" : "align-middle pl-3"}
              >
                Messages
              </p>
            </div>
          </div>
        </Link>

        <Link to={"/saved"}>
          {" "}
          <div
            onClick={() => setToggle(false)}
            className={`sidebar ${
              savedActive &&
              "bg-gradient-to-r from-pink-500 to-violet-500 shadow-lg text-black text-lg "
            }truncate `}
          >
            <div className=" flex max-w-[2.5rem] h-[2.5rem]">
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 ml-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p
                className={toggle ? "opacity-0 delay-200" : "align-middle pl-3"}
              >
                Saved
              </p>
            </div>
          </div>
        </Link>

        <Modal
          onClose={handleOnClose}
          visible={showMyModal}
          id={"container"}
          content={<PostFormCard setShowMyModal={setShowMyModal} />}
        ></Modal>
        <div
          onClick={() => setShowMyModal(true)}
          className={`sidebar truncate`}
        >
          <div className=" flex max-w-[2.5rem] h-[2.5rem]">
            <div>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                className="ml-0.5"
              >
                <path
                  fill="currentColor"
                  d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-3h3.025q.425 0 .7-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11h-3V7.975q0-.425-.287-.7Q12.425 7 12 7t-.712.287Q11 7.575 11 8v3H7.975q-.425 0-.7.287Q7 11.575 7 12t.287.712Q7.575 13 8 13h3v3.025q0 .425.288.7q.287.275.712.275Zm0 5q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
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
            <div className="relative">
              <svg
                id="notificationButtonSvg"
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
                className="ml-0.5 z-50"
              >
                <path
                  fill="currentColor"
                  d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7c0-2.42-1.72-4.44-4.005-4.901z"
                />
              </svg>

              <span className="absolute text-xs text-red-500 bg-zinc-800 pl-1 pt-0.  h-4 w-4 rounded-full inset-x-3 -top-2 z-10 ">
                {details?.length}
              </span>
            </div>
            <p className={toggle ? "opacity-0 delay-200" : "align-middle pl-5"}>
              Notification
            </p>
          </div>
        </div>

        

<div onClick={handleThemeSwitcher} className="flex  sidebar pb-2">
{theme === 'dark'&& <img  src={moon} style={{width:"32px" ,borderRadius:"50%"}}/>}
{theme === 'light'&& <img  src={earth} style={{width:"32px" ,borderRadius:"50%"}}/>}
        <p
                className={toggle ? "opacity-0 delay-200" : "align-middle pl-3"}
              >
              {theme === 'dark' ? "dark" :"light"}  Theme
              </p>
              </div>

              <div onClick={()=>{
            logout()
        }} className="sidebar pb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>
<p className={toggle ? "opacity-0 delay-200" : "align-middle pl-5"}>
              Logout
            </p>
              </div>
              

        <Link to={"/profile"}>
          {" "}
          <div
            onClick={() => {
              setToggle(false);
              profileClick();
            }}
            className={` ${profileActive && " text-lg"} fixed bottom-1 inset-x-0 absolute hover:opacity-70 `}
          >
            <UserProfile toggle={toggle} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default SidebarData;
