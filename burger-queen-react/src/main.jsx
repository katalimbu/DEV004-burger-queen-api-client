
import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import "./index.css"
import Login from "./components/Login/Login.jsx"
import Kitchen from "./components/Orders/Kitchen"
import Waiter from "./components/Orders/Waiter"
import Menu from "./components/Menu/menu"
import Admi from "./components/Users/Admi"
import Edit from "./components/Users/Edit"
import CreateUser from "./components/Users/createUser"
import CreateProduct from "./components/Products/CreateProduct"
import EditProduct from "./components/Products/EditProduct"
import AdmiProduct from "./components/Products/AdmiProduct"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/login",
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
  },
  {
    path:"/newproduct",
    element: <CreateProduct />
  },
  {
    path: "/editproduct/:id",
    element: <EditProduct />
  },
  {
    path: "/admiproduct",
    element: <AdmiProduct />
  }
]);
// export const ApiUrl = 'http://localhost:8080'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);




