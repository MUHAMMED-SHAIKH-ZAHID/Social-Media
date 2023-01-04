import { lazy, Suspense, useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import {Routes,Route,Navigate} from 'react-router-dom'
import Profile from "./Components/Profile";
import Home from "./Pages/Home";
import Saved from "./Pages/Saved";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { addUser } from "./Redux/features/AuthSlice";
const Auth = lazy(()=>import('./Pages/Auth/Auth.jsx'))


function App() {

  const {user} = useSelector((state)=>state)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addUser())
  },[])
  console.log(user.token === undefined,"user",user.user);
  
  

  return (
    <div className="App dark:text-white">
      <h1>
        {/* user chechk{user} */}
      </h1>
        <Suspense fallback={<h1>loading...</h1>}>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" exact element ={<Home />} />
          <Route path='/profile' exact element ={<Home />} />
          <Route path='/saved' exact element ={<Home />} />
        </Route>
       
        <Route element={<PublicRoute />}>
        <Route path="/auth" element ={<Auth />} />
        </Route>
      </Routes>
        </Suspense>

    </div>
  );
}

export default App;
