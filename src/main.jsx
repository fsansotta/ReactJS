import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_Xldb5Ypy62m_tlB3cUDS1KkejcJPLTY",
  authDomain: "diablosoy-1e273.firebaseapp.com",
  projectId: "diablosoy-1e273",
  storageBucket: "diablosoy-1e273.appspot.com",
  messagingSenderId: "315928684285",
  appId: "1:315928684285:web:856abe83a046f4b28d8094"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
