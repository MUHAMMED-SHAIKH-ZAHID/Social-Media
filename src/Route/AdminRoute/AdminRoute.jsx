import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adminhome from "../../Pages/Admin/Adminhome.jsx";
import Authentication from "../../Pages/Admin/Authentication.jsx";
import AdminProtectedRoute from "./adminProtectedRoute.js";
import AdminPublicRoute from "./adminPublicRoute.js";

const AdminRoute = () => {
  return (
    <div>
      {/* <Routes> */}
      {/* <Route element={<AdminProtectedRoute />}>
        <Route path="/admin" exact element={<Adminhome />} />
        <Route path="/admin/users" exact element={<Adminhome />} />
        <Route path="/admin/report" exact element={<Adminhome />} />
        <Route path="/admin/post" exact element={<Adminhome />} />
        <Route path="/admin/singlePost" exact element={<Adminhome />} />
      </Route>

      <Route element={<AdminPublicRoute />}>
        <Route path="/admin/auth" element={<Authentication />} />
      </Route> */}
      {/* </Routes>  */}
    </div>
  );
};

export default AdminRoute;
