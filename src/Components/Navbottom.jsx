import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbottom = () => {
  const profile = useSelector(state=> state?.post?.currentUserDetails)
  const navigate = useNavigate()
  const icons = [
    {
      target: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          preserveAspectRatio="xMidYMid meet"
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
      ),
    },
    {
      target: "/search",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
      </svg>
      
      ),
  },
    {
      target: "/messages",
      icon: (
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
      ),
  },
    {
      target: "/saved",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 "
        >
          <path
            fillRule="evenodd"
            d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      target: "/notification",
      icon: (
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
      ),
    },
   
   
  ];

  const items = icons.map((icon, index) => (
    <Link
      to={icon?.target}
      id={icon?.id}
      onClick={icon.onClick}
      key={index}
      className="p-4 hover:bg-black hover:bg-opacity-40 rounded-xl cursor-pointer transition-all duration-150"
    >
      {icon.icon}
    </Link>
  ));
  return (
    <div>
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 py-2  px-8 pr-14 bg-black bg-opacity-70 text-white backdrop-blur-md rounded-2xl z-[999] ">
        <ul className="list-none flex gap-2">{items}
     <img onClick={()=>{navigate('/profile')}} src={profile?.profilePicture} alt="" className='w-9 h-9 pr-1 pt-3 rounded-full object-cover'/></ul>
      </nav>
    </div>
  );
};

export default Navbottom;
