import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Admingoogle, adminlogin } from "../../Redux/features/AuthSlice";
import jwt_decode from "jwt-decode";

const Authentication = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  if (refresh) {
    console.log("testing refresshshh refreshh");
  }

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [username, setUsername] = useState(true);
  const [password, setPassword] = useState(true);

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    dispatch(Admingoogle(userObject)).then(() => {
      setRefresh(true);
      navigate("/");
    });
  }

  useEffect(() => {
    /*global  google*/
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLECLIENTID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("googlebtn"), {
      theme: "outline",
      size: "large",
      shape: "rectangle",
    });
    //google.accounts.id.prompt();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entred to handle submmit", data.username);
    let usernameRegex = /^[a-zA-Z0-9]{5,12}$/;
    let PasswordRegex = /^[a-zA-Z0-9]{5,15}$/;
    usernameRegex.test(data.username) ? setUsername(true) : setUsername(false);
    PasswordRegex.test(data.password) ? setPassword(true) : setPassword(false);
    if (
      usernameRegex.test(data.username) &&
      PasswordRegex.test(data.password)
    ) {
      dispatch(adminlogin({ data })).then(() => {
        setRefresh(true);
        navigate("/admin");
      });
    } else {
      console.log("cannot submmit the null object");
    }
  };

  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-2xl max-w-3xl p-5">
          {/* form */}
          <div className=" px-8">
            <h2 className="font-bold text-2xl text-[#002D74] ">Admin LogIn</h2>
            <p className="text-sm mt-4 text-[#002D74] mb-6">
              if you already a member, easily login
            </p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                className="p-2 border text-zinc-600 rounded-xl"
                type="text"
                placeholder="username"
                name="username"
                onChange={(e) => {
                  handleChange(e);
                  setUsername(true);
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

              <input
                className="p-2 border text-zinc-600  rounded-xl"
                type="password"
                placeholder="password"
                name="password"
                onChange={(e) => {
                  handleChange(e);
                  setPassword(true);
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
              <button
                type="submit"
                className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 "
              >
                Login
              </button>
              <div className="mt-5 grid grid-cols-3 items-center text-gray-500">
                <hr className="text-gray-400" />
                <p className="text-center">OR</p>
                <hr className="text-gray-400" />
              </div>
              <section className="flex align-middle justify-center hover:scale-110 duration-300 ">
                {" "}
                <div id="googlebtn"></div>
              </section>
              <hr className="text-gray-400" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Authentication;
