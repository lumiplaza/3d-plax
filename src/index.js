import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CartContextProvider } from "./context/cartContext";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBYwXPm2vxZXxQwywI0WAa5JdD6YLMSmE",
  authDomain: "ecommerce-coderhouse-d99b9.firebaseapp.com",
  projectId: "ecommerce-coderhouse-d99b9",
  storageBucket: "ecommerce-coderhouse-d99b9.appspot.com",
  messagingSenderId: "436878622647",
  appId: "1:436878622647:web:643203d91c99b4c9d5f232"
};


initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);


reportWebVitals();
