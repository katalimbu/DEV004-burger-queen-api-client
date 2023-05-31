
import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import "./index.css"
import Login from "./components/Login/Login.jsx"
import Breakfast from "./components/Products/Breakfast"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/breakfast",
    element: <Breakfast />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);




