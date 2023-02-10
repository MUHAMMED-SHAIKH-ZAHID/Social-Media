import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const isLoggedin=()=>{
    try {
        const val=localStorage.getItem('Token')
        return !!val
    } catch  {
        return false
    }
}

export default function AdminPublicRoute(){
    if(isLoggedin()){
        return  <Navigate to="/admin/" />
    }
    else{
        return <Outlet /> 
    }
}