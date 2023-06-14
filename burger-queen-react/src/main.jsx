
import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import "./index.css"
import Login from "./components/Login/Login.jsx"

import Kitchen from "./components/Orders/Kitchen"
import Waiter from "./components/Orders/Waiter"
import Menu from "./components/Products/menu"
// import Dinner from "./components/Products/Dinner"




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
  }
]);
// export const ApiUrl = 'http://localhost:8080'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);




