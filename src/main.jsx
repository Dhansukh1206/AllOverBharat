import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import "./styles.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import PackageDetails from "./pages/PackageDetails.jsx";
import Offers from "./pages/Offers.jsx";
import About from "./pages/About.jsx";
import Blogs from "./pages/Blogs.jsx";
import Profile from "./pages/Profile.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blogs /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/offers", element: <Offers /> },
      { path: "/profile", element: <Profile /> },
      { path: "/packages/:slug", element: <PackageDetails /> },
      { path: "/packages", element: <Navigate to="/" replace /> },
      { path: "/events", element: <Navigate to="/" replace /> },
      { path: "/contact", element: <Navigate to="/about" replace /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
