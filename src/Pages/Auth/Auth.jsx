import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, signUpUser } from "../../Redux/features/AuthSlice";
import sideimage from "../../Images/halfthrotle.png";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const dispatch=useDispatch()

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [confirmPass, setConfirmPass] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entred to handle submmit");

    if (isSignup) {
      if (data.password !== data.confirmpassword) {
        setConfirmPass(false);
      } else {
        console.log("password is correct" ,data);
        setConfirmPass(true);
        dispatch(signUpUser({data}))
        
      }
    }else{
      console.log("the login button is working successfully")
      dispatch(loginUser({data}))
    }
  };

  const reverseForm = () => {
    setConfirmPass(true);
    setData({});
  };

  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-xl max-w-3xl p-5">
          {/* form */}
          <div className="sm:w-1/2 px-8">
            <h2 className="font-bold text-2xl text-[#002D74] ">
              {isSignup ? "SignUp" : "LogIn"}
            </h2>
            <p className="text-sm mt-4 text-[#002D74] mb-6">
              if you already a member, easily login
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {isSignup && (
                <>
                  <div>
                    <input
                      type="text"
                      className="p-2 border  rounded-xl w-1/2"
                      placeholder="firstname"
                      name="firstname"
                      onChange={handleChange}
                      value={data.firstname}
                    />

                    <input
                      className="p-2 border rounded-xl w-1/2"
                      type="text"
                      placeholder="lastname"
                      name="lastname"
                      onChange={handleChange}
                      value={data.lastname}
                    />
                  </div>
                  </>
              )}

                  <input
                    className="p-2 border rounded-xl"
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={handleChange}
                    value={data.username}
                  />
               
              {isSignup &&
              <input
                className="p-2 border  rounded-xl"
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
              />
               }
               
              <input
                className="p-2 border  rounded-xl"
                type="text"
                placeholder="password"
                name="password"
                onChange={handleChange}
                value={data.password}
              />

              {isSignup && (
                <input
                  type="text"
                  className="p-2 border  rounded-xl"
                  placeholder="confirmpassword"
                  name="confirmpassword"
                  onChange={handleChange}
                  value={data.confirmpassword}
                />
              )}
              <span
                style={{
                  display: confirmPass ? "none" : "block",
                  color: "red",
                  fontSize: "12px",
                }}
              >
                Conform password is not 'same
              </span>
              <button
                type="submit"
                className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 "
              >
                {isSignup ? "SignUp" : "LogIn"}
              </button>

              {isSignup ? (
                ""
              ) : (
                <>
                  <div className="mt-5 grid grid-cols-3 items-center text-gray-500">
                    <hr className="text-gray-400" />
                    <p className="text-center">OR</p>
                    <hr className="text-gray-400" />
                  </div>
                  <button className="bg-white border py-2 w-full rounded-xl mt-4 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
                    {" "}
                    {isSignup ? "SignUp" : "LogIn"} with Google
                  </button>
                </>
              )}
              <hr className="text-gray-400" />

              <div>
                <button
                  style={{ cursor: "pointer" }}
                  className="text-sm hover:scale-x-105 duration-300 "
                  onClick={() => {
                    setIsSignup((prev) => !prev);
                    reverseForm();
                  }}
                >
                  {" "}
                  {isSignup
                    ? "Already Have an Account.Login!"
                    : "Don't have an account SignUp"}
                </button>
              </div>
            </form>
          </div>

          {/* Image */}

          <div className="sm:block hidden w-1/2 ">
            <img className=" rounded-2xl " src={sideimage} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auth;
