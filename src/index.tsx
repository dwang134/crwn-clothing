import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Shop from './routes/shop/Shop'
import Navbar from './components/navbar/Navbar'
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './routes/login/Login';
import {UserProvider} from './contexts/userContext'
import { CategoryProvider } from './contexts/categoryContext';
import { CartContextProvider } from './contexts/cartContext';
import Checkout from './routes/checkout/Checkout';
import Category from './routes/category/Category';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <CartContextProvider><Navbar/></CartContextProvider>,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App/>,
      },
      {
        path: "shop/",
        element: <CategoryProvider><Shop/></CategoryProvider>,
      },
      {
        path: "login",
        element: <UserProvider><Login/></UserProvider>
      },
      {
        path: "checkout",
        element: <Checkout/>
      },
      {
        path: "/shop/:category",
        element: <CategoryProvider><Category/></CategoryProvider>
      },
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
