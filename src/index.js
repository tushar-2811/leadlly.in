import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';

import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from './Contexts/UserContext';

export const server = "https://localhost:5000/api/v1";



const Appwrapper = () => {



  return (

    <AuthProvider>
      <App />
    </AuthProvider>

  );
};

ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider>
      <ChakraProvider>
        <Appwrapper />
      </ChakraProvider>
    </NextUIProvider>
  </React.StrictMode>
  , document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
