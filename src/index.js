import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';

import "./index.css";
import { NextUIProvider } from "@nextui-org/react";


export const server = "https://quicker-notes-app-backend.vercel.app/api/v1";

export const Context = createContext({ isAuthenticated: false });
const Appwrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState("70px");
  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        setIsLoading,
        profile,
        setProfile,
        refresh,
        setRefresh,
        sidebarWidth,
        setSidebarWidth,
      }}
    >
      <App />
    </Context.Provider>
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
