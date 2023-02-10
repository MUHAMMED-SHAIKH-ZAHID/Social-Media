import {  useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { addUser } from "./Redux/features/AuthSlice";
import { getuser } from "./Redux/features/PostSlice";
import MainRoute from "./Route/MainRoute";



function App() {



  const {user} = useSelector((state)=>state)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addUser())
    dispatch(getuser())
  },[])
  console.log(user.token === undefined,"user",user.user);
  


  return (
    <div className="App dark:text-white">
  
      <MainRoute /> 
    
    

    </div>
  );
}

export default App;
