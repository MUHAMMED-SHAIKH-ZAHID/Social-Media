import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const isLoggedin=()=>{
    try {
        const val=localStorage.getItem('token')
        return !!val
    } catch  {
        return false
    }
}

export default function PublicRoute(){
    if(isLoggedin()){
        return  <Navigate to="/" />
    }
    else{
        return <Outlet /> 
    }
}