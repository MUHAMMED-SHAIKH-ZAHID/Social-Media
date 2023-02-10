import  { useState, useEffect } from "react";
import moment from "moment";

import { useDispatch } from "react-redux";

import {
  admindeletepost,
  adminremovepost,
  deleteReport,
  getReport,
} from "../../Redux/features/AdminSlice";
import Modal from "../Modal";
import PostDelete from "../../Components/PostDelete";

// import { useTable } from 'react-table'

const Report = () => {
  const [reports, setReports] = useState([]);
  const [reportID, setReportID] = useState("");
  const [postID, setPostID] = useState("");
  const dispatch = useDispatch();

  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);
  const [isPopup, setIsPOp] = useState("");
  const [showMyModal1, setShowMyModal1] = useState(false);
  const handleOnClose1 = () => setShowMyModal(false);
  const [isPopup1, setIsPOp1] = useState("");

  useEffect(() => {
    dispatch(getReport()).then((res) => {
      console.log(res.payload, "Reports");
      setReports(res?.payload?.report);
    });
  }, [isPopup, isPopup1]);

  const data = { postID: postID, reportID: reportID };

  return (
    <div>
      <table className="shadow-2xl  font-[popins] m-10 w-[100%] border-black ">
        <thead className="text-black mx-auto ">
          {" "}
          USER DETAILS
          <tr>
            <th className="bg-zinc-600 text-white mx-auto p-4 font-medium font-mono hover:opacity-80 hover:text-black">
              Reporter
            </th>
            <th className="bg-zinc-600 text-white mx-auto p-4 font-medium font-mono hover:opacity-80 hover:text-black">
              Posted user
            </th>
            <th className="bg-zinc-600 text-white mx-auto p-4 font-medium font-mono hover:opacity-80 hover:text-black">
              Posted Image
            </th>
            <th className="bg-zinc-600 text-white mx-auto p-4 font-medium font-mono hover:opacity-80 hover:text-black">
              Reason
            </th>
            <th className="bg-zinc-600 text-white mx-auto p-4 font-medium font-mono hover:opacity-80 hover:text-black">
              Reported Date
            </th>
            <th className="bg-zinc-600 text-white mx-auto p-4 font-medium font-mono hover:opacity-80 hover:text-black">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="text-cyan-900 text-center ">
          {reports?.map((obj) => {
            return (
              <tr key={obj._id} className=" border-b-2  ">
                <td>
                  <div className="px-6  flex py-3">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={obj?.userid?.profilePicture}
                      alt=""
                    />
                    <span className="py-6 px-2">
                      {obj?.userid?.firstname + " " + obj?.userid?.lastname}{" "}
                    </span>
                  </div>
                </td>

                <td>
                  <div className="px-6 flex">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={obj?.postid?.userId?.profilePicture}
                      alt=""
                    />
                    <span className="py-6 px-2">
                      {obj?.postid?.userId?.firstname +
                        " " +
                        obj?.postid?.userId?.lastname}{" "}
                    </span>
                  </div>
                </td>
                <td><img className="w-20 h-20 ml-6" src={obj?.postid?.image} alt="" /></td>
                <td className="px-6 uppercase">{obj?.reason}</td>
                <td className="px-6">
                  {moment(obj?.createdAt).format("DD/MM/YYYY")}
                </td>
                <td>
                  <div className="px-6 flex gap-2">
                    {isPopup && (
                      <div>
                        {" "}
                        <Modal
                          onClose={handleOnClose}
                          visible={showMyModal}
                          id={"container"}
                          content={
                            <PostDelete
                              setShowMyModal={setShowMyModal}
                              id={reportID}
                              setIsPOp={setIsPOp}
                              dispatches={deleteReport}
                              content={"Are you sure you want to decline this Report"}
                            />
                          }
                        ></Modal>{" "}
                      </div>
                    )}
                    <button
                      className="bg-red-700 text-white rounded-md hover:opacity-90 p-2 cursor-pointer flex"
                      onClick={() => {
                        setReportID(obj._id);
                        setIsPOp(true);
                        setShowMyModal(true);
                      }}
                    >
                      Decline
                    </button>

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
                              id={data}
                              setIsPOp={setIsPOp1}
                              dispatches={adminremovepost}
                              content={"Are you sure you want to delete this post ?"}
                            />
                          }
                        ></Modal>{" "}
                      </div>
                    )}
                    <button
                      className="bg-green-700 text-white rounded-md p-1 cursor-pointer flex"
                      onClick={() => {
                        setPostID(obj?.postid?._id);
                        setReportID(obj._id);
                        setIsPOp1(true);
                        setShowMyModal1(true);
                      }}
                    >
                      Remove Post
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* </div> */}
    </div>
  );
};
export default Report;
