import react, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PostDelete from "../../Components/PostDelete";
import {
  blockOrUnBlockUsers,
  getAllUsers,
} from "../../Redux/features/AdminSlice";

import Modal from "../Modal";

const AllUsers = () => {
    const [showMyModal, setShowMyModal] = useState(false);
    const handleOnClose = () => setShowMyModal(false);
    const [isPopup, setIsPOp] = useState("");
    const [showMyModal1, setShowMyModal1] = useState(false);
    const handleOnClose1 = () => setShowMyModal(false);
    const [isPopup1, setIsPOp1] = useState("");
  const [users, setUsers] = useState([]);
  const [openModalBlock, setOpenModalBlock] = useState(false);
  const [confirmAction, setConfirmAction] = useState(false);
  const [confirmId, setConfirmId] = useState("");
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getAllUsers()).then((res) => {
      //console.log(res.payload);
      setUsers(res.payload);
    });
  }, [refresh,showMyModal,showMyModal1]);

  const handleBlock_UnBlockUser = (userid, isblock) => {
    dispatch(blockOrUnBlockUsers({ userid: userid, isBlock: isblock })).then(
      (res) => {
        console.log(res, "handle");
        setConfirmAction(false);
        setConfirmId("");
        setRefresh(!refresh);
      }
    );
  };
  const datablocked =  {userid:confirmId, isBlock: true}
  const dataunblocked =  {userid:confirmId, isBlock: false}
  
  return (
    <div>
     

     <Modal
                          onClose={handleOnClose}
                          visible={showMyModal}
                          id={"container"}
                          content={
                            <PostDelete
                              setShowMyModal={setShowMyModal}
                              id={dataunblocked}
                              setIsPOp={setIsPOp}
                              dispatches={blockOrUnBlockUsers}
                              content={"Are You Sure You Want To Block This User"}
                            />
                          }
                        ></Modal>

                        
                    {isPopup1 && (
                      <div>
                        {" "}
                        <Modal
                          onClose={handleOnClose1}
                          visible={showMyModal1}
                          id={"containers"}
                          content={
                            <PostDelete
                              setShowMyModal={setShowMyModal1}
                              id={datablocked}
                              setIsPOp={setIsPOp1}
                              dispatches={blockOrUnBlockUsers}
                              content={"Are You Sure You Want To Unblock This User"}
                            />
                          }
                        ></Modal>{" "}
                      </div>
                    )}
      

      <table className="shadow-3xl  font-[popins] border-2 border-black  ">
        <thead className="text-white sticky top-0 ">
          <tr>
            <th className="bg-zinc-600 text-white px-12 p-4 font-medium font-mono hover:opacity-80 hover:text-black  ">Name</th>
            <th className="bg-zinc-600 text-white px-12 p-4 font-medium font-mono hover:opacity-80 hover:text-black ">Email</th>
            <th className=" bg-zinc-600 text-white px-12 p-4 font-medium font-mono hover:opacity-80 hover:text-black">verified</th>
            <th className=" bg-zinc-600 text-white px-12 p-4 font-medium font-mono hover:opacity-80 hover:text-black">Followers</th>
            <th className=" bg-zinc-600 text-white px-12 p-4 font-medium font-mono hover:opacity-80 hover:text-black">Following</th>

            <th className="bg-zinc-600 text-white px-12 p-4 font-medium font-mono hover:opacity-80 hover:text-black ">status</th>
            <th className=" bg-zinc-600 text-white px-12 p-4 font-medium font-mono hover:opacity-80 hover:text-black">Action</th>
          </tr>
        </thead>
        <tbody className="text-cyan-900 text-center ">
          {users?.map((obj) => {
            return (
              <tr key={obj._id} className="  ">
                <td>
                  <div className="px-6  flex py-3">
                    <img
                      className="w-12 h-12"
                      src={obj?.profilePicture}
                      alt=""
                    />
                    <span className="py-2 px-6">
                      {obj?.firstname + " " + obj?.lastname}{" "}
                    </span>
                  </div>
                </td>
                <td>{obj.email} </td>
                <td className="py-2 px-16">{obj.email_verified ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
</svg>: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>

}</td>
                <td>{obj.total_followers} </td>
                <td>{obj.total_following} </td>

                <td className=" px-12 ">
                  {!obj?.isBlock && (
                    <div
                      className={`${!obj?.isBlock} text-green-500 font-extrabold rounded-md p-2 flex items-end gap-2`}
                    >
                      <div className="">Active</div>

                      <div>
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
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  )}

                  {obj?.isBlock && (
                    <div
                      className={`${!obj?.isBlock} text-red-500 font-extrabold rounded-md p-2 flex items-end gap-2`}
                    >
                      <div className="">Blocked</div>

                      <div>
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
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </td>

                <td className=" px-16">
                  {!obj?.isBlock ? (
                    <button
                      className="bg-red-700 text-white rounded-full  items-center cursor-pointer flex"
                      onClick={() => {
                        setConfirmId(obj?._id);
                        setIsPOp(true);
                        setShowMyModal(true);
                        setRefresh(!refresh);
                      }}
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
                          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      className="bg-green-700 text-white rounded-full  items-center cursor-pointer  flex"
                      onClick={() => {
                        setConfirmId(obj?._id);
                        setIsPOp1(true);
                        setShowMyModal1(true);
                        setRefresh(!refresh);
                      }}
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
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  )}

                  {confirmId === obj?._id &&
                    confirmAction &&
                    handleBlock_UnBlockUser(obj._id, obj.isBlock)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default AllUsers;
