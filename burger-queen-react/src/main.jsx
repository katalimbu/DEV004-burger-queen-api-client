
import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import "./index.css"
import Login from "./components/Login/Login.jsx"

import Kitchen from "./components/Orders/Kitchen"
import Waiter from "./components/Orders/Waiter"
import Menu from "./components/Products/menu"
import Admi from "./components/Users/Admi"
import Edit from "./components/Users/Edit"
import CreateUser from "./components/Users/createUser"




const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/menu",
    element: <Menu/>
  },
  {
    path: "/kitchen",
    element: <Kitchen />
  },
  {
    path: "/waiter",
    element: <Waiter />
  },
  {
    path: "/Admi",
    element: <Admi />
  },
  {
    path: "/Edit/:id",
    element: <Edit />
  },
  {
    path:"/newuser",
    element: <CreateUser />
  }
]);
// export const ApiUrl = 'http://localhost:8080'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);




