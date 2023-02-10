import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adminhome from "../Pages/Admin/Adminhome.jsx";
import Authentication from "../Pages/Admin/Authentication.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import Home from "../Pages/Home.jsx";
import AdminProtectedRoute from "./AdminRoute/adminProtectedRoute.js";
import AdminPublicRoute from "./AdminRoute/adminPublicRoute.js";
import AdminRoute from "./AdminRoute/AdminRoute.jsx";
import ProtectedRoute from "./ProtectedRoute.js";
import PublicRoute from "./PublicRoute.js";
const Auth = lazy(() => import("../Pages/Auth/Auth.jsx"));

const RoutePage = () => {
  return (
    <div>
      <Suspense fallback={<h1>loading...</h1>}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" exact element={<Home />} />
            <Route path="/profile" exact element={<Home />} />
            <Route path="/saved" exact element={<Home />} />
            <Route path="/singlepost" element={<Home />} />
            <Route path="/messages" element={<Home />} />
            <Route path="/conversation" element={<Home />} />
            <Route path="/notification" element={<Home />} />
            <Route path="/search" element={<Home />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="/auth" element={<Auth />} />
            singlepost
          </Route>

          <Route path="*" element={<ErrorPage />} />
          <Route element={<AdminProtectedRoute />}>
            <Route path="/admin" exact element={<Adminhome />} />
            <Route path="/admin/users" exact element={<Adminhome />} />
            <Route path="/admin/report" exact element={<Adminhome />} />
            <Route path="/admin/post" exact element={<Adminhome />} />
            <Route path="/admin/singlePost" exact element={<Adminhome />} />
          </Route>

          <Route element={<AdminPublicRoute />}>
            <Route path="/admin/auth" element={<Authentication />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default RoutePage;
