import React from 'react';
import ReactDOM from 'react-dom/client';
import {AuthContextProvider } from "./context/AuthContext "
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <DarkModeContextProvider>
         <App />
    </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

