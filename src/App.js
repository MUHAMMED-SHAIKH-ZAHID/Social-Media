import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from "./Pages/Home";
import { authslice } from "./Redux/features/AuthSlice";
const Auth = lazy(()=>import('./Pages/Auth/Auth.jsx'))

const user=useSelector(authslice.actions.state)

function App() {
  return (
    <div className="App">
     
        <Suspense fallback={<h1>loading...</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />}  />
      </Routes>
        </Suspense>

    </div>
  );
}

export default App;
