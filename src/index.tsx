import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Shop from './routes/Shop'
import Navbar from './components/navbar/Navbar'
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import SignIn from './routes/SignIn';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App/>,
      },
      {
        path: "shop",
        element: <Shop/>,
      },
      {
        path: "signin",
        element: <SignIn/>
      }
    ]
  },

]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
