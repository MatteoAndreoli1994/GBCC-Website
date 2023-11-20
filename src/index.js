import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
import Add from "./Add";
import Add2 from "./staking/Add2";
import AddCopia from "./Addcopia";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/registration",
    element: <Add />,
  },
  {
    path: "/leveling",
    element: <Add2 />,
  },  
  {
    path: "/copia",
    element: <AddCopia />,
  }
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    

    <RouterProvider router={router}/>



  </React.StrictMode>
);


