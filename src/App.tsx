import React from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "firebase";
import { UserApi } from "./api/firebase/UserAPI";

function App() {
  const firebaseApp = firebase.apps[0];

  console.log(UserApi.getAll());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// firebase.initializeApp({
//   apiKey: "AIzaSyDMVezyy6-8iyWJsvuB7f_8lu2KUqxL4Co",
//   authDomain: "resolutionmaster-8c6c1.firebaseapp.com",
//   projectId: "resolutionmaster-8c6c1",
//   storageBucket: "resolutionmaster-8c6c1.appspot.com",
//   messagingSenderId: "825511749097",
//   appId: "1:825511749097:web:6a3dcefb965dac58a2d778",
//   measurementId: "G-0L7WC31K2Y"
// });