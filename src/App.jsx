import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/home/Home"
import AddGig from "./pages/addGig/AddGig"
import Gig from "./pages/gig/Gig"
import Gigs from "./pages/gigs/Gigs"
import Login from "./pages/login/Login"
import Message from "./pages/message/Message"
import Messages from "./pages/messages/Messages"
import MyGig from "./pages/myGig/MyGig"
import Order from "./pages/orders/Order"
import Register from "./pages/register/Register"
import Footer from "./Components/Footer";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/Gig",
          element: <Gig />
        },
        {
          path: "/AddGig",
          element: <AddGig />
        },
        {
          path: "/Gigs",
          element: <Gigs />
        },
        {
          path: "/Login",
          element: <Login />
        },
        {
          path: "/Message",
          element: <Message />
        },
        {
          path: "/Messages",
          element: <Messages />
        },
        {
          path: "MyGig",
          element: <MyGig />
        },
        {
          path: "Orders",
          element: <Order />
        },
        {
          path: "Register",
          element: <Register />
        }
      ]
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
