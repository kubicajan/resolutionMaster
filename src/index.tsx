import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";
import { BrowserRouter } from "react-router-dom";

firebase.initializeApp({
  apiKey: "AIzaSyDMVezyy6-8iyWJsvuB7f_8lu2KUqxL4Co",
  authDomain: "resolutionmaster-8c6c1.firebaseapp.com",
  projectId: "resolutionmaster-8c6c1",
  storageBucket: "resolutionmaster-8c6c1.appspot.com",
  messagingSenderId: "825511749097",
  appId: "1:825511749097:web:6a3dcefb965dac58a2d778",
  measurementId: "G-0L7WC31K2Y",
});

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
