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

export default function AdminProtectedRoute(){
    if(isLoggedin()){
        return <Outlet />
    }
    else{
        return <Navigate to="/admin/auth" />
    }
}