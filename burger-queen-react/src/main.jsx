
import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import "./index.css"
import Login from "./components/Login/Login.jsx"
import Breakfast from "./components/Products/Breakfast"
import Dinner from "./components/Products/Dinner"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/breakfast",
    element: <Breakfast />
  },
  {
    path: "/dinner",
    element: <Dinner />
  }
]);
// export const ApiUrl = 'http://localhost:8080'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);




