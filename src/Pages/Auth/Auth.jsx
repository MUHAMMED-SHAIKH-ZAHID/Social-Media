import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import   { addUser, googleUser, loginUser, signUpUser } from "../../Redux/features/AuthSlice";
import sideimage from "../../Images/halfthrotle.png";
import jwt_decode from "jwt-decode"
import {  useNavigate } from "react-router-dom";
import { getuser } from "../../Redux/features/PostSlice";


const Auth = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [isSignup, setIsSignup] = useState(false);
  const [refresh,setRefresh]= useState(false)
  
  if(refresh){
    console.log("testing refresshshh refreshh");
    dispatch(addUser())
    dispatch(getuser())
  }




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
 const [firstname,setFirstname] =useState(true)
  const [username,setUsername] = useState(true)
  const [password,setPassword] = useState(true)
  const [email,setEmail]=useState(true)
  const [confirmPass, setConfirmPass] = useState(true);
 

function handleCallbackResponse(response){
  var userObject=jwt_decode(response.credential);
  dispatch(googleUser(userObject)).then(()=>{
    setRefresh(true)
    navigate('/')
  })
}

  useEffect(()=>{
    /*global  google*/
  google.accounts.id.initialize({
  client_id :process.env.REACT_APP_GOOGLECLIENTID,
  callback: handleCallbackResponse,
});

  google.accounts.id.renderButton(
  document.getElementById("googlebtn"),
  {theme:"outline",size:"large",shape:"rectangle"}
);
 //google.accounts.id.prompt();

  },[ isSignup ])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entred to handle submmit",data.username);
    let usernameRegex =/^[a-zA-Z0-9]{5,12}$/
    let PasswordRegex =/^[a-zA-Z0-9]{5,15}$/
    let emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let firstnameRegex =/^[a-zA-Z0-9]{4,12}$/
    usernameRegex.test(data.username) ? setUsername(true) : setUsername(false)
    PasswordRegex.test(data.password) ? setPassword(true) : setPassword(false)
    if( usernameRegex.test(data.username) &&  PasswordRegex.test(data.password)){
      if (isSignup) {
        firstnameRegex.test(data.firstname) ? setFirstname(true):setFirstname(false)
        emailRegex.test(data.email) ? setEmail(true) : setEmail(false)
        if (data.password !== data.confirmpassword || data.password === undefined) {
          setConfirmPass(false);
        } else {
          console.log("password is correct" ,data.password);
          setConfirmPass(true);
          if( firstnameRegex.test(data.firstname) &&  emailRegex.test(data.email)){

            dispatch(signUpUser({data})).then(()=>{
              setRefresh(true)
              navigate('/')
            })
          }else{
            console.log("firstname or email is null")
          }
          
        }
      }else{
        console.log("the login button is working successfully")
       dispatch(loginUser({data})).then(()=>{
        setRefresh(true)
          navigate('/');
       })
      }
    }
    else{
      console.log("cannot submmit the null object");
    }

  
  
  };

  const reverseForm = () => {
    setConfirmPass(true);
    setEmail(true);
    setUsername(true)
    setPassword(true)
    setFirstname(true)
    setData({ firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",});
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
                      className="p-2 border text-zinc-600  rounded-xl w-1/2"
                      placeholder="firstname"
                      name="firstname"
                      onChange={(e)=>{
                        handleChange(e)
                       setFirstname(true)
                      }}
                      value={data.firstname}
                    />
                   

                    <input
                      className="p-2 border text-zinc-600 rounded-xl w-1/2"
                      type="text"
                      placeholder="lastname"
                      name="lastname"
                      onChange={handleChange}
                      value={data.lastname}
                    />
                  </div>
                  </>
              )}
               <span style={{display: firstname ? "none" : "block" ,color:"red",fontSize:"12px"}}>First name Required</span>

                  <input
                    className="p-2 border text-zinc-600 rounded-xl"
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={(e)=>{
                      handleChange(e)
                     setUsername(true)
                    }}
                    value={data.username}
                  />
                   <span
                style={{
                  display: username ? "none" : "block",
                  color: "red",
                  fontSize: "12px",
                }}
              >
               Username should be atleast 5 characters
              </span>
               
              {isSignup &&(<>
              <input 
                className="p-2 border text-zinc-600  rounded-xl"
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e)=>{
                  handleChange(e)
                 setEmail(true)
                }}
                value={data.email}
              />
                  <span
                style={{
                  display: email ? "none" : "block",
                  color: "red",
                  fontSize: "12px",
                }}
              >
               Enter a Valid Email
              </span>
              
              
              </>)}
               
              <input
                className="p-2 border text-zinc-600  rounded-xl"
                type="text"
                placeholder="password"
                name="password"
                onChange={(e)=>{
                  handleChange(e)
                 setPassword(true)
                }}
                value={data.password}
              />
              <span
                style={{
                  display: password ? "none" : "block",
                  color: "red",
                  fontSize: "12px",
                }}
              >
               Password should be min 5 characters
              </span>

              {isSignup && (
                <input
                  type="text"
                  className="p-2 border text-zinc-600 rounded-xl"
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
                  {/* <button className="bg-white border py-2 w-full rounded-xl mt-4 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
                    {" "}
                    {isSignup ? "SignUp" : "LogIn"} with Google
                  </button> */}
                 
                </>
              )}
              <section className="flex align-middle justify-center hover:scale-110 duration-300 " > <div id="googlebtn" style={{
                  display: isSignup ? "none" : "block"}}></div></section>
              <hr className="text-gray-400" />

              <div>
                <button
                  style={{ cursor: "pointer" }}
                  className="text-sm hover:scale-x-105 duration-300 text-black "
                  onClick={(e) => {
                    e.preventDefault()
                    setIsSignup((prev) => !prev)
                    reverseForm()
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
